let typeSearch;
let input = document.getElementById("input");
let searchButton = document.getElementById("searchButton");

async function animeSearch() {
    let url;
    typeSearch = document.getElementById('category').value;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '24b8dadf2bmsh6a9192a82dab5cbp1fd844jsnef9b19c3e298',
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    };

    if (typeSearch == 'title') {
        url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${input.textContent}`;

    }
    else if (typeSearch == 'type') {
        url = `https://anime-db.p.rapidapi.com/${input.textContent}`
    }
    else if (typeSearch == 2) {
        url = `https://anime-db.p.rapidapi.com/anime/by-id/${input.textContent}`
    }
    else if (typeSearch == 3) {
        url = `https://anime-db.p.rapidapi.com/anime/by-ranking/${input.textContent}`
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function findAnime(){
    result;
}

function addAnimeCard(title, imgPath, desc){
    document.getElementById('anime-content').innerHTML 
    += 
    `<div id= ""class="bg-gray-100 rounded-lg m-4 text-center p-2 shadow-lg">
        <h1>${title}<\h1>
        <img src = "${imgPath}"\>
        <p>${desc}<\p>
    </div>`
}

searchButton.addEventListener("click", () => findAnime());

