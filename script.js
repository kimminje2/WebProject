/* 저장소 관리 함수 : 로그인한 계정이 있으면 개인 저장소 키를 사용합니다. */
const personalStorageKeys = ["llmRecords", "llmPrompts", "installedTools", "languageSettings"];

function storageKey(key) {
  
  const user = localStorage.getItem("currentUser") || "";
  
  return user && personalStorageKeys.includes(key) ? `aiGuide:${user}:${key}` : key;
}
/* 저장소 관리 함수 : localStorage에서 JSON 데이터를 안전하게 읽습니다. */
function loadJson(key, fallback) {
  
  try {
    
    const value = localStorage.getItem(storageKey(key));
    
    return value ? JSON.parse(value) : fallback;
  }
  catch {
    
    return fallback;
  }
}
/* 저장소 관리 함수 : 배열이나 객체를 JSON 문자열로 저장합니다. */
function saveJson(key, value) {
  
  localStorage.setItem(storageKey(key), JSON.stringify(value));
}
const appData = {
  
  /* 도구 데이터 : 검색, 추천, 도구 모음에 사용하는 전체 도구 목록입니다. */
  tools: [
  [
  "LM Studio",
  "ai",
  "ai",
  "free",
  ["ai", "web", "app"],
  ["python", "javascript"],
  "lmstudio.ai",
  "https://lmstudio.ai/download",
  "데스크톱 최신 안정판",
  "GUI로 모델 검색, 다운로드, 로컬 서버 실행까지 가능한 초보자 친화형 로컬 LLM 앱입니다."
  ],
  [
  "Ollama",
  "ai",
  "ai",
  "free",
  ["ai", "web", "data"],
  ["python", "javascript"],
  "ollama.com",
  "https://ollama.com/download",
  "OS별 최신 안정판 + Gemma 계열 모델",
  "명령어 한 줄로 Llama, Gemma, Qwen 같은 모델을 설치하고 API처럼 사용할 수 있습니다."
  ],
  [
  "Jan",
  "ai",
  "ai",
  "free",
  ["ai", "app", "web"],
  ["python", "javascript"],
  "jan.ai",
  "https://jan.ai/download",
  "데스크톱 최신 안정판",
  "오픈소스 ChatGPT 대체 앱으로, 로컬 모델과 온라인 모델을 한 화면에서 관리할 수 있습니다."
  ],
  [
  "GPT4All",
  "ai",
  "ai",
  "free",
  ["ai", "data"],
  ["python"],
  "gpt4all.io",
  "https://docs.gpt4all.io/",
  "Desktop App + Python SDK",
  "데스크톱 앱과 Python SDK를 제공하며, 문서 기반 질의응답 실습에 적합합니다."
  ],
  [
  "Continue",
  "dev",
  "ai",
  "free",
  ["web", "app", "data", "ai"],
  ["javascript", "python", "java", "csharp"],
  "continue.dev",
  "https://www.continue.dev/",
  "VS Code Extension 최신 안정판",
  "VS Code와 JetBrains에서 로컬 LLM을 연결해 코드 설명, 수정, 테스트 생성을 도와주는 확장 도구입니다."
  ],
  [
  "Cursor",
  "dev",
  "code",
  "paid",
  ["web", "app", "data", "ai"],
  ["javascript", "python", "java", "csharp"],
  "cursor.com",
  "https://www.cursor.com/downloads",
  "Stable Build",
  "AI 기능이 편집기 안에 통합된 개발 도구입니다."
  ],
  [
  "Phind",
  "ai",
  "ai",
  "free",
  ["ai", "web"],
  ["python", "javascript", "java"],
  "phind.com",
  "https://www.phind.com/",
  "Web 최신 버전",
  "개발 질문에 특화된 검색형 AI로, 공식 문서 기반 답변을 빠르게 찾기 좋습니다."
  ],
  [
  "Visual Studio Code",
  "dev",
  "ide",
  "free",
  ["web","app","data","ai","game"],
  ["javascript","python","java","c","csharp"],
  "code.visualstudio.com",
  "https://code.visualstudio.com/download",
  "Stable x64",
  "초보자가 가장 많이 쓰는 코드 편집기입니다. 확장 프로그램으로 AI 코딩 도구와 연결하기 쉽습니다."
  ],
  [
  "Google Chrome",
  "dev",
  "web",
  "free",
  ["web","app"],
  ["javascript"],
  "google.com",
  "https://www.google.com/chrome/",
  "최신 안정판",
  "브라우저 개발자 도구로 HTML, CSS, JavaScript 동작을 확인하고 디버깅합니다."
  ],
  [
  "Python",
  "dev",
  "language",
  "free",
  ["data","ai","web"],
  ["python"],
  "python.org",
  "https://www.python.org/downloads/",
  "Python 3 최신 안정판",
  "AI, 데이터 분석, 자동화, 백엔드 입문에 가장 많이 쓰이는 개발 언어 실행 환경입니다."
  ],
  [
  "PyCharm Community",
  "dev",
  "ide",
  "free",
  ["data","ai","web"],
  ["python"],
  "jetbrains.com",
  "https://www.jetbrains.com/pycharm/download/",
  "Community Edition",
  "Python 기초, 데이터 분석, 백엔드 학습에 쓰기 좋은 Python 전용 IDE입니다."
  ],
  [
  "JDK",
  "dev",
  "language",
  "free",
  ["app","web"],
  ["java"],
  "oracle.com",
  "https://www.oracle.com/java/technologies/downloads/",
  "JDK LTS",
  "Java 프로그램을 컴파일하고 실행하기 위한 필수 개발 환경입니다."
  ],
  [
  "IntelliJ IDEA Community",
  "dev",
  "ide",
  "free",
  ["web","app"],
  ["java"],
  "jetbrains.com",
  "https://www.jetbrains.com/idea/download/",
  "Community Edition",
  "Java와 Kotlin 학습에 적합한 대표 IDE입니다."
  ],
  [
  "Eclipse IDE",
  "dev",
  "ide",
  "free",
  ["web","app"],
  ["java"],
  "eclipseide.org",
  "https://eclipseide.org/",
  "최신 안정판",
  "Java 개발 수업과 팀 프로젝트에서 많이 쓰는 무료 IDE입니다."
  ],
  [
  "Visual Studio Community",
  "dev",
  "ide",
  "free",
  ["app","game"],
  ["c","csharp"],
  "visualstudio.microsoft.com",
  "https://visualstudio.microsoft.com/vs/community/",
  "Community + Desktop development with C++ workload",
  "Windows에서 C/C++ 기초, 콘솔 프로그램, 데스크탑 개발을 시작하기 좋은 대표 IDE입니다."
  ],
  [
  "MinGW-w64",
  "dev",
  "language",
  "free",
  ["app","system"],
  ["c"],
  "mingw-w64.org",
  "https://www.mingw-w64.org/downloads/",
  "MSYS2 기반 최신 안정판",
  "Windows에서 C/C++ 컴파일러를 설치해 VS Code와 함께 사용할 때 유용합니다."
  ],
  [
  "GCC",
  "dev",
  "language",
  "free",
  ["system","app"],
  ["c"],
  "gcc.gnu.org",
  "https://gcc.gnu.org/",
  "Linux build-essential 또는 GCC 최신 안정판",
  "Linux/Ubuntu에서 C언어 기초 실습에 가장 기본적으로 쓰이는 컴파일러입니다."
  ],
  [
  "Ubuntu Desktop",
  "dev",
  "system",
  "free",
  ["system","security","ai"],
  [],
  "ubuntu.com",
  "https://ubuntu.com/download/desktop",
  "Ubuntu LTS",
  "리눅스 개발, 서버 실습, AI/보안 실습 환경으로 쓰기 좋은 데스크톱 리눅스 배포판입니다."
  ],
  [
  "WSL2 + Ubuntu",
  "dev",
  "system",
  "free",
  ["system","web","ai","security"],
  [],
  "learn.microsoft.com",
  "https://learn.microsoft.com/windows/wsl/install",
  "WSL2 + Ubuntu LTS",
  "Windows에서 Linux 명령어, 서버, Python/Node 개발 환경을 함께 쓰기 좋은 기본 환경입니다."
  ],
  [
  "Git",
  "dev",
  "collab",
  "free",
  ["web","system","collab"],
  [],
  "git-scm.com",
  "https://git-scm.com/downloads",
  "최신 안정판",
  "소스코드 버전 관리의 기본 도구입니다."
  ],
  [
  "GitHub",
  "dev",
  "collab",
  "free",
  ["web","collab"],
  [],
  "github.com",
  "https://github.com/",
  "Web + GitHub Desktop 조합",
  "코드 저장소, 이슈, 프로젝트 보드, Pull Request로 팀 개발을 관리하는 협업 플랫폼입니다."
  ],
  [
  "GitHub Desktop",
  "dev",
  "collab",
  "free",
  ["web","collab"],
  [],
  "desktop.github.com",
  "https://desktop.github.com/download/",
  "최신 안정판",
  "Git 명령어가 익숙하지 않은 초보자가 GitHub 저장소를 GUI로 관리하기 좋은 앱입니다."
  ],
  [
  "Node.js",
  "dev",
  "web",
  "free",
  ["web","app","system"],
  ["javascript"],
  "nodejs.org",
  "https://nodejs.org/",
  "LTS",
  "JavaScript로 서버와 개발 도구를 실행하는 웹 개발 기본 런타임입니다."
  ],
  [
  "React",
  "dev",
  "ui",
  "free",
  ["web","app"],
  ["javascript"],
  "react.dev",
  "https://react.dev/",
  "최신 안정판",
  "컴포넌트 기반으로 웹 화면과 상태를 구성하는 대표 프론트엔드 라이브러리입니다."
  ],
  [
  "Vue",
  "dev",
  "ui",
  "free",
  ["web","app"],
  ["javascript"],
  "vuejs.org",
  "https://vuejs.org/",
  "최신 안정판",
  "반응형 데이터를 익히기 좋은 프론트엔드 프레임워크입니다."
  ],
  [
  "Jupyter Notebook",
  "dev",
  "data",
  "free",
  ["ai","data"],
  ["python"],
  "jupyter.org",
  "https://jupyter.org/",
  "JupyterLab",
  "Python 코드, 실행 결과, 분석 메모를 한 문서에서 다루는 데이터 학습 도구입니다."
  ],
  [
  "pandas",
  "dev",
  "data",
  "free",
  ["ai","data"],
  ["python"],
  "pandas.pydata.org",
  "https://pandas.pydata.org/",
  "최신 안정판",
  "CSV와 표 데이터를 정리, 가공, 분석하는 Python 데이터 처리 라이브러리입니다."
  ],
  [
  "scikit-learn",
  "dev",
  "data",
  "free",
  ["ai","data"],
  ["python"],
  "scikit-learn.org",
  "https://scikit-learn.org/",
  "최신 안정판",
  "머신러닝 기본기를 익히기 좋은 Python 라이브러리입니다."
  ],
  [
  "PyTorch",
  "dev",
  "ai",
  "free",
  ["ai","data"],
  ["python"],
  "pytorch.org",
  "https://pytorch.org/",
  "최신 안정판",
  "딥러닝 모델과 실험 코드를 유연하게 만들 수 있는 대표 프레임워크입니다."
  ],
  [
  "TensorFlow",
  "dev",
  "ai",
  "free",
  ["ai","data"],
  ["python"],
  "tensorflow.org",
  "https://www.tensorflow.org/",
  "최신 안정판",
  "딥러닝 모델 학습과 배포를 지원하는 머신러닝 프레임워크입니다."
  ],
  [
  "MySQL",
  "dev",
  "data",
  "free",
  ["database","data","web"],
  ["sql"],
  "mysql.com",
  "https://www.mysql.com/downloads/",
  "Community Server",
  "SQL과 관계형 데이터베이스 기초를 익히기 좋은 대표 DB입니다."
  ],
  [
  "PostgreSQL",
  "dev",
  "data",
  "free",
  ["database","data","web"],
  ["sql"],
  "postgresql.org",
  "https://www.postgresql.org/download/",
  "최신 안정판",
  "정규화, 인덱스, 성능 튜닝을 익히기 좋은 오픈소스 DB입니다."
  ],
  [
  "Docker",
  "dev",
  "system",
  "free",
  ["web","system","database"],
  [],
  "docker.com",
  "https://www.docker.com/products/docker-desktop/",
  "Docker Desktop 최신 안정판",
  "개발 환경과 배포 환경을 컨테이너로 동일하게 맞추는 실전 도구입니다."
  ],
  [
  "Arduino",
  "dev",
  "embedded",
  "free",
  ["embedded"],
  ["c"],
  "arduino.cc",
  "https://www.arduino.cc/en/software",
  "Arduino IDE",
  "마이크로컨트롤러로 LED, 센서, 모터를 제어하며 하드웨어를 배웁니다."
  ],
  [
  "Unity",
  "dev",
  "game",
  "paid",
  ["game"],
  ["csharp"],
  "unity.com",
  "https://unity.com/download",
  "Unity Hub + 최신 LTS 에디터",
  "C# 기반 게임 개발에 적합합니다."
  ],
  [
  "OWASP ZAP",
  "dev",
  "security",
  "free",
  ["security","web"],
  [],
  "zaproxy.org",
  "https://www.zaproxy.org/download/",
  "Cross Platform Package",
  "웹 애플리케이션 취약점 점검을 연습하기 좋은 보안 테스트 도구입니다."
  ],
  [
  "Wireshark",
  "dev",
  "security",
  "free",
  ["security","data"],
  ["python"],
  "wireshark.org",
  "https://www.wireshark.org/download.html",
  "Stable Release",
  "네트워크 패킷을 캡처하고 분석하는 대표 도구입니다."
  ],
  [
  "Nmap",
  "dev",
  "security",
  "free",
  ["security"],
  ["python"],
  "nmap.org",
  "https://nmap.org/download.html",
  "Latest Stable",
  "호스트 탐색, 포트 스캔, 서비스 확인을 학습할 수 있는 보안 기본 도구입니다."
  ],
  [
  "Burp Suite Community",
  "dev",
  "security",
  "free",
  ["security","web"],
  [],
  "portswigger.net",
  "https://portswigger.net/burp/communitydownload",
  "Community Edition",
  "웹 요청을 프록시로 확인하며 웹 보안 테스트 흐름을 익히는 도구입니다."
  ],
  [
  "Notion Desktop",
  "dev",
  "collab",
  "free",
  ["collab","data"],
  [],
  "notion.com",
  "https://www.notion.com/desktop",
  "Windows/macOS Desktop App",
  "팀 프로젝트 문서, 회의록, 할 일, 개발 일지를 정리하기 좋은 협업 앱입니다."
  ],
  [
  "Slack",
  "dev",
  "collab",
  "free",
  ["collab"],
  [],
  "slack.com",
  "https://slack.com/downloads",
  "Desktop App 최신 안정판",
  "채널 기반 팀 커뮤니케이션과 파일 공유에 강한 협업 메신저입니다."
  ],
  [
  "Confluence",
  "dev",
  "collab",
  "paid",
  ["data","collab"],
  [],
  "atlassian.com",
  "https://www.atlassian.com/software/confluence",
  "Cloud 최신 버전",
  "팀 프로젝트 문서, 회의록, 개발 가이드 관리에 좋은 협업 도구입니다."
  ],
  [
  "ChatGPT",
  "ai",
  "ai",
  "free",
  ["ai","web","data","security"],
  ["python","javascript","java","csharp"],
  "chatgpt.com",
  "https://chatgpt.com/",
  "최신 모델",
  "오류 분석, 코드 설명, 구조 개선, SQL 생성에 폭넓게 활용할 수 있습니다."
  ],
  [
  "GitHub Copilot",
  "ai",
  "ai",
  "paid",
  ["ai","web","app"],
  ["python","javascript","java","csharp"],
  "github.com",
  "https://github.com/features/copilot",
  "VS Code 또는 JetBrains Extension",
  "함수, 클래스, 테스트 코드 자동완성에 강한 대표 AI 코딩 도우미입니다."
  ],
  [
  "Gemini",
  "ai",
  "ai",
  "free",
  ["ai","web","data"],
  ["python","javascript","java"],
  "gemini.google.com",
  "https://gemini.google.com/",
  "Gemini 앱 또는 Google AI Studio",
  "긴 문서 요약, 아이디어 정리, 코드 설명에 활용하기 좋은 Google AI입니다."
  ],
  [
  "Gemma",
  "ai",
  "ai",
  "free",
  ["ai"],
  ["python"],
  "ai.google.dev",
  "https://ai.google.dev/gemma",
  "Ollama/LM Studio에서 실행 가능한 최신 Gemma 모델",
  "로컬 LLM 실습에 쓰기 좋은 Google의 오픈 모델 계열입니다."
  ],
  [
  "Claude",
  "ai",
  "ai",
  "paid",
  ["ai","web","data"],
  ["python","javascript","java"],
  "claude.ai",
  "https://claude.ai/",
  "Claude.ai 최신 모델",
  "긴 맥락 이해, 코드 설명, 문서 분석에 강한 AI 서비스입니다."
  ],
  [
  "Claude Code",
  "ai",
  "ai",
  "paid",
  ["ai","web","app"],
  ["python","javascript","java"],
  "anthropic.com",
  "https://docs.anthropic.com/en/docs/claude-code/overview",
  "npm 최신 패키지",
  "터미널에서 프로젝트를 읽고 수정하는 에이전트형 코딩 AI입니다."
  ],
  [
  "OpenAI Codex",
  "ai",
  "ai",
  "paid",
  ["ai","web","app"],
  ["python","javascript","java"],
  "openai.com",
  "https://openai.com/codex",
  "Codex 앱 또는 Codex CLI 최신 버전",
  "코드 작성, 리뷰, 테스트 실행, 리팩터링을 도와주는 코딩 에이전트입니다."
  ],
  [
  "Codeium / Windsurf",
  "ai",
  "ai",
  "free",
  ["ai","web","app"],
  ["python","javascript","java"],
  "windsurf.com",
  "https://windsurf.com/",
  "Windsurf 최신 안정판 또는 Codeium Extension",
  "빠르고 가벼운 AI 자동완성 도구입니다."
  ],
  [
  "Google Stitch",
  "ai",
  "ai",
  "free",
  ["web","app","ui"],
  ["javascript"],
  "stitch.withgoogle.com",
  "https://stitch.withgoogle.com/",
  "Web 최신 버전",
  "텍스트, 이미지, 음성으로 웹/앱 UI 시안과 프로토타입을 빠르게 생성하는 AI 디자인 도구입니다."
  ],
  [
  "v0.dev",
  "ai",
  "ai",
  "free",
  ["web"],
  ["javascript"],
  "v0.dev",
  "https://v0.dev/",
  "Web 최신 버전",
  "UI 설명을 입력하면 React 기반 화면 코드를 빠르게 생성해주는 프론트엔드 AI 도구입니다."
  ],
  ["Notion AI", "ai", "collab", "paid", ["data", "collab"], [], "notion.so", "https://www.notion.com/product/ai",
"Notion AI 최신 버전", "개발 일지, 회의록, 요구사항 정리, 문서 초안 작성에 유용합니다."],
  ["Metasploit Framework", "dev", "security", "free", ["security"], ["python"], "metasploit.com",
"https://www.metasploit.com/download", "Framework 최신 안정판", "침투 테스트 학습용 프레임워크입니다. 반드시 허가된 실습 환경에서만 사용해야 합니다."],
  ["Amazon Q Developer", "ai", "ai", "free", ["ai", "web", "security"], ["python", "javascript", "java"],
"aws.amazon.com", "https://aws.amazon.com/q/developer/", "VS Code/JetBrains Extension", "AWS 환경 코드 생성과 보안 스캔에 강한 AI 개발 보조 도구입니다."],
  ["Snyk Code / DeepCode", "ai", "ai", "free", ["security", "web"], ["python", "javascript", "java"],
"snyk.io", "https://snyk.io/product/snyk-code/", "Snyk Code 최신 버전", "DeepCode 기반 정적 분석으로 버그와 보안 취약점을 자동 탐지하는 코드 품질 도구입니다."],
  ["Qodo / CodiumAI", "ai", "ai", "free", ["ai", "web"], ["python", "javascript", "java"],
"qodo.ai", "https://www.qodo.ai/", "IDE Extension 최신 안정판", "테스트 코드 생성과 코드 동작 설명에 특화된 AI 개발 보조 도구입니다."],
  ["Testim", "ai", "ai", "paid", ["web"], ["javascript"], "testim.io",
"https://www.testim.io/", "Cloud 최신 버전", "웹 UI 테스트 자동화에 특화된 AI 기반 테스트 플랫폼입니다."],
  ["Playwright", "dev", "test", "free", ["web"], ["javascript"], "playwright.dev",
"https://playwright.dev/", "최신 안정판", "브라우저 자동화와 E2E 테스트를 작성해 웹 화면 동작을 검증하는 테스트 도구입니다."],
  ["SonarQube", "dev", "review", "free", ["web", "security"], ["javascript", "python", "java"], "sonarsource.com",
"https://www.sonarsource.com/products/sonarqube/downloads/", "Community Build", "코드 품질, 버그, 보안 취약점을 정적 분석으로 점검하는 코드 리뷰 도구입니다."],
  ["DataGrip", "dev", "data", "paid", ["data"], ["sql"], "jetbrains.com",
"https://www.jetbrains.com/datagrip/download/", "최신 안정판", "SQL 작성, 데이터베이스 탐색, 쿼리 관리에 강한 전문 DB IDE입니다."],
  ["TablePlus", "dev", "data", "paid", ["data"], ["sql"], "tableplus.com",
"https://tableplus.com/", "Desktop 최신 안정판", "가볍고 직관적인 데이터베이스 관리 앱으로, SQL 실습과 데이터 확인에 좋습니다."],
  ["Figma AI", "ai", "ai", "paid", ["web", "app"], ["javascript"], "figma.com",
"https://www.figma.com/ai/", "Figma 최신 버전", "UI 초안, 디자인 정리, 화면 설계를 빠르게 도와주는 디자인 AI 기능입니다."],
  ["Uizard", "ai", "ai", "free", ["web", "app"], ["javascript"], "uizard.io",
"https://uizard.io/", "Web 최신 버전", "와이어프레임과 UI 시안을 빠르게 만들 수 있는 AI 디자인 도구입니다."],
  ["Microsoft Teams", "dev", "collab", "free", ["collab"], [], "microsoft.com",
"https://www.microsoft.com/en-us/microsoft-teams/download-app", "Windows/macOS Desktop, Linux는 PWA", "회의, 채팅, 파일 공유, 과제/팀 프로젝트 관리에 적합한 Microsoft 협업 플랫폼입니다."],
  ["Firebase", "dev", "system", "free", ["web", "app", "data"], ["javascript"], "firebase.google.com",
"https://firebase.google.com/", "Web SDK 최신 버전", "인증, 데이터베이스, 호스팅을 빠르게 붙여 작은 서비스를 배포할 수 있습니다."],
  ["TypeScript", "dev", "language", "free", ["web", "app"], ["typescript", "javascript"], "typescriptlang.org",
"https://www.typescriptlang.org/", "최신 안정판", "JavaScript에 타입을 더해 큰 웹 프로젝트의 오류를 줄이고 자동완성 품질을 높이는 언어입니다."],
  ["Vite", "dev", "web", "free", ["web", "app"], ["javascript", "typescript"], "vite.dev",
"https://vite.dev/", "최신 안정판", "React, Vue, Vanilla 프로젝트를 빠르게 시작하고 개발 서버와 빌드 환경을 제공하는 프론트엔드 도구입니다."],
  ["Postman", "dev", "test", "free", ["web", "app", "collab"], [], "postman.com",
"https://www.postman.com/downloads/", "Desktop App 최신 안정판", "REST API 요청을 보내고 응답, 인증, 환경 변수를 확인하는 API 테스트 도구입니다."],
  ["FastAPI", "dev", "web", "free", ["web", "data", "ai"], ["python"], "fastapi.tiangolo.com",
"https://fastapi.tiangolo.com/", "최신 안정판", "Python으로 REST API 서버를 빠르게 만들고 자동 API 문서까지 확인할 수 있는 백엔드 프레임워크입니다."],
  ["Spring Boot", "dev", "web", "free", ["web", "app"], ["java"], "spring.io",
"https://spring.io/projects/spring-boot", "최신 안정판", "Java 기반 백엔드 서버와 REST API를 만들 때 많이 쓰는 실전 프레임워크입니다."],
  ["Android Studio", "dev", "ide", "free", ["app"], ["kotlin", "java"], "developer.android.com",
"https://developer.android.com/studio", "최신 안정판", "Android 앱 개발 공식 IDE로 에뮬레이터, Gradle 빌드, Kotlin/Java 개발을 지원합니다."],
  ["Kotlin", "dev", "language", "free", ["app", "web"], ["kotlin"], "kotlinlang.org",
"https://kotlinlang.org/", "최신 안정판", "Android 앱 개발과 JVM 서버 개발에 쓰이는 간결한 프로그래밍 언어입니다."],
  ["NumPy", "dev", "data", "free", ["ai", "data"], ["python"], "numpy.org",
"https://numpy.org/", "최신 안정판", "Python에서 배열과 수치 계산을 다루는 데이터 분석과 AI의 기본 라이브러리입니다."],
  ["Matplotlib", "dev", "data", "free", ["ai", "data"], ["python"], "matplotlib.org",
"https://matplotlib.org/", "최신 안정판", "Python 데이터 분석 결과를 그래프와 차트로 시각화하는 기본 라이브러리입니다."],
  ["GitHub Actions", "dev", "collab", "free", ["collab", "system", "web"], [], "github.com",
"https://github.com/features/actions", "GitHub 내장 최신 버전", "push나 pull request 시 테스트, 빌드, 배포를 자동화하는 CI/CD 도구입니다."],
  ["Kali Linux", "dev", "security", "free", ["security", "system"], [], "kali.org",
"https://www.kali.org/get-kali/", "최신 안정판 또는 VM 이미지", "보안 실습용 Linux 배포판으로 네트워크, 웹 보안, 침투 테스트 도구를 한 환경에서 다룹니다."],
  ["Apache HTTP Server", "dev", "system", "free", ["system", "web"], [], "httpd.apache.org",
"https://httpd.apache.org/download.cgi", "최신 안정판", "정적 웹 서버, 가상 호스트, PHP/WordPress 호스팅 구조를 익히기 좋은 대표 웹 서버입니다."],
  ["Chrome Lighthouse", "dev", "test", "free", ["web"], ["javascript"], "developer.chrome.com",
"https://developer.chrome.com/docs/lighthouse/overview", "Chrome DevTools 내장 버전", "웹 페이지의 성능, 접근성, SEO, 모범 사례를 점검하는 Chrome 내장 분석 도구입니다."],
  ["Markdown", "dev", "collab", "free", ["collab", "web"], [], "markdownguide.org",
"https://www.markdownguide.org/", "문법 가이드 최신 버전", "README, 개발 일지, 프로젝트 문서, 프롬프트 정리에 쓰이는 가벼운 문서 작성 문법입니다."],
  ["Terminal (Zsh/Bash)", "dev", "system", "free", ["system", "web"], [], "gnu.org",
"https://www.gnu.org/software/bash/", "Bash 또는 Zsh 최신 안정판", "명령어 실행, Git, 서버 실행, 패키지 설치를 익히는 기본 개발자 작업 환경입니다."],
  ["GitFlow", "dev", "collab", "free", ["collab"], [], "nvie.com",
"https://nvie.com/posts/a-successful-git-branching-model/", "브랜치 전략 기초", "main, develop, feature 브랜치를 나누어 팀 프로젝트 버전 관리를 연습하는 Git 브랜치 전략입니다."],
  ["Tailwind CSS", "dev", "ui", "free", ["web", "app"], ["javascript", "typescript"], "tailwindcss.com",
"https://tailwindcss.com/", "최신 안정판", "유틸리티 클래스로 반응형 UI를 빠르게 구성하는 CSS 프레임워크입니다."],
  ["Next.js", "dev", "web", "free", ["web", "app"], ["javascript", "typescript"], "nextjs.org",
"https://nextjs.org/", "최신 안정판", "React 기반으로 라우팅, 서버 렌더링, API 라우트까지 다루는 풀스택 웹 프레임워크입니다."],
  ["Redis", "dev", "data", "free", ["data", "web", "system"], [], "redis.io",
"https://redis.io/download/", "최신 안정판", "캐시, 세션, 큐 구조를 익히는 데 쓰이는 인메모리 데이터 저장소입니다."],
  ["Jest", "dev", "test", "free", ["web"], ["javascript", "typescript"], "jestjs.io",
"https://jestjs.io/", "최신 안정판", "JavaScript와 TypeScript 함수, 컴포넌트, 로직을 검증하는 단위 테스트 도구입니다."],
  ["LangChain", "dev", "ai", "free", ["ai", "data", "web"], ["python", "javascript"], "langchain.com",
"https://www.langchain.com/", "최신 안정판", "LLM, 검색, 도구 호출, 메모리 등을 연결해 AI 서비스를 구성하는 프레임워크입니다."],
  ["Hugging Face", "dev", "ai", "free", ["ai", "data"], ["python"], "huggingface.co",
"https://huggingface.co/", "Hub + Transformers 최신 버전", "모델, 데이터셋, Transformer 라이브러리로 AI 모델 활용과 배포 흐름을 학습하는 플랫폼입니다."],
  ["Cypress", "dev", "test", "free", ["web"], ["javascript", "typescript"], "cypress.io",
"https://www.cypress.io/", "최신 안정판", "웹 애플리케이션의 컴포넌트 테스트와 E2E 테스트를 작성하는 테스트 자동화 도구입니다."],
  ["Vector DB (Chroma/Pinecone)", "dev", "data", "free", ["ai", "data"], ["python", "javascript"], "trychroma.com",
"https://www.trychroma.com/", "Chroma 또는 Pinecone 최신 버전", "임베딩을 저장하고 유사도 검색을 수행해 RAG 기반 AI 서비스를 만드는 벡터 데이터베이스입니다."],
  ["Terraform", "dev", "system", "free", ["system"], [], "terraform.io",
"https://developer.hashicorp.com/terraform", "최신 안정판", "클라우드 서버, 네트워크, 리소스를 코드로 정의하고 관리하는 IaC 도구입니다."],
  ["OpenAI API", "dev", "ai", "paid", ["ai", "web", "data"], ["python", "javascript"], "platform.openai.com",
"https://platform.openai.com/docs", "Responses API 최신 버전", "앱 안에서 텍스트 생성, 코드 보조, 에이전트형 AI 기능을 구현하는 API입니다."],
  ["Jira", "dev", "collab", "paid", ["collab"], [], "atlassian.com",
"https://www.atlassian.com/software/jira", "Cloud 최신 버전", "이슈, 스프린트, 백로그를 관리하며 현업식 팀 프로젝트 흐름을 익히는 협업 도구입니다."],
  ["Godot", "dev", "game", "free", ["game"], [], "godotengine.org",
"https://godotengine.org/download", "최신 안정판", "2D와 3D 게임을 만들 수 있는 무료 오픈소스 게임 엔진입니다."],
  ["Unreal Engine", "dev", "game", "free", ["game", "media"], ["c"], "unrealengine.com",
"https://www.unrealengine.com/download", "Epic Games Launcher + 최신 안정판", "고품질 3D 게임, 실시간 렌더링, 시뮬레이션 제작에 쓰이는 게임 엔진입니다."],
  ["ESLint", "dev", "review", "free", ["web"], ["javascript", "typescript"], "eslint.org",
"https://eslint.org/", "최신 안정판", "JavaScript와 TypeScript 코드의 오류와 스타일 문제를 자동으로 찾아주는 정적 분석 도구입니다."],
  ["Prettier", "dev", "review", "free", ["web"], ["javascript", "typescript"], "prettier.io",
"https://prettier.io/", "최신 안정판", "코드 포맷을 자동으로 맞춰 팀 프로젝트의 코드 스타일을 통일하는 도구입니다."],
  ["PlatformIO", "dev", "embedded", "free", ["embedded", "system"], ["c"], "platformio.org",
"https://platformio.org/", "VS Code Extension 최신 버전", "여러 마이크로컨트롤러 보드의 빌드, 업로드, 라이브러리 관리를 도와주는 임베디드 개발 환경입니다."],
  ["KiCad", "dev", "embedded", "free", ["embedded", "media"], [], "kicad.org",
"https://www.kicad.org/download/", "최신 안정판", "회로도와 PCB 설계를 학습할 수 있는 무료 오픈소스 전자 설계 도구입니다."],
  ["Figma", "dev", "ui", "free", ["web", "app", "media"], [], "figma.com",
"https://www.figma.com/downloads/", "Desktop App 또는 Web 최신 버전", "웹/앱 화면 설계, 프로토타입, 디자인 협업에 쓰이는 대표 UI 디자인 도구입니다."],
  ["Storybook", "dev", "ui", "free", ["web", "app"], ["javascript", "typescript"], "storybook.js.org",
"https://storybook.js.org/", "최신 안정판", "UI 컴포넌트를 독립적으로 만들고 문서화하며 상태별 화면을 검토하는 프론트엔드 도구입니다."],
  ["Vitest", "dev", "test", "free", ["web"], ["javascript", "typescript"], "vitest.dev",
"https://vitest.dev/", "최신 안정판", "Vite 기반 프로젝트에서 빠르게 단위 테스트를 작성하고 실행하는 테스트 도구입니다."],
  ["Pytest", "dev", "test", "free", ["web", "data", "ai"], ["python"], "pytest.org",
"https://docs.pytest.org/", "최신 안정판", "Python 함수, 백엔드 API, 데이터 처리 로직을 검증하는 대표 테스트 프레임워크입니다."],
  ["React Native", "dev", "web", "free", ["web", "app"], ["javascript"], "reactnative.dev",
"https://reactnative.dev/", "최신 안정판", "React 방식으로 Android와 iOS 모바일 앱을 만드는 프레임워크입니다."],
  ["Flutter", "dev", "web", "free", ["web", "app"], [], "flutter.dev",
"https://flutter.dev/", "최신 안정판", "하나의 코드베이스로 모바일, 웹, 데스크톱 앱을 만드는 UI 프레임워크입니다."],
  ["Nginx", "dev", "system", "free", ["system", "web"], [], "nginx.org",
"https://nginx.org/", "Stable", "웹 서버와 리버스 프록시를 구성하며 서버 구조를 익히는 데 쓰입니다."],
  ["Amazon Web Services", "dev", "system", "paid", ["system", "web", "data"], [], "aws.amazon.com",
"https://aws.amazon.com/", "Free Tier 중심", "클라우드 서버, 저장소, 배포 자동화 등 인프라 실습에 쓰이는 대표 플랫폼입니다."],
  ["Kubernetes", "dev", "system", "free", ["system"], [], "kubernetes.io",
"https://kubernetes.io/", "최신 안정판", "컨테이너 여러 개를 배포, 확장, 관리하는 고급 인프라 도구입니다."],
  ["FreeRTOS", "dev", "embedded", "free", ["embedded", "system"], ["c"], "freertos.org",
"https://www.freertos.org/", "최신 안정판", "임베디드 시스템에서 태스크와 실시간 동작을 다루는 RTOS입니다."],
  ["MongoDB", "dev", "data", "free", ["database", "data"], ["javascript", "sql"], "mongodb.com",
"https://www.mongodb.com/try/download/community", "Community Server", "문서 기반 NoSQL 데이터베이스와 대용량 데이터 구조를 익힐 수 있습니다."],
  ["Photoshop", "dev", "media", "paid", ["media", "web"], [], "adobe.com",
"https://www.adobe.com/products/photoshop.html", "Creative Cloud 최신 버전", "2D 이미지 편집, 색상, 레이아웃 감각을 익히는 그래픽 도구입니다."],
  ["Blender", "dev", "media", "free", ["media", "game"], ["python"], "blender.org",
"https://www.blender.org/download/", "최신 안정판", "3D 모델링, 렌더링, 애니메이션을 배우는 무료 그래픽 도구입니다."]
  ].map(([name, type, category, cost, fields, languages, domain, url, recommendedVersion, summary]) => ({
    name, type, category, cost, fields, languages, icon: `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
 url, recommendedVersion, summary
  }
  )),
  currentUser: localStorage.getItem("currentUser") || "",
  records: loadJson("llmRecords", []),
  prompts: loadJson("llmPrompts", []),
  installedTools: loadJson("installedTools", []),
  languageSettings: loadJson("languageSettings", {
    
  }
  ),
  hasSearched: false,
  selectedOs: "windows",
  expandedRecordIndex: null,
  activeToolboxStage: 0,
  toolboxView: "stage"
  
}
;
const fieldLabels = {
  web: "웹/앱 개발", app: "앱 개발", data: "인공지능/데이터", game: "게임 개발", ai: "인공지능/데이터", security: "보안", system: "시스템/인프라",
 collab: "개발 협업", embedded: "임베디드/하드웨어", database: "데이터베이스/정보관리", media: "그래픽/미디어", ui: "UI/프론트 개발"
}
;

const languageLabels = {
  javascript: "HTML/CSS/JavaScript", typescript: "TypeScript", python: "Python", java: "Java", kotlin: "Kotlin", csharp: "C#", c: "C/C++", sql: "SQL"
}
;

const osLabels = {
  windows: "Windows", mac: "macOS", linux: "Linux"
}
;

const osCompatibility = {
  "Visual Studio Community": ["windows"], "MinGW-w64": ["windows"], "WSL2 + Ubuntu": ["windows"], "GitHub Desktop": ["windows",
 "mac"], "Ubuntu Desktop": ["linux"], GCC: ["linux", "mac"], "Android Studio": ["windows", "mac", "linux"], "Apache HTTP Server": ["windows", "mac", "linux"],
 "Kali Linux": ["windows", "mac", "linux"]
}
;

const toolCategoryLabels = {
  ide: "IDE / 개발환경", web: "웹 / 앱 개발", ai: "AI", review: "코드 리뷰 / 품질 개선", test: "테스트 / 자동화", data: "SQL / 데이터 작업",
 system: "시스템 / 인프라", ui: "UI / 프론트 개발", collab: "협업", embedded: "임베디드 / 하드웨어", media: "그래픽 / 미디어", security: "보안", game: "게임 / 기타"
}
;

const toolCategoryOrder = ["ide", "web", "ai", "system", "data", "ui", "collab", "review", "test", "security", "embedded",
 "media", "game"];

const languageOptions = ["C", "C++", "C#", "Java", "Kotlin", "Python", "HTML/CSS/JavaScript", "TypeScript", "SQL"];

const studyFields = ["web", "ai", "system", "security", "embedded", "database", "media", "game", "collab"];

const fieldGroups = {
  web: ["web", "app"], ai: ["ai", "data"], database: ["database", "data"]
}
;

const aiDefaultFields = [...new Set([...studyFields, "app", "data", "ui"])];

const aiDefaultLanguages = Object.keys(languageLabels);

appData.tools.forEach((tool) => {
  
  if (tool.type === "ai" || tool.category === "ai") {
    
    tool.fields = [...new Set([...tool.fields, ...aiDefaultFields])];
    
    tool.languages = [...new Set([...tool.languages, ...aiDefaultLanguages])];
  }
}
);

const allOs = Object.keys(osLabels);

const toolMap = new Map(appData.tools.map((tool) => [tool.name, tool]));

/* 공통 유틸 함수 : 문장 안에 지정한 단어가 포함되는지 확인합니다. */
function hasAny(text, words = []) {
  return words.some((word) => text.includes(word));
  
}

/* 공통 유틸 함수 : 빈 값과 중복 값을 제거합니다. */
function unique(items) {
  return [...new Set(items.filter(Boolean))];
  
}

/* 공통 유틸 함수 : select 요소에 옵션 목록을 채웁니다. */
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

/* 계정 관리 함수 : 회원가입한 계정 목록을 읽습니다. */
function loadAccounts() {
  return loadJson("aiGuideAccounts", {
    
  }
  );
  
}

/* 계정 관리 함수 : 회원가입한 계정 목록을 저장합니다. */
function saveAccounts(accounts) {
  localStorage.setItem("aiGuideAccounts", JSON.stringify(accounts));
  
}

/* 계정 관리 함수 : 상단 로그인/로그아웃 상태를 갱신합니다. */
function renderAuth() {
  
  const user = appData.currentUser;
  
  $("#authUserText").text(user ? `${user}님` : "").prop("hidden", !user);
  
  $("#authOpen").prop("hidden", Boolean(user));
  
  $("#logoutButton").prop("hidden", !user);
}

/* 계정 관리 함수 : 로그인과 회원가입 화면을 전환합니다. */
function setAuthMode(mode) {
  
  const isSignup = mode === "signup";
  
  $("#authTitle").text(isSignup ? "회원가입" : "로그인");
  
  $("#loginForm").prop("hidden", isSignup);
  
  $("#signupForm").prop("hidden", !isSignup);
  
  $("#authSwitchText").html(`<button id="authModeToggle" type="button">${isSignup ? "로그인" : "회원가입"}</button>`);
  
  showAuthMessage("");
}

/* 계정 관리 함수 : 로그인 계정이 바뀌면 개인 데이터를 다시 불러옵니다. */
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

/* 계정 관리 함수 : 로그인과 회원가입 결과 문구를 표시합니다. */
function showAuthMessage(message) {
  $("#authMessage").text(message);
  
}

/* 화면 갱신 함수 : 개인 데이터와 관련된 화면을 한 번에 다시 그립니다. */
function renderUserViews() {
  [renderAuth, renderRecordFormOptions, renderRecords, renderPrompts, renderSetupChecklist, renderLanguageChecklist,
 renderSearchResults].forEach((render) => render());
  
}

/* 공통 폼 함수 : 입력 폼과 숨겨진 편집 번호를 함께 비웁니다. */
function resetForm(formSelector, indexSelector = "") {
  if (indexSelector) $(indexSelector).val("");
  $(formSelector)[0]?.reset();
  $(formSelector).find("select").each(function () {
    refreshSelect2($(this));
  });
  
}

/* 공통 팝업 함수 : 지정한 팝업을 숨깁니다. */
function closePopup(selector) {
  $(selector).prop("hidden", true);
  
}

/* 플러그인 함수 : jQuery Easing으로 화면 상단 이동을 부드럽게 처리합니다. */
function scrollToTop() {
  $("html, body").stop().animate({ scrollTop: 0 }, 520, "easeOutCubic");
}

/* 플러그인 함수 : Select2가 적용된 select의 화면 값을 갱신합니다. */
function refreshSelect2($select) {
  if ($.fn.select2 && $select.hasClass("select2-hidden-accessible")) $select.trigger("change.select2");
}

/* 플러그인 함수 : 주요 선택 박스에 Select2 검색 UI를 적용합니다. */
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

/* 플러그인 함수 : jQuery Validation으로 입력 폼의 필수값을 검사합니다. */
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

/* 공통 필터 함수 : 도구가 선택한 공부 분야에 포함되는지 확인합니다. */
function hasField(tool, field) {
  return field === "all" || (fieldGroups[field] || [field]).some((item) => tool.fields.includes(item));
  
}
const toolboxStages = [
{
  title: "1단계: 최소 개발환경", subtitle: "기초 개발환경", goal: "",
 dev: ["Visual Studio Code", "Google Chrome", "Python", "JDK", "Eclipse IDE", "Visual Studio Community", "Jupyter Notebook",
 "MySQL", "Markdown", "Git", "GCC", "MinGW-w64"], ai: ["ChatGPT", "GitHub Copilot", "Gemini", "Claude", "OpenAI Codex"]
}
,
{
  title: "2단계: 개발자 기본 세팅", subtitle: "과제와 개인 프로젝트가 가능한 수준", goal: "프로젝트 관리, Git 사용, 리눅스 환경 익숙해지기", dev: ["IntelliJ IDEA Community",
 "PyCharm Community", "Ubuntu Desktop", "WSL2 + Ubuntu", "Terminal (Zsh/Bash)", "GitHub", "GitHub Desktop", "GitFlow", "Burp Suite Community",
 "Node.js", "TypeScript", "Vite", "React", "Vue", "Tailwind CSS", "Next.js", "Figma", "Storybook", "ESLint", "Prettier", "Postman", "FastAPI", "Spring Boot", "Android Studio", "Kotlin",
 "pandas", "NumPy", "Matplotlib", "scikit-learn", "PostgreSQL", "Redis", "Apache HTTP Server", "Docker", "Chrome Lighthouse", "Jest", "Vitest", "Pytest"], ai: ["Continue", "Cursor", "Codeium / Windsurf",
 "Phind", "Gemma", "Google Stitch", "LM Studio", "Jan", "GPT4All", "Ollama"]
}
,
{
  title: "3단계: 실전 개발 세팅", subtitle: "취업, 팀 프로젝트, 고급 개발에 선택적으로 추가", goal: "협업, 테스트 자동화, 실무 툴 경험", dev: ["Playwright",
"SonarQube", "Cypress", "DataGrip", "TablePlus", "MongoDB", "Vector DB (Chroma/Pinecone)", "Firebase", "React Native", "Flutter", "PyTorch", "TensorFlow",
"Nginx", "Amazon Web Services", "Kubernetes", "Terraform", "GitHub Actions", "Arduino", "FreeRTOS", "PlatformIO", "KiCad", "Unity", "Godot", "Unreal Engine", "Photoshop", "Blender", "OWASP ZAP", "Wireshark",
"Nmap", "Metasploit Framework", "Kali Linux", "Notion Desktop", "Slack", "Microsoft Teams", "Confluence", "Jira"], ai: ["Amazon Q Developer",
"Snyk Code / DeepCode", "Qodo / CodiumAI", "Testim", "Figma AI", "Uizard", "Notion AI", "Claude Code", "v0.dev", "LangChain", "Hugging Face", "OpenAI API"]
}

];
/* 도구 모음 함수 : 단계별 보기와 전체보기를 다시 그립니다. */
function renderToolbox() {
  
  const $target = $("#toolboxStageList").empty();
  
  const filters = getToolboxFilters();
  
  if (filters.view === "all") {
    renderToolboxAll($target, toolboxStages, filters);
    renderToolboxNav();
    return;
    
  }
  
  const activeStage = toolboxStages[appData.activeToolboxStage] || toolboxStages[0];
  const visibleStages = activeStage ? [{
    stage: activeStage,
    devTools: getToolboxTools(activeStage.dev, "dev", filters),
    aiTools: getToolboxTools(activeStage.ai, "ai", filters)
  }] : [];
  
  visibleStages.forEach((item) => {
    
    const $stage = $(`<article class="toolbox-stage panel"><div class="toolbox-stage-head"><div><p class="eyebrow">${item.stage.subtitle}</p><h3>${item.stage.title}</h3></div></div><div class="toolbox-columns"></div></article>`);
    
    renderToolboxGroup($stage.find(".toolbox-columns"), "개발 프로그램", item.devTools);
    
    renderToolboxGroup($stage.find(".toolbox-columns"), "AI", item.aiTools);
    
    $target.append($stage);
  }
  );
  
  renderToolboxNav();
}

/* 도구 모음 함수 : 전체보기와 단계별 보기 전환 텍스트를 그립니다. */
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

/* 도구 모음 함수 : 전체보기에서 개발 프로그램과 AI를 나누어 출력합니다. */
function renderToolboxAll($target, stages, filters) {
  
  const devTools = [], aiTools = [];
  
  stages.forEach((stage) => {
    devTools.push(...getToolboxTools(stage.dev, "dev", filters));
    aiTools.push(...getToolboxTools(stage.ai, "ai", filters));
    
  }
  );
  
  const $stage = $('<article class="toolbox-stage panel" id="toolbox-all"><div class="toolbox-stage-head"><div><p class="eyebrow">All Tools</p><h3>전체보기</h3></div></div><div class="toolbox-all-columns"></div></article>');
  
  renderToolboxGroup($stage.find(".toolbox-all-columns"), "개발 프로그램", uniqueTools(devTools), {
    sectionClass: "toolbox-all-section", gridClass: "toolbox-all-grid"
  }
  );
  
  renderToolboxGroup($stage.find(".toolbox-all-columns"), "AI", uniqueTools(aiTools), {
    sectionClass: "toolbox-all-section", gridClass: "toolbox-all-grid"
  }
  );
  
  $target.append($stage);
}

/* 도구 모음 함수 : 같은 도구가 여러 단계에 있어도 한 번만 보이게 합니다. */
function uniqueTools(tools) {
  return [...new Map(tools.map((tool) => [tool.name, tool])).values()];
  
}

/* 도구 모음 함수 : 필터의 현재 선택 값을 모읍니다. */
function getToolboxFilters() {
  return {
    kind: $("input[name='toolboxKind']:checked").val() || "all", language: $("#toolboxLanguageFilter").val() || "all",
 field: $("#toolboxFieldFilter").val() || "all", view: appData.toolboxView || "stage"
  }
  ;
  
}

/* 도구 모음 함수 : 도구 이름을 데이터로 바꾸고 필터를 적용합니다. */
function getToolboxTools(toolNames, kind, filters) {
  return filters.kind !== "all" && filters.kind !== kind ? [] : toolNames.map((name) => toolMap.get(name)).filter(Boolean).filter((tool) => filters.language === "all" || tool.languages.includes(filters.language)).filter((tool) => hasField(tool,
 filters.field));
  
}

/* 도구 모음 함수 : 언어와 공부 분야 필터 옵션을 채웁니다. */
function renderToolboxFilters() {
  
  fillSelect($("#toolboxLanguageFilter"), unique(appData.tools.flatMap((tool) => tool.languages)), "전체 언어", "all",
 (language) => languageLabels[language] || language);
  
  fillSelect($("#toolboxFieldFilter"), studyFields, "전체 분야", "all", (field) => fieldLabels[field] || field);
}

/* AI 비교 함수 : 비교 가능한 AI 선택 옵션을 만듭니다. */
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

/* AI 비교 함수 : 선택한 두 AI의 이름, 특징, 비용을 표로 비교합니다. */
function renderAiCompare() {
  
  const first = toolMap.get($("#aiCompareFirst").val()), second = toolMap.get($("#aiCompareSecond").val());
  
  const costText = (tool) => (!tool ? "-" : tool.cost === "free" ? "무료" : "유료 포함");
  
  $("#aiCompareResult").html([["이름", first?.name || "-", second?.name || "-"], ["특징", first?.summary || "-", second?.summary || "-"],
 ["비용", costText(first), costText(second)]].map((row) => `<tr><th>${row[0]}</th><td>${row[1]}</td><td>${row[2]}</td></tr>`).join(""));
}

/* 도구 카드 함수 : 개발 프로그램 또는 AI 카드 묶음을 출력합니다. */
function renderToolboxGroup($target, title, tools, options = {
  
}
) {
  
  const sectionClass = options.sectionClass || "toolbox-group", gridClass = options.gridClass || "toolbox-grid";
  
  const $group = $(`<section class="${sectionClass}"><h4>${title}</h4><div class="${gridClass}"></div></section>`);
  
  if (!tools.length) $group.find(`.${gridClass}`).append('<p class="toolbox-empty">현재 필터에 맞는 도구가 없습니다.</p>');
  
  tools.forEach((tool) => $group.find(`.${gridClass}`).append(getToolboxCard(tool)));
  
  $target.append($group);
}

/* 도구 카드 함수 : 도구 하나의 카드 HTML 문자열을 만듭니다. */
function getToolboxCard(tool) {
  return `<a class="toolbox-card" href="${tool.url}" target="_blank" rel="noopener noreferrer"><div class="toolbox-card-top"><img src="${tool.icon}" alt="${tool.name} 아이콘"><div><strong>${tool.name}</strong><span>${tool.cost === "free" ? "무료" : "유료 포함"}</span></div></div><p>${tool.summary}</p></a>`;
  
}

/* 도구 분류 함수 : 설정 화면에서 사용할 도구 카테고리를 결정합니다. */
function getToolCategory(tool) {
  return ["ide", "language", "system"].includes(tool.category) ? "ide" : (tool.category || (tool.type === "ai" ? "ai" : "ide"));
  
}

/* 내 설정 함수 : 개발환경 준비 체크리스트를 카테고리별로 출력합니다. */
function renderSetupChecklist() {
  
  const $target = $("#setupChecklist").empty(), groups = {
    
  }
  ;
  
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
    
    tools.forEach((tool) => $section.find(".tool-category-grid").append(`<label class="setup-item"><input type="checkbox" value="${tool.name}" ${appData.installedTools.includes(tool.name) ? "checked" : ""}><span>${tool.name}</span></label>`));
    
    $target.append($section);
  }
  );
  
  $("#setupCount").text(`${appData.installedTools.length}개 완료`);
}

/* 내 설정 함수 : 사용 언어와 숙련도 선택 목록을 출력합니다. */
function renderLanguageChecklist() {
  
  const $target = $("#languageChecklist").empty();
  
  languageOptions.forEach((language) => {
    
    const setting = appData.languageSettings[language] || {
      checked: false, level: "기초"
    }
    ;
    
    $target.append(`<div class="language-item"><label><input type="checkbox" value="${language}" ${setting.checked ? "checked" : ""}><span>${language}</span></label><select data-language="${language}"><option value="기초" ${setting.level === "기초" ? "selected" : ""}>기초</option><option value="중급" ${setting.level === "중급" ? "selected" : ""}>중급</option><option value="심화" ${setting.level === "심화" ? "selected" : ""}>심화</option></select></div>`);
  }
  );
  
  $("#languageCount").text(`${Object.values(appData.languageSettings).filter((item) => item.checked).length}개 선택`);
}

/* 학습 기록 함수 : 저장된 기록 기준으로 분야와 언어 필터를 채웁니다. */
function updateRecordFilterOptions() {
  
  fillSelect($("#recordFieldFilter"), unique([...studyFields, ...appData.records.map((record) => getRecordField(record))]),
 "전체 분야", $("#recordFieldFilter").val() || "all", (field) => fieldLabels[field] || field);
  
  fillSelect($("#recordLanguageFilter"), unique([...languageOptions, ...appData.records.map((record) => getRecordLanguage(record))]),
 "전체 언어", $("#recordLanguageFilter").val() || "all");
}

/* 학습 기록 함수 : 저장 폼의 분야와 언어 선택 옵션을 채웁니다. */
function renderRecordFormOptions() {
  
  fillSelect($("#recordField"), studyFields, "공부 분야 선택", $("#recordField").val() || "", (field) => fieldLabels[field] || field,
 "");
  
  fillSelect($("#recordLanguage"), Object.keys(languageLabels), "사용 언어 선택", $("#recordLanguage").val() || "", (language) => languageLabels[language],
 "");
}

/* 학습 기록 함수 : 기록 객체에서 학습 분야 값을 가져옵니다. */
function getRecordField(record) {
  const field = record.field || parseGoal(`${record.title || ""} ${record.content || ""}`).fields[0] || "";
  return field === "data" ? "ai" : field === "app" ? "web" : field;
  
}

/* 학습 기록 함수 : 기록 객체에서 학습 언어 값을 가져옵니다. */
function getRecordLanguage(record) {
  if (record.language) return languageLabels[record.language] || record.language;
  const language = parseGoal(`${record.title || ""} ${record.content || ""}`).languages[0] || "";
  return languageLabels[language] || language;
  
}

/* 학습 기록 함수 : 필터에 맞는 학습 기록 카드를 출력합니다. */
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
      <li class="${active} ${expanded}" data-index="${record.index}">
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
      </li>
    `);
  });
}

/* 학습 기록 함수 : 기록 검색에 사용할 텍스트를 하나로 합칩니다. */
function getRecordSearchText(record) {
  return [record.title, record.content, record.ai, getRecordLanguage(record), fieldLabels[getRecordField(record)]].join(" ").toLowerCase();
  
}

/* 프롬프트 보관함 함수 : 저장된 프롬프트 제목 목록을 출력합니다. */
function renderPrompts() {
  
  const $shelf = $("#promptShelf").empty();
  
  $("#promptCount").text(`${appData.prompts.length}개`);
  
  appData.prompts.forEach((prompt, index) => $shelf.append(`<article class="prompt-item ${String(index) === $("#editingPromptIndex").val() ? "active" : ""}" data-index="${index}"><strong>${prompt.title}</strong><button class="delete-prompt" type="button" aria-label="${prompt.title} 삭제">X</button></article>`));
}

/* 홈 검색 함수 : 추천 검색에 사용할 필터와 입력 목표를 수집합니다. */
function getSearchFilters() {
  return {
    cost: $("input[name='cost']:checked").val(), field: $("#fieldFilter").val(), language: $("#languageFilter").val(),
 goal: $("#goalInput").val().trim().toLowerCase()
  }
  ;
  
}

/* 홈 검색 함수 : 도구가 입력 목표와 관련 있는지 확인합니다. */
function matchesGoal(tool, goal) {
  
  if (!goal) return true;
  
  const inferred = parseGoal(goal);
  
  return tool.fields.some((field) => inferred.fields.includes(field)) || tool.languages.some((language) => inferred.languages.includes(language)) || inferred.categories.includes(getToolCategory(tool)) || tool.name.toLowerCase().includes(goal);
}

/* 홈 추천 함수 : 조건에 맞는 도구를 점수순으로 정렬합니다. */
function getRecommendedTools() {
  
  const filters = getSearchFilters();
  
  return appData.tools.filter((tool) => (filters.cost === "all" || tool.cost === filters.cost) && hasField(tool,
 filters.field) && (filters.language === "all" || tool.languages.includes(filters.language)) && supportsOs(tool) && matchesGoal(tool,
 filters.goal)).sort((a, b) => getToolScore(b, filters.goal) - getToolScore(a, filters.goal));
}

/* 홈 추천 함수 : 현재 선택한 OS에서 사용할 수 있는 도구인지 확인합니다. */
function supportsOs(tool) {
  return (osCompatibility[tool.name] || allOs).includes(appData.selectedOs);
  
}

/* 홈 추천 함수 : 입력 목표와 도구의 관련도를 점수로 계산합니다. */
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

/* 홈 추천 함수 : 특정 언어 검색에서 우선 추천 도구에 가중치를 줍니다. */
function getLanguageScore(tool, goal) {
  
  const prioritySets = [
  {
    words: ["웹", "웹개발", "웹 개발", "사이트", "html", "css", "프론트", "프론트엔드"], order: ["Visual Studio Code", "Google Chrome", "Vite", "Tailwind CSS"]
  }
  ,
  {
    words: ["파이썬", "python"], order: ["Python", "PyCharm Community", "Visual Studio Code"]
  }
  ,
  {
    words: ["c언어", "c 언어", "씨언어", "씨 언어", "c/c++", "c++"], order: ["Visual Studio Community", "MinGW-w64", "GCC",
 "Visual Studio Code"]
  }
  ,
  {
    words: ["c#"], order: ["Visual Studio Community", "Unity", "Visual Studio Code"]
  }
  ,
  {
    words: ["자바", "java"], order: ["JDK", "IntelliJ IDEA Community", "Spring Boot", "Eclipse IDE", "Visual Studio Code"]
  }
  ,
  {
    words: ["자바스크립트", "javascript", "js"], order: ["Visual Studio Code", "Node.js", "Vite", "GitHub Copilot"]
  }
  ,
  {
    words: ["타입스크립트", "typescript", "ts"], order: ["TypeScript", "Visual Studio Code", "Vite"]
  }
  ,
  {
    words: ["안드로이드", "android", "모바일", "앱"], order: ["Android Studio", "Kotlin", "React Native", "Flutter"]
  }
  ,
  {
    words: ["api", "백엔드", "서버", "rest"], order: ["Postman", "FastAPI", "Spring Boot", "Node.js"]
  }
  ,
  {
    words: ["tailwind", "테일윈드", "css"], order: ["Tailwind CSS", "Vite", "React"]
  }
  ,
  {
    words: ["figma", "피그마", "프로토타입", "디자인"], order: ["Figma", "Figma AI", "Google Stitch"]
  }
  ,
  {
    words: ["storybook", "스토리북", "컴포넌트"], order: ["Storybook", "React", "Figma"]
  }
  ,
  {
    words: ["eslint", "prettier", "포맷", "린트", "코드 스타일"], order: ["ESLint", "Prettier", "SonarQube"]
  }
  ,
  {
    words: ["next", "next.js", "넥스트"], order: ["Next.js", "React", "TypeScript"]
  }
  ,
  {
    words: ["sql", "쿼리", "데이터베이스", "db"], order: ["MySQL", "PostgreSQL", "DataGrip", "TablePlus"]
  }
  ,
  {
    words: ["redis", "캐시", "세션"], order: ["Redis", "PostgreSQL", "Docker"]
  }
  ,
  {
    words: ["데이터", "분석", "시각화", "그래프"], order: ["NumPy", "pandas", "Matplotlib", "Jupyter Notebook"]
  }
  ,
  {
    words: ["테스트", "단위 테스트", "jest", "vitest", "pytest"], order: ["Jest", "Vitest", "Pytest", "Postman"]
  }
  ,
  {
    words: ["e2e", "브라우저 테스트", "cypress", "playwright"], order: ["Playwright", "Cypress", "SonarQube"]
  }
  ,
  {
    words: ["ci/cd", "자동화", "배포", "깃허브 액션"], order: ["GitHub Actions", "Docker", "Terraform"]
  }
  ,
  {
    words: ["웹서버", "웹 서버", "apache", "아파치", "nginx"], order: ["Apache HTTP Server", "Nginx", "Docker"]
  }
  ,
  {
    words: ["라이트하우스", "lighthouse", "성능", "접근성", "seo"], order: ["Chrome Lighthouse", "Google Chrome", "Vite"]
  }
  ,
  {
    words: ["langchain", "랭체인", "rag", "벡터", "vector", "임베딩"], order: ["LangChain", "Vector DB (Chroma/Pinecone)", "Hugging Face", "OpenAI API"]
  }
  ,
  {
    words: ["terraform", "iac", "인프라 코드"], order: ["Terraform", "Amazon Web Services", "Kubernetes"]
  }
  ,
  {
    words: ["jira", "지라", "이슈 관리", "스프린트"], order: ["Jira", "Confluence", "Slack"]
  }
  ,
  {
    words: ["게임", "game", "godot", "unreal", "언리얼"], order: ["Unity", "Godot", "Unreal Engine"]
  }
  ,
  {
    words: ["임베디드", "하드웨어", "platformio", "kicad", "회로", "pcb"], order: ["Arduino", "PlatformIO", "KiCad", "FreeRTOS"]
  }
  
  ];
  
  const matched = prioritySets.find((set) => hasAny(goal, set.words));
  
  const index = matched ? matched.order.indexOf(tool.name) : -1;
  
  return index === -1 ? 0 : 80 - index * 12;
}

/* 홈 검색 함수 : 입력 문장에서 분야, 언어, 카테고리 신호를 추출합니다. */
function parseGoal(goal) {
  
  const signals = {
    fields: [], languages: [], categories: []
  }
  ;
  
  [
  {
    words: ["웹", "앱", "사이트", "프론트", "html", "css", "javascript", "react", "vue", "node", "api", "vite", "lighthouse", "tailwind", "next", "storybook"], fields: ["web"],
 languages: ["javascript"], categories: ["ui", "test"]
  }
  ,
  {
    words: ["인공지능", "ai", "머신러닝", "딥러닝", "llm", "챗봇", "jupyter", "pandas", "numpy", "matplotlib", "pytorch", "tensorflow", "langchain", "hugging face", "openai api", "vector", "벡터"], fields: ["ai",
 "data"], languages: ["python"], categories: ["ai", "data", "language"]
  }
  ,
  {
    words: ["보안", "취약점", "침투", "해킹", "네트워크", "패킷", "ctf", "burp", "wireshark", "kali"], fields: ["security"], categories: ["security"]
  }
  ,
  {
    words: ["협업", "팀", "깃", "github", "깃허브", "문서", "회의", "이슈", "버전관리", "slack", "notion", "teams", "confluence", "jira", "actions", "ci/cd", "gitflow"],
 fields: ["collab"], categories: ["collab", "test"]
  }
  ,
  {
    words: ["데이터베이스", "sql", "db", "쿼리", "mysql", "postgresql", "mongodb", "redis", "vector db", "chroma", "pinecone"], fields: ["database", "data"], languages: ["sql"],
 categories: ["data"]
  }
  ,
  {
    words: ["시스템", "인프라", "리눅스", "linux", "ubuntu", "wsl", "terminal", "bash", "zsh", "docker", "nginx", "apache", "아파치", "aws", "클라우드", "kubernetes", "terraform"], fields: ["system"],
 categories: ["system"]
  }
  ,
  {
    words: ["임베디드", "하드웨어", "arduino", "platformio", "kicad", "센서", "rtos", "freertos", "펌웨어", "iot"], fields: ["embedded"], languages: ["c"],
 categories: ["language", "system"]
  }
  ,
  {
    words: ["그래픽", "미디어", "2d", "3d", "렌더링", "photoshop", "blender", "figma", "모델링"], fields: ["media"], categories: ["ui",
 "game"]
  }
  ,
  {
    words: ["c언어", "c 언어", "c++", "gcc", "컴파일러"], languages: ["c"], categories: ["language", "ide"]
  }
  ,
  {
    words: ["파이썬", "python"], languages: ["python"], categories: ["language", "ide"]
  }
  ,
  {
    words: ["자바", "java"], languages: ["java"], categories: ["language", "ide"]
  }
  ,
  {
    words: ["타입스크립트", "typescript", "ts"], languages: ["typescript"], categories: ["language", "ide"]
  }
  ,
  {
    words: ["코틀린", "kotlin", "안드로이드", "android"], fields: ["app"], languages: ["kotlin"], categories: ["language", "ide"]
  }
  ,
  {
    words: ["백엔드", "서버", "rest", "fastapi", "spring boot", "springboot"], fields: ["web"], languages: ["python", "java"], categories: ["web"]
  }
  ,
  {
    words: ["ui", "화면", "디자인", "프론트", "프로토타입", "와이어프레임", "figma", "storybook", "stitch", "스티치"], fields: ["web", "app"], categories: ["ui"]
  }
  
  ].forEach((rule) => {
    
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

/* 홈 추천 함수 : 추천 결과 영역을 다시 그립니다. */
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

/* 홈 추천 함수 : 개발 프로그램과 AI를 각각 최대 3개까지 가져옵니다. */
function getTopRecommendations(list, type) {
  return list.filter((tool) => tool.type === type).slice(0, 3);
  
}

/* 홈 추천 함수 : 추천 카드 묶음을 화면에 추가합니다. */
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

/* 이벤트 연결 함수 : 페이지 초기 렌더링과 사용자 입력 이벤트를 한곳에서 연결합니다. */
$(function () {
  
  renderSearchResults();
  renderToolboxFilters();
  renderAiCompareOptions();
  renderToolbox();
  renderUserViews();
  initSelect2Controls();
  initFormValidation();
  
  $(".tab-button").on("click", function () {
    const target = $(this).data("tab");
    $(".tab-button").removeClass("active");
    $(this).addClass("active");
    $(".tab-page").removeClass("active");
    $(`[data-page='${target}']`).addClass("active");
    scrollToTop();
    
  }
  );

  $(".site-footer a[href='#top'], .brand[href='#top']").on("click", function (event) {
    event.preventDefault();
    scrollToTop();
  });
  
  $("#authOpen").on("click", function () {
    setAuthMode("login");
    $("#authModal").prop("hidden", false);
    
  }
  );
  
  $("#authClose").on("click", function () {
    closePopup("#authModal");
    
  }
  );
  
  $("#authModal").on("click", function (event) {
    if (event.target === this) closePopup(this);
    
  }
  );
  
  $("#authSwitchText").on("click", "#authModeToggle", function () {
    setAuthMode($("#signupForm").prop("hidden") ? "signup" : "login");
    
  }
  );
  
  $("#signupForm").on("submit", function (event) {
    event.preventDefault();
    if ($.fn.validate && !$(this).valid()) return;
    const id = $("#signupId").val().trim(), password = $("#signupPassword").val(), accounts = loadAccounts();
    if (!id || !password) return showAuthMessage("아이디와 비밀번호를 모두 입력하세요.");
    if (accounts[id]) return showAuthMessage("이미 가입된 아이디입니다.");
    accounts[id] = {
      password
    }
    ;
    saveAccounts(accounts);
    resetForm("#signupForm");
    setAuthMode("login");
    showAuthMessage("회원가입이 완료되었습니다. 로그인하세요.");
    
  }
  );
  
  $("#loginForm").on("submit", function (event) {
    event.preventDefault();
    if ($.fn.validate && !$(this).valid()) return;
    const id = $("#loginId").val().trim(), password = $("#loginPassword").val(), account = loadAccounts()[id];
    if (!account || account.password !== password) return showAuthMessage("아이디 또는 비밀번호가 맞지 않습니다.");
    localStorage.setItem("currentUser", id);
    appData.currentUser = id;
    resetForm("#loginForm");
    closePopup("#authModal");
    reloadUserData();
    
  }
  );
  
  $("#logoutButton").on("click", function () {
    localStorage.removeItem("currentUser");
    appData.currentUser = "";
    reloadUserData();
    
  }
  );
  
  $("#goalForm").on("submit", function (event) {
    event.preventDefault();
    appData.hasSearched = true;
    renderSearchResults();
    
  }
  );
  
  $("input[name='cost'], #fieldFilter, #languageFilter").on("change", renderSearchResults);
  
  $("input[name='toolboxKind'], #toolboxLanguageFilter, #toolboxFieldFilter").on("change", function () {
    if ((appData.toolboxView || "stage") === "stage") appData.activeToolboxStage = 0;
    renderToolbox();
    
  }
  );
  
  $("#aiCompareToggle").on("click", function () {
    $("#aiCompareBox").prop("hidden", !$("#aiCompareBox").prop("hidden"));
    
  }
  );
  
  $("#aiCompareClose").on("click", function () {
    closePopup("#aiCompareBox");
    
  }
  );
  
  $("#aiCompareBox").on("click", function (event) {
    if (event.target === this) closePopup(this);
    
  }
  );
  
  $("#aiCompareFirst, #aiCompareSecond").on("change", renderAiCompare);
  
  $("#toolboxStageNav").on("click", "button", function () {
    const view = $(this).data("view");
    const stage = $(this).data("stage");
    if (view === "all") {
      appData.toolboxView = "all";
      renderToolbox();
      return;
      
    }
    if (view === "stage") {
      appData.toolboxView = "stage";
      renderToolbox();
      return;
    }
    if (stage !== undefined) {
      appData.toolboxView = "stage";
      appData.activeToolboxStage = Number(stage);
      renderToolbox();
    }
    
  }
  );

  $("#toolboxFilterToggle").on("click", function () {
    const $body = $("#toolboxFilterBody");
    const isOpen = !$body.prop("hidden");
    $body.prop("hidden", isOpen);
    $(this).attr("aria-expanded", String(!isOpen));
    
  }
  );
  
  $(".os-option").on("click", function () {
    $(".os-option").removeClass("active");
    $(this).addClass("active");
    appData.selectedOs = $(this).data("os");
    if (appData.hasSearched) renderSearchResults();
    
  }
  );
  
  $("#resetFilters").on("click", function () {
    $("input[name='cost'][value='all']").prop("checked", true);
    $("#fieldFilter, #languageFilter").val("all");
    $("#fieldFilter, #languageFilter").each(function () {
      refreshSelect2($(this));
    });
    $("#goalInput").val("");
    appData.hasSearched = false;
    renderSearchResults();
    
  }
  );
  
  $("#setupChecklist").on("change", "input[type='checkbox']", function () {
    const toolName = $(this).val();
    if (this.checked && !appData.installedTools.includes(toolName)) appData.installedTools.push(toolName);
    if (!this.checked) appData.installedTools = appData.installedTools.filter((name) => name !== toolName);
    saveJson("installedTools", appData.installedTools);
    renderSetupChecklist();
    renderSearchResults();
    
  }
  );
  
  $("#languageChecklist").on("change", "input[type='checkbox'], select", function () {
    const $item = $(this).closest(".language-item");
    const language = $item.find("input[type='checkbox']").val();
    appData.languageSettings[language] = {
      checked: $item.find("input[type='checkbox']").prop("checked"), level: $item.find("select").val()
    }
    ;
    saveJson("languageSettings", appData.languageSettings);
    renderLanguageChecklist();
    
  }
  );
  
  $("#recordForm").on("submit", function (event) {
    event.preventDefault();
    if ($.fn.validate && !$(this).valid()) return;
    const content = $("#recordContent").val().trim();
    const title = $("#recordTitle").val().trim() || content.slice(0, 28);
    if (!title && !content) return;
    const editingIndex = $("#editingRecordIndex").val();
    const previousRecord = editingIndex !== "" ? appData.records[Number(editingIndex)] || {
      
    }
    : {
      
    }
    ;
    const inferred = parseGoal(`${title} ${content}`);
    let savedIndex = Number(editingIndex);
    const record = {
      title, content, field: $("#recordField").val() || previousRecord.field || inferred.fields[0] || "", language: $("#recordLanguage").val() || previousRecord.language || inferred.languages[0] || "",
 ai: $("#recordAi").val().trim(), date: previousRecord.date || new Date().toLocaleDateString("ko-KR")
    }
    ;
    if (editingIndex !== "") appData.records[Number(editingIndex)] = record;
    else {
      appData.records.push(record);
      savedIndex = appData.records.length - 1;
      $("#editingRecordIndex").val(String(savedIndex));
      
    }
    saveJson("llmRecords", appData.records);
    $("#recordSearchFilter").val("");
    $("#recordFieldFilter, #recordLanguageFilter").val("all");
    $("#recordField, #recordLanguage").val("");
    $("#recordFieldFilter, #recordLanguageFilter, #recordField, #recordLanguage").each(function () {
      refreshSelect2($(this));
    });
    appData.expandedRecordIndex = savedIndex;
    renderRecords();
    
  }
  );
  
  $("#recordList").on("click", ".delete-record", function (event) {
    event.stopPropagation();
    const index = Number($(this).closest("li").data("index"));
    appData.records.splice(index, 1);
    saveJson("llmRecords", appData.records);
    if ($("#editingRecordIndex").val() !== "" && Number($("#editingRecordIndex").val()) === index) resetForm("#recordForm",
 "#editingRecordIndex");
    if (appData.expandedRecordIndex === index) appData.expandedRecordIndex = null;
    else if (appData.expandedRecordIndex > index) appData.expandedRecordIndex -= 1;
    renderRecords();
    
  }
  );

  $("#recordList").on("click", "li", function () {
    const index = Number($(this).data("index"));
    const record = appData.records[index];
    if (!record) return;
    $("#editingRecordIndex").val(String(index));
    $("#recordTitle").val(record.title);
    $("#recordContent").val(record.content || record.title);
    $("#recordField").val(getRecordField(record));
    $("#recordLanguage").val(Object.entries(languageLabels).find(([, label]) => label === getRecordLanguage(record))?.[0] || record.language || "");
    $("#recordField, #recordLanguage").each(function () {
      refreshSelect2($(this));
    });
    $("#recordAi").val(record.ai);
    appData.expandedRecordIndex = appData.expandedRecordIndex === index ? null : index;
    renderRecords();
    
  }
  );
  
  $("#newRecordButton").on("click", function () {
    appData.expandedRecordIndex = null;
    resetForm("#recordForm", "#editingRecordIndex");
    renderRecords();
    
  }
  );
  
  $("#recordSearchFilter").on("input", renderRecords);
  $("#recordFieldFilter, #recordLanguageFilter").on("change", renderRecords);
  
  $("#promptForm").on("submit", function (event) {
    event.preventDefault();
    if ($.fn.validate && !$(this).valid()) return;
    const title = $("#promptTitle").val().trim(), text = $("#promptText").val().trim();
    if (!title || !text) return;
    const editingIndex = $("#editingPromptIndex").val();
    if (editingIndex !== "") appData.prompts[Number(editingIndex)] = {
      title, text
    }
    ;
    else {
      appData.prompts.push({
        title, text
      }
      );
      $("#editingPromptIndex").val(String(appData.prompts.length - 1));
      
    }
    saveJson("llmPrompts", appData.prompts);
    renderPrompts();
    
  }
  );
  
  $("#promptShelf").on("click", ".prompt-item", function () {
    const index = Number($(this).data("index"));
    const prompt = appData.prompts[index];
    if (!prompt) return;
    $("#editingPromptIndex").val(String(index));
    $("#promptTitle").val(prompt.title);
    $("#promptText").val(prompt.text);
    renderPrompts();
    
  }
  );
  
  $("#promptShelf").on("click", ".delete-prompt", function (event) {
    event.stopPropagation();
    const index = Number($(this).closest(".prompt-item").data("index"));
    appData.prompts.splice(index, 1);
    saveJson("llmPrompts", appData.prompts);
    if ($("#editingPromptIndex").val() !== "" && Number($("#editingPromptIndex").val()) === index) resetForm("#promptForm",
 "#editingPromptIndex");
    renderPrompts();
    
  }
  );
  
  $("#newPromptButton").on("click", function () {
    resetForm("#promptForm", "#editingPromptIndex");
    renderPrompts();
    
  }
  );
}
);
