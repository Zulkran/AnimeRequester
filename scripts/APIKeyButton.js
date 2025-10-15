const APIButton = document.getElementById("APIButton");
const APIPrompt = document.getElementById("promptPath");
const updateAPIButton = document.getElementById("updateAPIButton");
const inputAPIKey = document.getElementById("inputAPIKey");
const textSuccess = document.getElementById("text_success");

function openClosePrompt() {
    if (!APIPrompt.classList.contains('hidden')) {
        APIPrompt.classList.add("hidden");
    }
    else {
        APIPrompt.classList.remove("hidden");
        verifyAPIKeyValue();
    }
}

function updateAPI() {
    sessionStorage.setItem("userKey", inputAPIKey.value);

    verifyAPIKeyValue();
    
    textSuccess.classList.remove("hidden");
    setTimeout(() => {
        textSuccess.classList.add("hidden");
    }, 5000);
}

function verifyAPIKeyValue() {
    if(sessionStorage.getItem("userKey") == null || sessionStorage.getItem("userKey") == "null") {
        inputAPIKey.value = "";
    } else {
        inputAPIKey.value = sessionStorage.getItem("userKey");
    }
}

export { APIButton, APIPrompt, openClosePrompt, updateAPI, updateAPIButton, inputAPIKey };