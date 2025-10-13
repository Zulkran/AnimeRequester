const APIButton = document.getElementById("APIButton");
const APIPrompt = document.getElementById("promptPath");
const updateAPIButton = document.getElementById("updateAPIButton");
const inputAPIKey = document.getElementById("inputAPIKey");

function openClosePrompt() {
    if (APIPrompt.children.length > 0) { // il faut regarder si c'est hidden
        console.log("hidden");
        APIPrompt.classList.add("hidden");
    }
    else {
        APIPrompt.classList.remove("hidden");
        inputAPIKey.value = sessionStorage.getItem("userKey");
    }
}

function updateAPI() {
    sessionStorage.setItem("userKey", inputAPIKey.value);
}

export { APIButton, APIPrompt, openClosePrompt,updateAPI,updateAPIButton,inputAPIKey };