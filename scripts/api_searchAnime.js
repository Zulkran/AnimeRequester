import { animeContent, addAnimeCard, clearAnime } from './addCard.js';
const searchButton = document.getElementById("searchButton");
const eraseButton = document.getElementById("eraseButton");
const genresTab = ["Action", "Suspense", "Horror", "Ecchi", "AvantGarde", "Sports", "Supernatural",
    "Fantasy", "BoysLove", "Drama", "Comedy", "Mystery", "GirlsLove", "SliceOfLife",
    "Adventure", "Romance", "Sci-Fi", "Erotica", "Hentai"];

let typeSearch;
let inputSearch;

async function animeSearch() {
    let url;
    typeSearch = document.getElementById('category').value;
    inputSearch = document.getElementById("site-search").value;
    console.log(inputSearch);
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '24b8dadf2bmsh6a9192a82dab5cbp1fd844jsnef9b19c3e298',
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    };

    if (typeSearch == 'title') {
        url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${inputSearch}`;
    }
    else if (typeSearch == 'type') {
        url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${inputSearch}&genres=${await getSelectedGenres()}`;
        console.log(url);
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
    if (typeSearch == 'title' || typeSearch == "type") {
        result = result.data;
        for (let data of result) {
            addAnimeCard(data.title, data.image, data.synopsis, data.genres, data.ranking, data.episodes);
        }
    }
    else {
        addAnimeCard(result.title, result.image, result.synopsis, result.genres, result.ranking, result.episodes);
    }
}

async function getSelectedGenres() {
    let selectedGenreString = "";
    genresTab.forEach(genre => {
        if (document.getElementById(genre).checked == true) {
            selectedGenreString += `${genre}%2C`;
        }
    });
    //console.log(selectedGenreString);
    return selectedGenreString;
}


export { searchButton, eraseButton, animeSearch, findAnime };