let typeSearch;
let inputSearch;
const searchButton = document.getElementById("searchButton");
const eraseButton = document.getElementById("eraseButton");
const darkButton = document.getElementById("darkSwtich");
const animeContent = document.getElementById('anime-content');

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

async function findAnime() {
    clearAnime();
    animeContent.classList.remove("hidden");
    let result = await animeSearch();
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

function addAnimeCard(title, imgPath, desc, type, rank, nbrEpisode) {
    animeContent.innerHTML
        +=
        `<div class="bg-[#ece0d1] text-center rounded-lg m-4 p-2 shadow-lg">
        <h1 class="font-bold text-3xl my-2">${title}<\h1>
        <img class="mx-auto my-2 w-sm rounded-md" src = "${imgPath}"\>
        <p class="text-left mt-2"><strong>The synopsis is :</strong><\p>
        <p class="text-justify mb-2">${desc}<\p>
        <p class="my-2"><strong>Genre :</strong> ${type}<\p>
        <p class="my-2"><strong>Rank :</strong> ${rank}<\p>
        <p class="my-2"><strong>Number of episode :</strong> ${nbrEpisode}<\p>
    </div>`;
}

function clearAnime() {
    document.getElementById('anime-content').innerHTML = null;
    animeContent.classList.add("hidden");
}

function switchTheme() {
    console.log("click");
    document.documentElement.classList.add('dark');
}

searchButton.addEventListener("click", () => findAnime());
eraseButton.addEventListener("click", () => clearAnime());

darkButton.addEventListener("click", () => switchTheme());
