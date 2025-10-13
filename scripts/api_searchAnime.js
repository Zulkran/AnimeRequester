import {animeContent, addAnimeCard, clearAnime} from './addCard.js';
const searchButton = document.getElementById("searchButton");
const eraseButton = document.getElementById("eraseButton");

let typeSearch;
let inputSearch;

// Using prompt to get api key
let userKey = prompt("Please enter your api key:");
if (userKey !== null) {
  alert(`Hello you have access to your application!`);
} else {
  alert("You canceled the input.");
}

async function animeSearch() {
    if(userKey == null || userKey.length == 0) {
        return null;
    }
    let url;
    typeSearch = document.getElementById('category').value;
    inputSearch = document.getElementById("site-search").value;
    console.log(inputSearch);
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': userKey,
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    };

    if (typeSearch == 'title') {
        url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${inputSearch}`;
    }
    else if (typeSearch == 'type') {
        url = `https://anime-db.p.rapidapi.com/${inputSearch}`;
    }
    else if (typeSearch == 'byId') {
        url = `https://anime-db.p.rapidapi.com/anime/by-id/${parseInt(inputSearch)}`;
    }
    else if (typeSearch == 'rank') {
        url = `https://anime-db.p.rapidapi.com/anime/by-ranking/${parseInt(inputSearch)}`;
    }
    try {
        const response = await fetch(url, options);
        const result = (await response.json());
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

async function findAnime() {
    clearAnime();
    animeContent.classList.remove("hidden");
    let result = await animeSearch();
    if(result == null) {
        animeContent.innerHTML += `<div class="text-black dark:text-white text-center mx-auto">
        <p class="p-2 text-center">You did not enter your API key</p>`;
        return;
    }
    if (typeSearch == 'title') {
        result = result.data;
        for (let data of result) {
            addAnimeCard(data.title, data.image, data.synopsis, data.genres, data.ranking, data.episodes);
        }
    }
    else {
        addAnimeCard(result.title, result.image, result.synopsis, result.genres, result.ranking, result.episodes);
    }
}

export { searchButton,eraseButton,animeSearch,findAnime };