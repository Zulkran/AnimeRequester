const APIButton = document.getElementById("APIButton");
const APIPrompt = document.getElementById("promptPath");

function openClosePrompt() {
    APIPrompt.innerHTML += `<h1>Enter your API KEY :</h1>
                <input class="m-2 p-2 rounded-md" type="text" placeholder="API Key...">
                <button class="p-2 bg-gray-500 dark:bg-gray-900 rounded-md "><i class="fa-regular fa-pen-to-square fa-inverse"></i></button>`;
    
}

export { APIButton, APIPrompt, openClosePrompt };