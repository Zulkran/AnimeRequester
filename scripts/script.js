let typeSearch;
let inputSearch;
const searchButton = document.getElementById("searchButton");
const eraseButton = document.getElementById("eraseButton");

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

async function findAnime(){
    clearAnime();
    let result = await animeSearch();
    if (typeSearch == 'title') {
        result = result.data;
        for(let data of result) {
            addAnimeCard(data.title, data.image, data.synopsis, data.genres, data.ranking, data.episodes);
        }
    }
    else {
        addAnimeCard(result.title, result.image, result.synopsis, result.genres, result.ranking, result.episodes);
    }
}

function addAnimeCard(title, imgPath, desc, type, rank, nbrEpisode){
    document.getElementById('anime-content').innerHTML 
    += 
    `<div class="justify-center text-center align-center bg-gray-100 rounded-lg m-4 p-2 shadow-lg">
        <h1 class="font-bold">${title}<\h1>
        <img src = "${imgPath}"\>
        <p>The synopsis is : ${desc}<\p>
        <p>Genre : ${type}<\p>
        <p>Rank : ${rank}<\p>
        <p>Number of episode : ${nbrEpisode}<\p>
    </div>`;
}

function clearAnime() {
    document.getElementById('anime-content').innerHTML = null;
}

searchButton.addEventListener("click", () => findAnime());
eraseButton.addEventListener("click", () => clearAnime());
