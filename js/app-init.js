$(function () {
  applyTheme(localStorage.getItem("aiGuideTheme") || "light");

  renderSearchResults();
  renderToolboxFilters();
  renderAiCompareOptions();
  renderToolbox();
  renderUserViews();
  initCareerFlicking();
  initSelect2Controls();
  initFormValidation();

  let toolboxPageSize = getToolboxPageSize();

  $(".tab-button").on("click", function () {
    const target = $(this).data("tab");
    $(".tab-button").removeClass("active");
    $(this).addClass("active");
    $(".tab-page").removeClass("active");
    $(`[data-page='${target}']`).addClass("active");
    scrollToTop();
    refreshFlickingLayouts();

  }
  );

  $(window).on("resize.toolboxFlicking", function () {
    initCareerFlicking();
    const nextPageSize = getToolboxPageSize();
    if (nextPageSize === toolboxPageSize) {
      refreshFlickingLayouts();
      return;
    }
    toolboxPageSize = nextPageSize;
    renderToolbox();
  });

  $(".site-footer a[href='#top'], .brand[href='#top']").on("click", function (event) {
    event.preventDefault();
    scrollToTop();
  });

  $("#themeToggle").on("click", function () {
    const nextTheme = $("body").hasClass("dark-mode") ? "light" : "dark";
    localStorage.setItem("aiGuideTheme", nextTheme);
    applyTheme(nextTheme);

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
    const index = Number($(this).closest(".record-item").data("index"));
    appData.records.splice(index, 1);
    saveJson("llmRecords", appData.records);
    if ($("#editingRecordIndex").val() !== "" && Number($("#editingRecordIndex").val()) === index) resetForm("#recordForm",
 "#editingRecordIndex");
    if (appData.expandedRecordIndex === index) appData.expandedRecordIndex = null;
    else if (appData.expandedRecordIndex > index) appData.expandedRecordIndex -= 1;
    renderRecords();

  }
  );

  $("#recordList").on("click", ".record-item", function () {
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




