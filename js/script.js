/* 저장소 : 개인 저장소 키 */
const personalStorageKeys = ["llmRecords", "llmPrompts", "installedTools", "languageSettings"];

/* 플러그인 : Flicking 인스턴스 보관함 */
const flickingInstances = {};

function storageKey(key) {

  const user = localStorage.getItem("currentUser") || "";

  return user && personalStorageKeys.includes(key) ? `aiGuide:${user}:${key}` : key;
}
/* 저장소 : JSON 데이터 읽음 */
function loadJson(key, fallback) {

  try {

    const value = localStorage.getItem(storageKey(key));

    return value ? JSON.parse(value) : fallback;
  }
  catch {

    return fallback;
  }
}
/* 저장소 : JSON 데이터 저장 */
function saveJson(key, value) {

  localStorage.setItem(storageKey(key), JSON.stringify(value));
}

/* 기능 : 단어 포함 여부 확인 */
function hasAny(text, words = []) {
  return words.some((word) => text.includes(word));

}

/* 기능 : 빈 값과 중복 제거 */
function unique(items) {
  return [...new Set(items.filter(Boolean))];

}

/* 기능 : 선택 옵션 채움 */
function fillSelect($select, options, allLabel, selectedValue, getLabel = (value) => value, allValue = "all") {

  $select.empty().append($("<option>", {
    value: allValue, text: allLabel
  }
  ));

  options.forEach((value) => $select.append($("<option>", {
    value, text: getLabel(value)
  }
  )));

  $select.val(options.includes(selectedValue) ? selectedValue : allValue);
  refreshSelect2($select);
}

/* 계정 : 계정 목록 */
function loadAccounts() {
  return loadJson("aiGuideAccounts", {

  }
  );

}

/* 계정 : 계정 목록 저장 */
function saveAccounts(accounts) {
  localStorage.setItem("aiGuideAccounts", JSON.stringify(accounts));

}

/* 계정 : 로그인 갱신 */
function renderAuth() {

  const user = appData.currentUser;

  $("#authUserText").text(user ? `${user}님` : "").prop("hidden", !user);

  $("#authOpen").prop("hidden", Boolean(user));

  $("#logoutButton").prop("hidden", !user);
}

/* 계정 : 로그인 화면 전환 */
function setAuthMode(mode) {

  const isSignup = mode === "signup";

  $("#authTitle").text(isSignup ? "회원가입" : "로그인");

  $("#loginForm").prop("hidden", isSignup);

  $("#signupForm").prop("hidden", !isSignup);

  $("#authModeToggle").text(isSignup ? "로그인" : "회원가입");

  showAuthMessage("");
}

/* 계정 : 개인 데이터 읽음 */
function reloadUserData() {

  appData.records = loadJson("llmRecords", []);

  appData.prompts = loadJson("llmPrompts", []);

  appData.installedTools = loadJson("installedTools", []);

  appData.languageSettings = loadJson("languageSettings", {

  }
  );

  appData.expandedRecordIndex = null;

  resetForm("#recordForm", "#editingRecordIndex");

  resetForm("#promptForm", "#editingPromptIndex");

  renderUserViews();
}

/* 계정 : 안내 문구 */
function showAuthMessage(message) {
  $("#authMessage").text(message);

}

/* 화면 : 개인 화면 갱신 */
function renderUserViews() {
  [renderAuth, renderRecordFormOptions, renderRecords, renderPrompts, renderSetupChecklist, renderLanguageChecklist,
 renderSearchResults].forEach((render) => render());

}

/* 폼 : 입력값 초기화 */
function resetForm(formSelector, indexSelector = "") {
  if (indexSelector) $(indexSelector).val("");
  $(formSelector)[0]?.reset();
  $(formSelector).find("select").each(function () {
    refreshSelect2($(this));
  });

}

/* 팝업 : 팝업 닫음 */
function closePopup(selector) {
  $(selector).prop("hidden", true);

}

/* 테마 : 화면 모드 */
function applyTheme(theme) {
  const isDark = theme === "dark";
  $("body").toggleClass("dark-mode", isDark);
  $("#themeToggle")
    .attr("aria-pressed", String(isDark))
    .attr("aria-label", isDark ? "라이트모드로 전환" : "다크모드로 전환");
}

/* 플러그인 : 상단 이동 부드럽게 */
function scrollToTop() {
  $("html, body").stop().animate({ scrollTop: 0 }, 520, "easeOutCubic");
}


/* 플러그인 : Flicking 사용 가능 여부 확인 */
function getFlickingClass() {
  return window.Flicking || window.eg?.Flicking;
}

/* 플러그인 : Flicking 기존 인스턴스 제거 */
function destroyFlicking(key) {
  if (!flickingInstances[key]) return;
  flickingInstances[key].destroy();
  delete flickingInstances[key];
}

/* 플러그인 : Flicking 페이지 표시 갱신 */
function updateFlickingPagination(instance, selector) {
  if (!selector) return;
  const total = instance.panelCount || instance.getAllPanels?.().length || 0;
  const current = total ? instance.index : 0;
  const $pagination = $(selector).empty();
  $pagination.append('<button class="flicking-nav-button" type="button" data-action="prev">이전</button>');
  const $dots = $('<div class="flicking-dot-list"></div>').appendTo($pagination);
  Array.from({ length: total }).forEach((_, index) => {
    $dots.append(`<button class="flicking-dot ${index === current ? "active" : ""}" type="button" data-index="${index}" aria-label="${index + 1}페이지"></button>`);
  });
  $pagination.append('<button class="flicking-nav-button" type="button" data-action="next">다음</button>');
  $pagination.find('[data-action="prev"]').prop("disabled", current <= 0);
  $pagination.find('[data-action="next"]').prop("disabled", total === 0 || current >= total - 1);
}

/* 플러그인 : Flicking 단일 영역 적용 */
function initFlicking(key, selector, options = {}, paginationSelector = "") {
  const FlickingClass = getFlickingClass();
  const element = document.querySelector(selector);
  if (!FlickingClass || !element) return;
  destroyFlicking(key);
  const panelCount = element.querySelectorAll(".flicking-camera > *").length;
  if (!panelCount) {
    updateFlickingPagination({ index: 0, panelCount: 0 }, paginationSelector);
    return;
  }
  const instance = new FlickingClass(element, {
    align: "prev",
    bound: true,
    moveType: "snap",
    circular: false,
    ...options
  });
  flickingInstances[key] = instance;
  updateFlickingPagination(instance, paginationSelector);
  instance.on("changed", () => updateFlickingPagination(instance, paginationSelector));
  instance.on("moveEnd", () => updateFlickingPagination(instance, paginationSelector));
  if (paginationSelector) {
    $(paginationSelector).off("click.flicking").on("click.flicking", "button", function () {
      const $button = $(this);
      const action = $button.data("action");
      if (action === "prev") instance.prev().catch(() => {});
      else if (action === "next") instance.next().catch(() => {});
      else instance.moveTo(Number($button.data("index"))).catch(() => {});
    });
  }
}

/* 플러그인 : 개발 분야 가로 목록 적용 */
function initCareerFlicking() {
  const $grid = $("#careerGrid");
  if (!$grid.length) return;
  if (!$grid.children(".flicking-camera").length) {
    $grid.addClass("flicking-viewport").wrapInner('<div class="flicking-camera"></div>');
  }
  if (window.matchMedia("(max-width: 768px)").matches) {
    destroyFlicking("career");
    return;
  }
  initFlicking("career", "#careerGrid");
}

/* 기능 : 도구 페이지 슬라이드 */
function initToolboxFlicking(view) {
  const prefix = view === "all" ? "toolboxAll" : "toolboxStage";
  ["Dev", "Ai"].forEach((kind) => {
    initFlicking(`${prefix}${kind}`, `#${prefix}${kind}Flicking`, {}, `#${prefix}${kind}Pagination`);
  });
}
/* 플러그인 : Flicking 크기 계산 */
function refreshFlickingLayouts() {
  setTimeout(() => Object.values(flickingInstances).forEach((instance) => instance.resize?.()), 0);
}

/* 도구모음 : 화면 크기별 페이지 크기 계산 */
function getToolboxPageSize() {
  return window.matchMedia("(max-width: 768px)").matches ? 6 : 12;
}


function refreshSelect2($select) {
  if ($.fn.select2 && $select.hasClass("select2-hidden-accessible")) $select.trigger("change.select2");
}

/* 플러그인 : Select2 */
function initSelect2Controls() {
  if (!$.fn.select2) return;
  const selectors = [
    "#fieldFilter", "#languageFilter", "#toolboxLanguageFilter", "#toolboxFieldFilter",
    "#aiCompareFirst", "#aiCompareSecond", "#recordField", "#recordLanguage",
    "#recordFieldFilter", "#recordLanguageFilter"
  ].join(", ");

  $(selectors).each(function () {
    const $select = $(this);
    if ($select.hasClass("select2-hidden-accessible")) return;
    $select.select2({
      width: "100%",
      minimumResultsForSearch: 6
    });
  });
}

/* 플러그인 : 필수 입력 검사 */
function initFormValidation() {
  if (!$.fn.validate) return;
  const common = {
    errorClass: "form-error",
    errorElement: "small",
    highlight(element) {
      $(element).attr("aria-invalid", "true");
    },
    unhighlight(element) {
      $(element).removeAttr("aria-invalid");
    }
  };

  $("#signupForm").validate({
    ...common,
    rules: { signupId: "required", signupPassword: { required: true, minlength: 4 } },
    messages: { signupId: "아이디를 입력하세요.", signupPassword: { required: "비밀번호를 입력하세요.", minlength: "비밀번호는 4자 이상 입력하세요." } }
  });

  $("#loginForm").validate({
    ...common,
    rules: { loginId: "required", loginPassword: "required" },
    messages: { loginId: "아이디를 입력하세요.", loginPassword: "비밀번호를 입력하세요." }
  });

  $("#recordForm").validate({
    ...common,
    rules: { recordContent: "required" },
    messages: { recordContent: "학습 내용을 입력하세요." }
  });

  $("#promptForm").validate({
    ...common,
    rules: { promptTitle: "required", promptText: "required" },
    messages: { promptTitle: "프롬프트 제목을 입력하세요.", promptText: "프롬프트 내용을 입력하세요." }
  });
}

/* 필터 : 분야 포함 확인 */
function hasField(tool, field) {
  return field === "all" || (fieldGroups[field] || [field]).some((item) => tool.fields.includes(item));

}

/* 도구모음 : 보기 화면 갱신 */
function renderToolbox() {

  const $target = $("#toolboxStageList").empty();

  const filters = getToolboxFilters();

  if (filters.view === "all") {
    renderToolboxAll($target, toolboxStages, filters);
    renderToolboxNav();
    return;

  }

  const activeStage = toolboxStages[appData.activeToolboxStage] || toolboxStages[0];
  if (!activeStage) return;

  const usePagedLayout = getToolboxPageSize() === 6;
  const devTools = getToolboxTools(activeStage.dev, "dev", filters);
  const aiTools = getToolboxTools(activeStage.ai, "ai", filters);
  const $stage = $(`<article class="toolbox-stage panel"><div class="toolbox-stage-head"><div><p class="eyebrow">${activeStage.subtitle}</p><h3>${activeStage.title}</h3></div></div><div class="toolbox-columns"></div></article>`);

  renderToolboxGroup($stage.find(".toolbox-columns"), "개발 프로그램", devTools, usePagedLayout ? {
    viewportId: "toolboxStageDevFlicking", paginationId: "toolboxStageDevPagination"
  } : {});

  renderToolboxGroup($stage.find(".toolbox-columns"), "AI", aiTools, usePagedLayout ? {
    viewportId: "toolboxStageAiFlicking", paginationId: "toolboxStageAiPagination"
  } : {});

  $target.append($stage);
  if (usePagedLayout) initToolboxFlicking("stage");

  renderToolboxNav();
}
/* 도구모음 : 보기 메뉴 갱신 */
function renderToolboxNav() {

  const view = appData.toolboxView || "stage";
  const activeStage = appData.activeToolboxStage || 0;
  const stageOpenClass = view === "stage" ? " open" : "";
  const $nav = $("#toolboxStageNav").empty();

  $nav.append(`<button class="${view === "all" ? "active" : ""}" type="button" data-view="all">전체보기</button>`);
  $nav.append("<hr>");
  $nav.append(`<button class="stage-toggle ${view === "stage" ? "active" : ""}" type="button" data-view="stage" aria-expanded="${view === "stage"}">단계별 보기</button>`);

  const $stageList = $(`<div class="toolbox-step-list${stageOpenClass}" aria-label="단계 선택"></div>`);
  toolboxStages.forEach((stage, index) => {
    const shortTitle = `${index + 1}단계`;
    $stageList.append(`<button class="step-button ${view === "stage" && activeStage === index ? "active" : ""}" type="button" data-stage="${index}">${shortTitle}</button>`);
  });
  $nav.append($stageList);
}

/* 도구모음 : 전체 도구 출력 */
function renderToolboxAll($target, stages, filters) {

  const devTools = [], aiTools = [];

  stages.forEach((stage) => {
    devTools.push(...getToolboxTools(stage.dev, "dev", filters));
    aiTools.push(...getToolboxTools(stage.ai, "ai", filters));

  }
  );

  const $stage = $('<article class="toolbox-stage panel" id="toolbox-all"><div class="toolbox-stage-head"><div><p class="eyebrow">All Tools</p><h3>전체보기</h3></div></div><div class="toolbox-all-columns"></div></article>');

  renderToolboxGroup($stage.find(".toolbox-all-columns"), "개발 프로그램", uniqueTools(devTools), {
    sectionClass: "toolbox-all-section", gridClass: "toolbox-all-grid", viewportId: "toolboxAllDevFlicking", paginationId: "toolboxAllDevPagination"
  }
  );

  renderToolboxGroup($stage.find(".toolbox-all-columns"), "AI", uniqueTools(aiTools), {
    sectionClass: "toolbox-all-section", gridClass: "toolbox-all-grid", viewportId: "toolboxAllAiFlicking", paginationId: "toolboxAllAiPagination"
  }
  );

  $target.append($stage);
  initToolboxFlicking("all");
}

/* 도구모음 : 중복 도구 제거 */
function uniqueTools(tools) {
  return [...new Map(tools.map((tool) => [tool.name, tool])).values()];

}

/* 도구모음 : 페이지 단위 도구 묶음 */
function chunkItems(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) chunks.push(items.slice(index, index + size));
  return chunks;
}

/* 도구모음 : 필터값 모음 */
function getToolboxFilters() {
  return {
    kind: $("input[name='toolboxKind']:checked").val() || "all",
    language: $("#toolboxLanguageFilter").val() || "all",
    field: $("#toolboxFieldFilter").val() || "all",
    view: appData.toolboxView || "stage"
  };
}

/* 도구모음 : 도구 필터링 */
function getToolboxTools(toolNames, kind, filters) {
  if (filters.kind !== "all" && filters.kind !== kind) return [];

  return toolNames.reduce((list, name) => {
    const tool = toolMap.get(name);
    if (!tool) return list;
    if (filters.language !== "all" && !tool.languages.includes(filters.language)) return list;
    if (!hasField(tool, filters.field)) return list;
    list.push(tool);
    return list;
  }, []);
}
/* 도구모음 : 필터 옵션 */
function renderToolboxFilters() {

  fillSelect($("#toolboxLanguageFilter"), unique(appData.tools.flatMap((tool) => tool.languages)), "전체 언어", "all",
 (language) => languageLabels[language] || language);

  fillSelect($("#toolboxFieldFilter"), studyFields, "전체 분야", "all", (field) => fieldLabels[field] || field);
}

/* 비교기능 : 선택 옵션 */
function renderAiCompareOptions() {

  const aiTools = appData.tools.filter((tool) => tool.type === "ai" || tool.category === "ai").sort((a, b) => a.name.localeCompare(b.name,
 "ko"));

  const $first = $("#aiCompareFirst").empty(), $second = $("#aiCompareSecond").empty();

  aiTools.forEach((tool) => {
    $first.append($("<option>", {
      value: tool.name, text: tool.name
    }
    ));
    $second.append($("<option>", {
      value: tool.name, text: tool.name
    }
    ));

  }
  );

  $second.val(aiTools[1]?.name || aiTools[0]?.name || "");
  refreshSelect2($first);
  refreshSelect2($second);

  renderAiCompare();
}

/* 비교기능 : 선택한 인공지능 비교 */
function renderAiCompare() {

  const first = toolMap.get($("#aiCompareFirst").val()), second = toolMap.get($("#aiCompareSecond").val());

  const costText = (tool) => (!tool ? "-" : tool.cost === "free" ? "무료" : "유료 포함");

  $("#aiCompareResult").html([["이름", first?.name || "-", second?.name || "-"], ["특징", first?.summary || "-", second?.summary || "-"],
 ["비용", costText(first), costText(second)]].map((row) => `<tr><th>${row[0]}</th><td>${row[1]}</td><td>${row[2]}</td></tr>`).join(""));
}

/* 도구카드 : 카드 출력 */
function renderToolboxGroup($target, title, tools, options = {

}
) {

  const sectionClass = options.sectionClass || "toolbox-group", gridClass = options.gridClass || "toolbox-grid";
  const viewportId = options.viewportId || "";
  const paginationId = options.paginationId || "";
  const paginationMarkup = paginationId ? `<div class="flicking-dots" id="${paginationId}" aria-label="${title} 페이지"></div>` : "";
  const headMarkup = viewportId ? `<div class="toolbox-group-head"><h4>${title}</h4></div>` : `<h4>${title}</h4>`;
  const gridMarkup = viewportId ? `<div class="${gridClass} flicking-viewport" id="${viewportId}"><div class="flicking-camera"></div></div>${paginationMarkup}` : `<div class="${gridClass}"></div>`;
  const $group = $(`<section class="${sectionClass}">${headMarkup}${gridMarkup}</section>`);
  const $cardTarget = viewportId ? $group.find(".flicking-camera") : $group.find(`.${gridClass}`);

  if (!tools.length) $cardTarget.append('<div class="toolbox-page"><p class="toolbox-empty">현재 필터에 맞는 도구가 없습니다.</p></div>');
  else if (viewportId) chunkItems(tools, getToolboxPageSize()).forEach((pageTools) => {
    const $page = $('<div class="toolbox-page"></div>');
    pageTools.forEach((tool) => $page.append(getToolboxCard(tool)));
    $cardTarget.append($page);
  });
  else tools.forEach((tool) => $cardTarget.append(getToolboxCard(tool)));

  $target.append($group);
}

/* 도구카드 : 카드 HTML */
function getToolboxCard(tool) {
  return `<a class="toolbox-card" href="${tool.url}" target="_blank" rel="noopener noreferrer"><div class="toolbox-card-top"><img src="${tool.icon}" alt="${tool.name} 아이콘"><div><strong>${tool.name}</strong><span>${tool.cost === "free" ? "무료" : "유료 포함"}</span></div></div><p>${tool.summary}</p></a>`;

}

/* 도구분류 : 설정 카테고리 */
function getToolCategory(tool) {
  return ["ide", "language", "system"].includes(tool.category) ? "ide" : (tool.category || (tool.type === "ai" ? "ai" : "ide"));

}

/* 환경 : 개발환경 체크리스트 출력 */
function renderSetupChecklist() {

  const $target = $("#setupChecklist").empty(), groups = {

  }
  ;

  /* 데이터 : AI 검색 범위 확장 */
appData.tools.forEach((tool) => {
    const category = getToolCategory(tool);
    groups[category] = groups[category] || [];
    groups[category].push(tool);

  }
  );

  toolCategoryOrder.forEach((category) => {

    const tools = groups[category] || [];

    if (!tools.length) return;

    const $section = $(`<section class="tool-category"><h3>${toolCategoryLabels[category] || category}</h3><div class="tool-category-grid"></div></section>`);

    tools.forEach((tool, index) => {
      const toolKey = `${category}-${index}-${tool.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
      $section.find(".tool-category-grid").append(`<label class="setup-item"><input id="setupTool-${toolKey}" name="installedTool" type="checkbox" value="${tool.name}" ${appData.installedTools.includes(tool.name) ? "checked" : ""}><span>${tool.name}</span></label>`);
    });

    $target.append($section);
  }
  );

  $("#setupCount").text(`${appData.installedTools.length}개 완료`);
}

/* 환경 : 사용 언어 목록 출력 */
function renderLanguageChecklist() {

  const $target = $("#languageChecklist").empty();

  languageOptions.forEach((language, index) => {

    const setting = appData.languageSettings[language] || {
      checked: false, level: "기초"
    }
    ;

    const languageKey = `${index}-${language.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
    $target.append(`<div class="language-item"><label><input id="languageCheck-${languageKey}" name="availableLanguage" type="checkbox" value="${language}" ${setting.checked ? "checked" : ""}><span>${language}</span></label><select id="languageLevel-${languageKey}" name="languageLevel" data-language="${language}"><option value="기초" ${setting.level === "기초" ? "selected" : ""}>기초</option><option value="중급" ${setting.level === "중급" ? "selected" : ""}>중급</option><option value="심화" ${setting.level === "심화" ? "selected" : ""}>심화</option></select></div>`);
  }
  );

  $("#languageCount").text(`${Object.values(appData.languageSettings).filter((item) => item.checked).length}개 선택`);
}

/* 학습일지 : 기록 필터 */
function updateRecordFilterOptions() {

  fillSelect($("#recordFieldFilter"), unique([...studyFields, ...appData.records.map((record) => getRecordField(record))]),
 "전체 분야", $("#recordFieldFilter").val() || "all", (field) => fieldLabels[field] || field);

  fillSelect($("#recordLanguageFilter"), unique([...languageOptions, ...appData.records.map((record) => getRecordLanguage(record))]),
 "전체 언어", $("#recordLanguageFilter").val() || "all");
}

/* 학습일지 : 입력 옵션 */
function renderRecordFormOptions() {

  fillSelect($("#recordField"), studyFields, "공부 분야 선택", $("#recordField").val() || "", (field) => fieldLabels[field] || field,
 "");

  fillSelect($("#recordLanguage"), Object.keys(languageLabels), "사용 언어 선택", $("#recordLanguage").val() || "", (language) => languageLabels[language],
 "");
}

/* 학습일지 : 기록 분야 */
function getRecordField(record) {
  const field = record.field || parseGoal(`${record.title || ""} ${record.content || ""}`).fields[0] || "";
  return field === "data" ? "ai" : field === "app" ? "web" : field;

}

/* 학습일지 : 기록 언어 */
function getRecordLanguage(record) {
  if (record.language) return languageLabels[record.language] || record.language;
  const language = parseGoal(`${record.title || ""} ${record.content || ""}`).languages[0] || "";
  return languageLabels[language] || language;

}

/* 학습일지 : 기록 카드 */
function renderRecords() {
  updateRecordFilterOptions();

  const $list = $("#recordList").empty();
  const searchFilter = ($("#recordSearchFilter").val() || "").trim().toLowerCase();
  const fieldFilter = $("#recordFieldFilter").val() || "all";
  const languageFilter = $("#recordLanguageFilter").val() || "all";

  const filteredRecords = appData.records
    .map((record, index) => ({ ...record, index }))
    .filter((record) => !searchFilter || getRecordSearchText(record).includes(searchFilter))
    .filter((record) => fieldFilter === "all" || getRecordField(record) === fieldFilter)
    .filter((record) => languageFilter === "all" || getRecordLanguage(record) === languageFilter);

  $("#recordCount").text(`${filteredRecords.length}개`);

  filteredRecords.forEach((record) => {
    const active = String(record.index) === $("#editingRecordIndex").val() ? "active" : "";
    const expanded = record.index === appData.expandedRecordIndex ? "expanded" : "";
    $list.append(`
      <article class="record-item ${active} ${expanded}" data-index="${record.index}">
        <div class="record-card-top">
          <strong>${record.title}</strong>
          <div>
            <span class="record-date">${record.date}</span>
            <button class="delete-prompt delete-record" type="button" aria-label="학습 기록 삭제">X</button>
          </div>
        </div>
        <div class="record-detail">
          <div class="record-meta">
            <span>${fieldLabels[getRecordField(record)] || "분야 미정"}</span>
            <span>${getRecordLanguage(record) || "언어 미정"}</span>
            <span>${record.ai || "AI 미정"}</span>
          </div>
          <p>${record.content || record.title}</p>
        </div>
      </article>
    `);
  });
}

/* 학습일지 : 검색 텍스트 */
function getRecordSearchText(record) {
  return [record.title, record.content, record.ai, getRecordLanguage(record), fieldLabels[getRecordField(record)]].join(" ").toLowerCase();

}

/* 프롬프트 : 보관함 목록 */
function renderPrompts() {

  const $shelf = $("#promptShelf").empty();

  $("#promptCount").text(`${appData.prompts.length}개`);

  appData.prompts.forEach((prompt, index) => $shelf.append(`<article class="prompt-item ${String(index) === $("#editingPromptIndex").val() ? "active" : ""}" data-index="${index}"><strong>${prompt.title}</strong><button class="delete-prompt" type="button" aria-label="${prompt.title} 삭제">X</button></article>`));
}

/* 홈검색 : 검색 조건 */
function getSearchFilters() {
  return {
    cost: $("input[name='cost']:checked").val(), field: $("#fieldFilter").val(), language: $("#languageFilter").val(),
 goal: $("#goalInput").val().trim().toLowerCase()
  }
  ;

}

/* 홈검색 : 목표 관련성 */
function matchesGoal(tool, goal) {

  if (!goal) return true;

  const inferred = parseGoal(goal);

  return tool.fields.some((field) => inferred.fields.includes(field)) || tool.languages.some((language) => inferred.languages.includes(language)) || inferred.categories.includes(getToolCategory(tool)) || tool.name.toLowerCase().includes(goal);
}

/* 홈추천 : 점수순 정렬 */
function getRecommendedTools() {

  const filters = getSearchFilters();

  return appData.tools.filter((tool) => (filters.cost === "all" || tool.cost === filters.cost) && hasField(tool,
 filters.field) && (filters.language === "all" || tool.languages.includes(filters.language)) && supportsOs(tool) && matchesGoal(tool,
 filters.goal)).sort((a, b) => getToolScore(b, filters.goal) - getToolScore(a, filters.goal));
}

/* 홈추천 : OS 지원 확인 */
function supportsOs(tool) {
  return (osCompatibility[tool.name] || allOs).includes(appData.selectedOs);

}

/* 홈추천 : 관련도 점수 계산 */
function getToolScore(tool, goal) {

  const inferred = parseGoal(goal);

  let score = getLanguageScore(tool, goal);

  if (goal && tool.name.toLowerCase().includes(goal)) score += 26;

  if (tool.category === "language" && tool.languages.some((language) => inferred.languages.includes(language))) score += 18;

  score += tool.fields.filter((field) => inferred.fields.includes(field)).length * 8;

  score += tool.languages.filter((language) => inferred.languages.includes(language)).length * 7;

  if (inferred.categories.includes(getToolCategory(tool))) score += 6;

  if (tool.cost === "free") score += 1;

  if (tool.type === "dev") score += 1;

  return score;
}

/* 홈추천 : 언어 우선순위 계산 */
function getLanguageScore(tool, goal) {

  const matched = languagePriorityRules.find((set) => hasAny(goal, set.words));

  const index = matched ? matched.order.indexOf(tool.name) : -1;

  return index === -1 ? 0 : 80 - index * 12;
}

/* 홈검색 : 키워드 신호 추출 */
function parseGoal(goal) {

  const signals = {
    fields: [], languages: [], categories: []
  }
  ;

  goalKeywordRules.forEach((rule) => {

    if (!hasAny(goal, rule.words)) return;

    signals.fields.push(...(rule.fields || []));

    signals.languages.push(...(rule.languages || []));

    signals.categories.push(...(rule.categories || []));
  }
  );

  signals.fields = unique(signals.fields);

  signals.languages = unique(signals.languages);

  signals.categories = unique(signals.categories);

  return signals;
}

/* 홈추천 : 추천 결과 출력 */
function renderSearchResults() {

  if (!appData.hasSearched) {
    $("#recommendList").prop("hidden", true).empty();
    return;

  }

  const $target = $("#recommendList").prop("hidden", false).empty();

  const list = getRecommendedTools();

  if (!list.length) {
    $target.append('<article class="recommend-card"><div class="card-main"><div class="card-top"><h3>조건에 맞는 추천이 없습니다</h3></div><p>OS, 분야, 언어 필터를 줄이거나 목표를 조금 더 구체적으로 입력해 보세요.</p></div></article>');
    return;

  }

  renderRecommendationGroup($target, "개발앱 추천", getTopRecommendations(list, "dev"));

  renderRecommendationGroup($target, "AI 추천", getTopRecommendations(list, "ai"));
}

/* 홈추천 : 상위 3개 선택 */
function getTopRecommendations(list, type) {
  return list.filter((tool) => tool.type === type).slice(0, 3);

}

/* 홈추천 : 추천 카드 추가 */
function renderRecommendationGroup($target, title, tools) {

  if (!tools.length) return;

  const $group = $(`<section class="recommend-group"><h3>${title}</h3></section>`);

  tools.forEach((tool) => {

    const actionMarkup = appData.installedTools.includes(tool.name) ? '<span class="installed-mark">✓ 세팅 완료</span>' : `<a class="download-btn" href="${tool.url}" target="_blank" rel="noopener">원클릭 다운로드</a>`;

    $group.append(`<article class="recommend-card"><img class="tool-icon" src="${tool.icon}" alt="${tool.name} 아이콘"><div class="card-main"><div class="card-top"><h3>${tool.name}</h3><div class="badge-row"><span class="badge ${tool.cost === "paid" ? "paid" : ""}">${tool.cost === "free" ? "무료" : "유료 포함"}</span></div></div><p>${tool.summary}</p><p class="version-note">추천: ${tool.recommendedVersion || "최신 안정판"}</p></div><div class="card-actions">${actionMarkup}</div></article>`);
  }
  );

  $target.append($group);
}



