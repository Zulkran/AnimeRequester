const APIButton = document.getElementById("APIButton");
const APIPrompt = document.getElementById("promptPath");
const updateAPIButton = document.getElementById("updateAPIButton");
const inputAPIKey = document.getElementById("inputAPIKey");
const textSuccess = document.getElementById("text_success");

function openClosePrompt() {
    if (!APIPrompt.classList.contains('hidden')) { // il faut regarder si c'est hidden
        APIPrompt.classList.add("hidden");
    }
    else {
        APIPrompt.classList.remove("hidden");
        inputAPIKey.value = sessionStorage.getItem("userKey");
    }
}

function updateAPI() {
    console.log(inputAPIKey.value);
    sessionStorage.setItem("userKey", inputAPIKey.value);
    console.log(inputAPIKey.value);
    inputAPIKey.value = sessionStorage.getItem("userKey");
    textSuccess.classList.remove("hidden");
    setTimeout(() => {
        textSuccess.classList.add("hidden");
    }, 5000);
}

export { APIButton, APIPrompt, openClosePrompt, updateAPI, updateAPIButton, inputAPIKey };