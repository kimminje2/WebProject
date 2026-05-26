/* AI 채팅 : 로컬 모델 연결과 제한형 답변 처리 */

/* 로컬 AI : Ollama 연결 정보 */
const ollamaEndpoint = "http://127.0.0.1:11434/api/chat";
const ollamaModel = "gemma3:1b";

/* 홈검색 : 추천 방식 전환 */
function setSearchMode(mode) {
  const isOllama = mode === "ollama";
  appData.searchMode = isOllama ? "ollama" : "keyword";
  $(".mode-track").attr("data-active", appData.searchMode);
  $(".search-mode-option").each(function () {
    const active = $(this).data("search-mode") === appData.searchMode;
    $(this).toggleClass("active", active).attr("aria-pressed", String(active));
  });
  $("#goalInput").attr("placeholder", isOllama ? "AI에게 질문하세요. 예: C언어 기초 학습 순서를 알려줘" : "무엇을 만들고 싶나요? 예: 파이썬 챗봇, 웹 포트폴리오, 게임");
  $("#goalForm button[type='submit']").text(isOllama ? "전송" : "추천");
  $("#localAiChat").prop("hidden", !isOllama);
  if (isOllama) {
    $("#recommendList").prop("hidden", true);
    if (!$("#localAiMessages").children().length) {
      const message = location.protocol === "file:"
        ? "AI 채팅은 파일 직접 실행에서 사용할 수 없습니다. Ollama와 Gemma3:1b 다운로드 이후 http://127.0.0.1:5500 주소로 다시 열어 주세요."
        : "보유한 개발 도구 데이터를 바탕으로 답합니다. 개발 목표나 학습 목적을 입력해 보세요.";
      appendLocalAiMessage("assistant", message);
    }
  } else {
    renderSearchResults();
  }
}

/* 로컬 AI : 채팅 메시지 출력 */
function appendLocalAiMessage(role, content, pending = false) {
  const $message = $("<article>", { class: `local-ai-message ${role}${pending ? " pending" : ""}` });
  $("<span>", { class: "local-ai-role", text: role === "user" ? "나" : "AI" }).appendTo($message);
  const $body = $("<p>", { text: content }).appendTo($message);
  const $list = $("#localAiMessages").append($message);
  $list.scrollTop($list[0].scrollHeight);
  return { $message, $body };
}

/* 로컬 AI : 주제 범위 확인 */
function isGuideQuestion(question) {
  const normalized = question.toLowerCase();
  const signals = parseGoal(normalized);
  const guideWords = [
    "개발", "코딩", "프로그래밍", "웹", "앱", "서버", "api", "ide", "ai", "llm", "git", "github", "docker", "linux", "리눅스", "보안", "데이터베이스", "머신러닝", "게임 개발"
  ];
  const includesOwnedTool = appData.tools.some((tool) => normalized.includes(tool.name.toLowerCase()));
  return signals.fields.length > 0 || signals.languages.length > 0 || signals.categories.length > 0 || includesOwnedTool || hasAny(normalized, guideWords);
}

/* 로컬 AI : 보유 데이터 추천 도구 선택 */
function getOwnedToolRecommendations() {
  const filters = getSearchFilters();
  const recommended = getRecommendedTools();
  const candidates = recommended.length ? recommended : appData.tools.filter((tool) => matchesSearchFilters(tool, filters));
  const aiWords = ["ai", "인공지능", "머신러닝", "llm", "챗봇", "gemma", "codex", "copilot", "claude"];
  const includeAi = hasAny(filters.goal, aiWords);
  return uniqueTools([...getTopRecommendations(candidates, "dev"), ...(includeAi ? getTopRecommendations(candidates, "ai") : [])]).slice(0, 6);
}

/* 로컬 AI : 보유 데이터 추천 후보 구성 */
function getOwnedToolContext(tools) {
  return tools.map((tool) => `${tool.name} | 종류=${tool.type === "ai" ? "AI" : "개발 프로그램"} | 비용=${tool.cost === "free" ? "무료" : "유료 포함"} | 추천 버전=${tool.recommendedVersion || "최신 안정판"} | 설명=${tool.summary}`).join("\n");
}

/* 로컬 AI : 추천 카드 출력 */
function renderAiRecommendationCards(tools) {
  const $target = $("#recommendList").empty();
  if (!tools.length) {
    $target.prop("hidden", true);
    return;
  }
  $target.prop("hidden", false);
  renderRecommendationGroup($target, "AI 추천 개발앱", getTopRecommendations(tools, "dev"));
  renderRecommendationGroup($target, "AI 추천", getTopRecommendations(tools, "ai"));
}


/* 로컬 AI : 답변 표시 형식 정리 */
function formatAiReply(content) {
  return content
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/```[^\n]*\n?|```/g, ""))
    .replace(/\*\*|__/g, "")
    .replace(/`/g, "")
    .replace(/^\s*#{1,6}\s*/gm, "")
    .replace(/^\s*(?:\d+\s*단계\s*[:：][^\n]*|추가\s*팁\s*[:：]?)\s*$/gm, "")
    .replace(/^\s*(?:[-*+]|\d+[.)])\s*/gm, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

/* 로컬 AI : 설명형 답변을 세 문장 이내로 제한 */
function getAiExplanation(content) {
  const answer = formatAiReply(content).replace(/\s*\n+\s*/g, " ");
  if (!answer) return "질문에 맞는 개발 방향을 정리하지 못했습니다. 목표나 현재 학습 단계를 조금 더 구체적으로 입력해 주세요.";
  const sentences = answer.match(/[^.!?。！？]+[.!?。！？]+|[^.!?。！？]+$/g) || [];
  return sentences.slice(0, 3).join(" ").trim();
}
/* 로컬 AI : 현재 선택 조건 안내 생성 */
function getOllamaGuidePrompt(tools) {
  const filters = getSearchFilters();
  const os = osLabels[appData.selectedOs] || appData.selectedOs;
  const field = filters.field === "all" ? "지정 없음" : (fieldLabels[filters.field] || filters.field);
  const language = filters.language === "all" ? "지정 없음" : (languageLabels[filters.language] || filters.language);
  const cost = filters.cost === "free" ? "무료 중심" : filters.cost === "paid" ? "유료 포함 가능" : "제한 없음";
  const toolContext = getOwnedToolContext(tools);
  return `너는 개발 초보자를 위한 AI 개발 가이드의 채팅 도우미다.
개발 도구 추천과 개발 학습 질문에 한국어로 답하라.
도구를 언급할 때는 아래 보유 도구 데이터에 있는 이름과 특징만 근거로 사용하고 목록에 없는 도구는 새로 제안하지 마라.
인삿말이나 제목을 붙이지 말고 객관적인 사실과 정보만 제공하라. 
번호, 단계 제목, 글머리표, 목록 형식을 만들지 말고 답하라.
답변은 사용자의 질문 자체에 대한 이해, 학습 방향, 선택 이유 또는 다음 행동을 중심으로 추천 이유, 방향성, 공부하면 좋을 내용을 자연스러운 답변을 2~3문장으로 작성하고 이어서 추천 도구 3개와 그 이유, 정보, 공부방법을 설명하라.
추천 도구 카드는 답변 아래에 별도로 표시되므로 도구 목록만 반복해서 나열하지 말고, 필요한 경우 후보를 고르는 이유만 간단히 설명하라.
별표, 샵, 하이픈, 코드 장식 기호 같은 마크다운 표현은 사용하지 마라.
현재 조건: OS=${os}, 분야=${field}, 언어=${language}, 비용=${cost}.
화면에 별도 카드로 표시할 수 있는 도구 데이터:
${toolContext}`;
}
/* 로컬 AI : 답변 요청 */
async function requestOllamaReply() {
  const question = $("#goalInput").val().trim();
  if (!question || appData.ollamaPending) return;
  if (location.protocol === "file:") return;

  appendLocalAiMessage("user", question);
  $("#recommendList").prop("hidden", true).empty();
  if (!isGuideQuestion(question)) {
    appendLocalAiMessage("assistant", "이 채팅은 개발 도구 추천과 개발 학습 질문을 돕습니다.\n 예:\n '웹 개발을 시작할 도구를 추천해줘'\n 'Python으로 AI를 만들려면 무엇을 설치해야 해?'\n '보안 공부를 시작할 도구를 알려줘'처럼 질문해 주세요.");
    return;
  }

  const recommendedTools = getOwnedToolRecommendations();
  appData.ollamaPending = true;
  appData.ollamaMessages.push({ role: "user", content: question });
  const waiting = appendLocalAiMessage("assistant", "답변을 생성하고 있습니다...", true);
  const $submit = $("#goalForm button[type='submit']").prop("disabled", true).text("생성 중");

  try {
    const response = await fetch(ollamaEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: ollamaModel,
        messages: [{ role: "system", content: getOllamaGuidePrompt(recommendedTools) }, ...appData.ollamaMessages.slice(-8)],
        stream: false,
        options: { temperature: 0.3, num_predict: 120 }
      })
    });
    if (!response.ok) throw new Error(`AI 응답 오류 (${response.status})`);
    const data = await response.json();
    const answer = getAiExplanation(data.message?.content || "");
    waiting.$message.removeClass("pending");
    waiting.$body.text(answer);
    appData.ollamaMessages.push({ role: "assistant", content: answer });
    renderAiRecommendationCards(recommendedTools);
  } catch (error) {
    waiting.$message.removeClass("pending").addClass("error");
    waiting.$body.text("AI 채팅에 연결할 수 없습니다. 로컬 AI 실행 상태를 확인하고 http://127.0.0.1:5500 주소로 접속해 주세요.");
  } finally {
    appData.ollamaPending = false;
    $submit.prop("disabled", false).text("전송");
  }
}
