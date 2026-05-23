const iconOverrides = {
  "matplotlib.org": "https://matplotlib.org/stable/_static/images/favicon.ico",
  "phind.com": "https://www.phind.com/favicon.ico"
};

const appData = {

  /* 데이터 : 전체 도구 목록 보관함 */
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
  [
    "Notion AI",
    "ai",
    "collab",
    "paid",
    ["data", "collab"],
    [],
    "notion.so",
    "https://www.notion.com/product/ai",
    "Notion AI 최신 버전",
    "개발 일지, 회의록, 요구사항 정리, 문서 초안 작성에 유용합니다."
  ],
  [
    "Metasploit Framework",
    "dev",
    "security",
    "free",
    ["security"],
    ["python"],
    "metasploit.com",
    "https://www.metasploit.com/download",
    "Framework 최신 안정판",
    "침투 테스트 학습용 프레임워크입니다. 반드시 허가된 실습 환경에서만 사용해야 합니다."
  ],
  [
    "Amazon Q Developer",
    "ai",
    "ai",
    "free",
    ["ai", "web", "security"],
    ["python", "javascript", "java"],
    "aws.amazon.com",
    "https://aws.amazon.com/q/developer/",
    "VS Code/JetBrains Extension",
    "AWS 환경 코드 생성과 보안 스캔에 강한 AI 개발 보조 도구입니다."
  ],
  [
    "Snyk Code / DeepCode",
    "ai",
    "ai",
    "free",
    ["security", "web"],
    ["python", "javascript", "java"],
    "snyk.io",
    "https://snyk.io/product/snyk-code/",
    "Snyk Code 최신 버전",
    "DeepCode 기반 정적 분석으로 버그와 보안 취약점을 자동 탐지하는 코드 품질 도구입니다."
  ],
  [
    "Qodo / CodiumAI",
    "ai",
    "ai",
    "free",
    ["ai", "web"],
    ["python", "javascript", "java"],
    "qodo.ai",
    "https://www.qodo.ai/",
    "IDE Extension 최신 안정판",
    "테스트 코드 생성과 코드 동작 설명에 특화된 AI 개발 보조 도구입니다."
  ],
  [
    "Testim",
    "ai",
    "ai",
    "paid",
    ["web"],
    ["javascript"],
    "testim.io",
    "https://www.testim.io/",
    "Cloud 최신 버전",
    "웹 UI 테스트 자동화에 특화된 AI 기반 테스트 플랫폼입니다."
  ],
  [
    "Playwright",
    "dev",
    "test",
    "free",
    ["web"],
    ["javascript"],
    "playwright.dev",
    "https://playwright.dev/",
    "최신 안정판",
    "브라우저 자동화와 E2E 테스트를 작성해 웹 화면 동작을 검증하는 테스트 도구입니다."
  ],
  [
    "SonarQube",
    "dev",
    "review",
    "free",
    ["web", "security"],
    ["javascript", "python", "java"],
    "sonarsource.com",
    "https://www.sonarsource.com/products/sonarqube/downloads/",
    "Community Build",
    "코드 품질, 버그, 보안 취약점을 정적 분석으로 점검하는 코드 리뷰 도구입니다."
  ],
  [
    "DataGrip",
    "dev",
    "data",
    "paid",
    ["data"],
    ["sql"],
    "jetbrains.com",
    "https://www.jetbrains.com/datagrip/download/",
    "최신 안정판",
    "SQL 작성, 데이터베이스 탐색, 쿼리 관리에 강한 전문 DB IDE입니다."
  ],
  [
    "TablePlus",
    "dev",
    "data",
    "paid",
    ["data"],
    ["sql"],
    "tableplus.com",
    "https://tableplus.com/",
    "Desktop 최신 안정판",
    "가볍고 직관적인 데이터베이스 관리 앱으로, SQL 실습과 데이터 확인에 좋습니다."
  ],
  [
    "Figma AI",
    "ai",
    "ai",
    "paid",
    ["web", "app"],
    ["javascript"],
    "figma.com",
    "https://www.figma.com/ai/",
    "Figma 최신 버전",
    "UI 초안, 디자인 정리, 화면 설계를 빠르게 도와주는 디자인 AI 기능입니다."
  ],
  [
    "Uizard",
    "ai",
    "ai",
    "free",
    ["web", "app"],
    ["javascript"],
    "uizard.io",
    "https://uizard.io/",
    "Web 최신 버전",
    "와이어프레임과 UI 시안을 빠르게 만들 수 있는 AI 디자인 도구입니다."
  ],
  [
    "Microsoft Teams",
    "dev",
    "collab",
    "free",
    ["collab"],
    [],
    "microsoft.com",
    "https://www.microsoft.com/en-us/microsoft-teams/download-app",
    "Windows/macOS Desktop, Linux는 PWA",
    "회의, 채팅, 파일 공유, 과제/팀 프로젝트 관리에 적합한 Microsoft 협업 플랫폼입니다."
  ],
  [
    "Firebase",
    "dev",
    "system",
    "free",
    ["web", "app", "data"],
    ["javascript"],
    "firebase.google.com",
    "https://firebase.google.com/",
    "Web SDK 최신 버전",
    "인증, 데이터베이스, 호스팅을 빠르게 붙여 작은 서비스를 배포할 수 있습니다."
  ],
  [
    "TypeScript",
    "dev",
    "language",
    "free",
    ["web", "app"],
    ["typescript", "javascript"],
    "typescriptlang.org",
    "https://www.typescriptlang.org/",
    "최신 안정판",
    "JavaScript에 타입을 더해 큰 웹 프로젝트의 오류를 줄이고 자동완성 품질을 높이는 언어입니다."
  ],
  [
    "Vite",
    "dev",
    "web",
    "free",
    ["web", "app"],
    ["javascript", "typescript"],
    "vite.dev",
    "https://vite.dev/",
    "최신 안정판",
    "React, Vue, Vanilla 프로젝트를 빠르게 시작하고 개발 서버와 빌드 환경을 제공하는 프론트엔드 도구입니다."
  ],
  [
    "Postman",
    "dev",
    "test",
    "free",
    ["web", "app", "collab"],
    [],
    "postman.com",
    "https://www.postman.com/downloads/",
    "Desktop App 최신 안정판",
    "REST API 요청을 보내고 응답, 인증, 환경 변수를 확인하는 API 테스트 도구입니다."
  ],
  [
    "FastAPI",
    "dev",
    "web",
    "free",
    ["web", "data", "ai"],
    ["python"],
    "fastapi.tiangolo.com",
    "https://fastapi.tiangolo.com/",
    "최신 안정판",
    "Python으로 REST API 서버를 빠르게 만들고 자동 API 문서까지 확인할 수 있는 백엔드 프레임워크입니다."
  ],
  [
    "Spring Boot",
    "dev",
    "web",
    "free",
    ["web", "app"],
    ["java"],
    "spring.io",
    "https://spring.io/projects/spring-boot",
    "최신 안정판",
    "Java 기반 백엔드 서버와 REST API를 만들 때 많이 쓰는 실전 프레임워크입니다."
  ],
  [
    "Android Studio",
    "dev",
    "ide",
    "free",
    ["app"],
    ["kotlin", "java"],
    "developer.android.com",
    "https://developer.android.com/studio",
    "최신 안정판",
    "Android 앱 개발 공식 IDE로 에뮬레이터, Gradle 빌드, Kotlin/Java 개발을 지원합니다."
  ],
  [
    "Kotlin",
    "dev",
    "language",
    "free",
    ["app", "web"],
    ["kotlin"],
    "kotlinlang.org",
    "https://kotlinlang.org/",
    "최신 안정판",
    "Android 앱 개발과 JVM 서버 개발에 쓰이는 간결한 프로그래밍 언어입니다."
  ],
  [
    "NumPy",
    "dev",
    "data",
    "free",
    ["ai", "data"],
    ["python"],
    "numpy.org",
    "https://numpy.org/",
    "최신 안정판",
    "Python에서 배열과 수치 계산을 다루는 데이터 분석과 AI의 기본 라이브러리입니다."
  ],
  [
    "Matplotlib",
    "dev",
    "data",
    "free",
    ["ai", "data"],
    ["python"],
    "matplotlib.org",
    "https://matplotlib.org/",
    "최신 안정판",
    "Python 데이터 분석 결과를 그래프와 차트로 시각화하는 기본 라이브러리입니다."
  ],
  [
    "GitHub Actions",
    "dev",
    "collab",
    "free",
    ["collab", "system", "web"],
    [],
    "github.com",
    "https://github.com/features/actions",
    "GitHub 내장 최신 버전",
    "push나 pull request 시 테스트, 빌드, 배포를 자동화하는 CI/CD 도구입니다."
  ],
  [
    "Kali Linux",
    "dev",
    "security",
    "free",
    ["security", "system"],
    [],
    "kali.org",
    "https://www.kali.org/get-kali/",
    "최신 안정판 또는 VM 이미지",
    "보안 실습용 Linux 배포판으로 네트워크, 웹 보안, 침투 테스트 도구를 한 환경에서 다룹니다."
  ],
  [
    "Apache HTTP Server",
    "dev",
    "system",
    "free",
    ["system", "web"],
    [],
    "httpd.apache.org",
    "https://httpd.apache.org/download.cgi",
    "최신 안정판",
    "정적 웹 서버, 가상 호스트, PHP/WordPress 호스팅 구조를 익히기 좋은 대표 웹 서버입니다."
  ],
  [
    "Chrome Lighthouse",
    "dev",
    "test",
    "free",
    ["web"],
    ["javascript"],
    "developer.chrome.com",
    "https://developer.chrome.com/docs/lighthouse/overview",
    "Chrome DevTools 내장 버전",
    "웹 페이지의 성능, 접근성, SEO, 모범 사례를 점검하는 Chrome 내장 분석 도구입니다."
  ],
  [
    "Markdown",
    "dev",
    "collab",
    "free",
    ["collab", "web"],
    [],
    "markdownguide.org",
    "https://www.markdownguide.org/",
    "문법 가이드 최신 버전",
    "README, 개발 일지, 프로젝트 문서, 프롬프트 정리에 쓰이는 가벼운 문서 작성 문법입니다."
  ],
  [
    "Terminal (Zsh/Bash)",
    "dev",
    "system",
    "free",
    ["system", "web"],
    [],
    "gnu.org",
    "https://www.gnu.org/software/bash/",
    "Bash 또는 Zsh 최신 안정판",
    "명령어 실행, Git, 서버 실행, 패키지 설치를 익히는 기본 개발자 작업 환경입니다."
  ],
  [
    "GitFlow",
    "dev",
    "collab",
    "free",
    ["collab"],
    [],
    "nvie.com",
    "https://nvie.com/posts/a-successful-git-branching-model/",
    "브랜치 전략 기초",
    "main, develop, feature 브랜치를 나누어 팀 프로젝트 버전 관리를 연습하는 Git 브랜치 전략입니다."
  ],
  [
    "Tailwind CSS",
    "dev",
    "ui",
    "free",
    ["web", "app"],
    ["javascript", "typescript"],
    "tailwindcss.com",
    "https://tailwindcss.com/",
    "최신 안정판",
    "기능리티 클래스로 반응형 UI를 빠르게 구성하는 CSS 프레임워크입니다."
  ],
  [
    "Next.js",
    "dev",
    "web",
    "free",
    ["web", "app"],
    ["javascript", "typescript"],
    "nextjs.org",
    "https://nextjs.org/",
    "최신 안정판",
    "React 기반으로 라우팅, 서버 렌더링, API 라우트까지 다루는 풀스택 웹 프레임워크입니다."
  ],
  [
    "Redis",
    "dev",
    "data",
    "free",
    ["data", "web", "system"],
    [],
    "redis.io",
    "https://redis.io/download/",
    "최신 안정판",
    "캐시, 세션, 큐 구조를 익히는 데 쓰이는 인메모리 데이터 저장소입니다."
  ],
  [
    "Jest",
    "dev",
    "test",
    "free",
    ["web"],
    ["javascript", "typescript"],
    "jestjs.io",
    "https://jestjs.io/",
    "최신 안정판",
    "JavaScript와 TypeScript 함수, 컴포넌트, 로직을 검증하는 단위 테스트 도구입니다."
  ],
  [
    "LangChain",
    "dev",
    "ai",
    "free",
    ["ai", "data", "web"],
    ["python", "javascript"],
    "langchain.com",
    "https://www.langchain.com/",
    "최신 안정판",
    "LLM, 검색, 도구 호출, 메모리 등을 연결해 AI 서비스를 구성하는 프레임워크입니다."
  ],
  [
    "Hugging Face",
    "dev",
    "ai",
    "free",
    ["ai", "data"],
    ["python"],
    "huggingface.co",
    "https://huggingface.co/",
    "Hub + Transformers 최신 버전",
    "모델, 데이터셋, Transformer 라이브러리로 AI 모델 활용과 배포 흐름을 학습하는 플랫폼입니다."
  ],
  [
    "Cypress",
    "dev",
    "test",
    "free",
    ["web"],
    ["javascript", "typescript"],
    "cypress.io",
    "https://www.cypress.io/",
    "최신 안정판",
    "웹 애플리케이션의 컴포넌트 테스트와 E2E 테스트를 작성하는 테스트 자동화 도구입니다."
  ],
  [
    "Vector DB (Chroma/Pinecone)",
    "dev",
    "data",
    "free",
    ["ai", "data"],
    ["python", "javascript"],
    "trychroma.com",
    "https://www.trychroma.com/",
    "Chroma 또는 Pinecone 최신 버전",
    "임베딩을 저장하고 유사도 검색을 수행해 RAG 기반 AI 서비스를 만드는 벡터 데이터베이스입니다."
  ],
  [
    "Terraform",
    "dev",
    "system",
    "free",
    ["system"],
    [],
    "terraform.io",
    "https://developer.hashicorp.com/terraform",
    "최신 안정판",
    "클라우드 서버, 네트워크, 리소스를 코드로 정의하고 관리하는 IaC 도구입니다."
  ],
  [
    "OpenAI API",
    "dev",
    "ai",
    "paid",
    ["ai", "web", "data"],
    ["python", "javascript"],
    "platform.openai.com",
    "https://platform.openai.com/docs",
    "Responses API 최신 버전",
    "앱 안에서 텍스트 생성, 코드 보조, 에이전트형 AI 기능을 구현하는 API입니다."
  ],
  [
    "Jira",
    "dev",
    "collab",
    "paid",
    ["collab"],
    [],
    "atlassian.com",
    "https://www.atlassian.com/software/jira",
    "Cloud 최신 버전",
    "이슈, 스프린트, 백로그를 관리하며 현업식 팀 프로젝트 흐름을 익히는 협업 도구입니다."
  ],
  [
    "Godot",
    "dev",
    "game",
    "free",
    ["game"],
    [],
    "godotengine.org",
    "https://godotengine.org/download",
    "최신 안정판",
    "2D와 3D 게임을 만들 수 있는 무료 오픈소스 게임 엔진입니다."
  ],
  [
    "Unreal Engine",
    "dev",
    "game",
    "free",
    ["game", "media"],
    ["c"],
    "unrealengine.com",
    "https://www.unrealengine.com/download",
    "Epic Games Launcher + 최신 안정판",
    "고품질 3D 게임, 실시간 렌더링, 시뮬레이션 제작에 쓰이는 게임 엔진입니다."
  ],
  [
    "ESLint",
    "dev",
    "review",
    "free",
    ["web"],
    ["javascript", "typescript"],
    "eslint.org",
    "https://eslint.org/",
    "최신 안정판",
    "JavaScript와 TypeScript 코드의 오류와 스타일 문제를 자동으로 찾아주는 정적 분석 도구입니다."
  ],
  [
    "Prettier",
    "dev",
    "review",
    "free",
    ["web"],
    ["javascript", "typescript"],
    "prettier.io",
    "https://prettier.io/",
    "최신 안정판",
    "코드 포맷을 자동으로 맞춰 팀 프로젝트의 코드 스타일을 통일하는 도구입니다."
  ],
  [
    "PlatformIO",
    "dev",
    "embedded",
    "free",
    ["embedded", "system"],
    ["c"],
    "platformio.org",
    "https://platformio.org/",
    "VS Code Extension 최신 버전",
    "여러 마이크로컨트롤러 보드의 빌드, 업로드, 라이브러리 관리를 도와주는 임베디드 개발 환경입니다."
  ],
  [
    "KiCad",
    "dev",
    "embedded",
    "free",
    ["embedded", "media"],
    [],
    "kicad.org",
    "https://www.kicad.org/download/",
    "최신 안정판",
    "회로도와 PCB 설계를 학습할 수 있는 무료 오픈소스 전자 설계 도구입니다."
  ],
  [
    "Figma",
    "dev",
    "ui",
    "free",
    ["web", "app", "media"],
    [],
    "figma.com",
    "https://www.figma.com/downloads/",
    "Desktop App 또는 Web 최신 버전",
    "웹/앱 화면 설계, 프로토타입, 디자인 협업에 쓰이는 대표 UI 디자인 도구입니다."
  ],
  [
    "Storybook",
    "dev",
    "ui",
    "free",
    ["web", "app"],
    ["javascript", "typescript"],
    "storybook.js.org",
    "https://storybook.js.org/",
    "최신 안정판",
    "UI 컴포넌트를 독립적으로 만들고 문서화하며 상태별 화면을 검토하는 프론트엔드 도구입니다."
  ],
  [
    "Vitest",
    "dev",
    "test",
    "free",
    ["web"],
    ["javascript", "typescript"],
    "vitest.dev",
    "https://vitest.dev/",
    "최신 안정판",
    "Vite 기반 프로젝트에서 빠르게 단위 테스트를 작성하고 실행하는 테스트 도구입니다."
  ],
  [
    "Pytest",
    "dev",
    "test",
    "free",
    ["web", "data", "ai"],
    ["python"],
    "pytest.org",
    "https://docs.pytest.org/",
    "최신 안정판",
    "Python 함수, 백엔드 API, 데이터 처리 로직을 검증하는 대표 테스트 프레임워크입니다."
  ],
  [
    "React Native",
    "dev",
    "web",
    "free",
    ["web", "app"],
    ["javascript"],
    "reactnative.dev",
    "https://reactnative.dev/",
    "최신 안정판",
    "React 방식으로 Android와 iOS 모바일 앱을 만드는 프레임워크입니다."
  ],
  [
    "Flutter",
    "dev",
    "web",
    "free",
    ["web", "app"],
    [],
    "flutter.dev",
    "https://flutter.dev/",
    "최신 안정판",
    "하나의 코드베이스로 모바일, 웹, 데스크톱 앱을 만드는 UI 프레임워크입니다."
  ],
  [
    "Nginx",
    "dev",
    "system",
    "free",
    ["system", "web"],
    [],
    "nginx.org",
    "https://nginx.org/",
    "Stable",
    "웹 서버와 리버스 프록시를 구성하며 서버 구조를 익히는 데 쓰입니다."
  ],
  [
    "Amazon Web Services",
    "dev",
    "system",
    "paid",
    ["system", "web", "data"],
    [],
    "aws.amazon.com",
    "https://aws.amazon.com/",
    "Free Tier 중심",
    "클라우드 서버, 저장소, 배포 자동화 등 인프라 실습에 쓰이는 대표 플랫폼입니다."
  ],
  [
    "Kubernetes",
    "dev",
    "system",
    "free",
    ["system"],
    [],
    "kubernetes.io",
    "https://kubernetes.io/",
    "최신 안정판",
    "컨테이너 여러 개를 배포, 확장, 관리하는 고급 인프라 도구입니다."
  ],
  [
    "FreeRTOS",
    "dev",
    "embedded",
    "free",
    ["embedded", "system"],
    ["c"],
    "freertos.org",
    "https://www.freertos.org/",
    "최신 안정판",
    "임베디드 시스템에서 태스크와 실시간 동작을 다루는 RTOS입니다."
  ],
  [
    "MongoDB",
    "dev",
    "data",
    "free",
    ["database", "data"],
    ["javascript", "sql"],
    "mongodb.com",
    "https://www.mongodb.com/try/download/community",
    "Community Server",
    "문서 기반 NoSQL 데이터베이스와 대용량 데이터 구조를 익힐 수 있습니다."
  ],
  [
    "Photoshop",
    "dev",
    "media",
    "paid",
    ["media", "web"],
    [],
    "adobe.com",
    "https://www.adobe.com/products/photoshop.html",
    "Creative Cloud 최신 버전",
    "2D 이미지 편집, 색상, 레이아웃 감각을 익히는 그래픽 도구입니다."
  ],
  [
    "Blender",
    "dev",
    "media",
    "free",
    ["media", "game"],
    ["python"],
    "blender.org",
    "https://www.blender.org/download/",
    "최신 안정판",
    "3D 모델링, 렌더링, 애니메이션을 배우는 무료 그래픽 도구입니다."
  ]
  ].map(([name, type, category, cost, fields, languages, domain, url, recommendedVersion, summary]) => ({
    name, type, category, cost, fields, languages, icon: iconOverrides[domain] || `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
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
  toolboxView: "stage",
  searchMode: "keyword",
  ollamaMessages: [],
  ollamaPending: false

}
;
/* 데이터 : 분야 이름 보관함 */
const fieldLabels = {
  web: "웹/앱 개발", app: "앱 개발", data: "인공지능/데이터", game: "게임 개발", ai: "인공지능/데이터", security: "보안", system: "시스템/인프라",
 collab: "개발 협업", embedded: "임베디드/하드웨어", database: "데이터베이스/정보관리", media: "그래픽/미디어", ui: "UI/프론트 개발"
}
;

/* 데이터 : 언어 이름 보관함 */
const languageLabels = {
  javascript: "HTML/CSS/JavaScript", typescript: "TypeScript", python: "Python", java: "Java", kotlin: "Kotlin", csharp: "C#", c: "C/C++", sql: "SQL"
}
;

/* 데이터 : OS 이름 보관함 */
const osLabels = {
  windows: "Windows", mac: "macOS", linux: "Linux"
}
;

/* 데이터 : OS 지원 기준 보관함 */
const osCompatibility = {
  "Visual Studio Community": ["windows"], "MinGW-w64": ["windows"], "WSL2 + Ubuntu": ["windows"], "GitHub Desktop": ["windows",
 "mac"], "Ubuntu Desktop": ["linux"], GCC: ["linux", "mac"], "Android Studio": ["windows", "mac", "linux"], "Apache HTTP Server": ["windows", "mac", "linux"],
 "Kali Linux": ["windows", "mac", "linux"]
}
;

/* 데이터 : 도구 분류 이름 보관함 */
const toolCategoryLabels = {
  ide: "IDE / 개발환경", web: "웹 / 앱 개발", ai: "AI", review: "코드 리뷰 / 품질 개선", test: "테스트 / 자동화", data: "SQL / 데이터 작업",
 system: "시스템 / 인프라", ui: "UI / 프론트 개발", collab: "협업", embedded: "임베디드 / 하드웨어", media: "그래픽 / 미디어", security: "보안", game: "게임 / 기타"
}
;

/* 데이터 : 도구 분류 순서 보관함 */
const toolCategoryOrder = ["ide", "web", "ai", "system", "data", "ui", "collab", "review", "test", "security", "embedded",
 "media", "game"];

/* 데이터 : 사용 언어 옵션 보관함 */
const languageOptions = ["C", "C++", "C#", "Java", "Kotlin", "Python", "HTML/CSS/JavaScript", "TypeScript", "SQL"];

/* 데이터 : 학습 분야 옵션 보관함 */
const studyFields = ["web", "ai", "system", "security", "embedded", "database", "media", "game", "collab"];

/* 데이터 : 관련 분야 묶음 보관함 */
const fieldGroups = {
  web: ["web", "app"], ai: ["ai", "data"], database: ["database", "data"]
}
;

/* 데이터 : AI 기본 분야 확장함 */
const aiDefaultFields = [...new Set([...studyFields, "app", "data", "ui"])];

/* 데이터 : AI 기본 언어 확장함 */
const aiDefaultLanguages = Object.keys(languageLabels);

appData.tools.forEach((tool) => {

  if (tool.type === "ai" || tool.category === "ai") {

    tool.fields = [...new Set([...tool.fields, ...aiDefaultFields])];

    tool.languages = [...new Set([...tool.languages, ...aiDefaultLanguages])];
  }
}
);

/* 데이터 : 전체 OS 목록 만듦 */
const allOs = Object.keys(osLabels);

/* 데이터 : 도구 이름 빠르게 찾음 */
const toolMap = new Map(appData.tools.map((tool) => [tool.name, tool]));

/* 데이터 : 언어별 추천 우선순위 보관함 */
const languagePriorityRules = [
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
    words: ["nosql", "no sql", "몽고", "몽고db", "몽고디비", "mongodb", "문서형 db", "문서형 데이터베이스"], order: ["MongoDB", "TablePlus", "Docker"]
  }
  ,
  {
    words: ["vector db", "벡터 db", "chroma", "pinecone"], order: ["Vector DB (Chroma/Pinecone)", "LangChain", "MongoDB"]
  }
  ,
  {
    words: ["sql", "쿼리", "데이터베이스", "데이터 베이스", "db", "디비", "rdb", "rdbms", "관계형"], order: ["MySQL", "PostgreSQL", "DataGrip", "TablePlus"]
  }
  ,
  {
    words: ["redis", "레디스", "캐시", "세션"], order: ["Redis", "PostgreSQL", "Docker"]
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

  ];;

/* 데이터 : 검색 키워드 규칙 보관함. */
const goalKeywordRules = [
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
    words: ["데이터베이스", "데이터 베이스", "db", "디비", "sql", "쿼리", "rdb", "rdbms", "관계형", "mysql", "postgresql"], exclude: ["nosql", "no sql", "mongodb", "몽고db", "몽고디비", "redis", "레디스", "vector db", "벡터 db", "chroma", "pinecone"], fields: ["database", "data"], languages: ["sql"],
 categories: ["data"]
  }
  ,
  {
    words: ["nosql", "no sql", "mongodb", "몽고db", "몽고디비", "문서형 db", "문서형 데이터베이스"], fields: ["database", "data"], categories: ["data"]
  }
  ,
  {
    words: ["redis", "레디스", "캐시", "세션"], fields: ["data", "system"], categories: ["data", "system"]
  }
  ,
  {
    words: ["vector db", "벡터 db", "chroma", "pinecone"], fields: ["database", "data", "ai"], categories: ["data", "ai"]
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

  ];

/* 데이터 : 단계별 도구 기준 보관함. */
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

/* 이벤트 : 초기 화면과 입력 연결함. */
