let typeSearch = 0;
let input = document.getElementById("input");


async function animeSearch() {
    let url;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '24b8dadf2bmsh6a9192a82dab5cbp1fd844jsnef9b19c3e298',
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    };

    if (typeSearch == 0) {
        url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${input}`;

    }
    else if (typeSearch == 1) {
        url = `https://anime-db.p.rapidapi.com/${input}`
    }
    else if (typeSearch == 2) {
        url = `https://anime-db.p.rapidapi.com/anime/by-id/${input}`
    }
    else if (typeSearch == 3) {
        url = `https://anime-db.p.rapidapi.com/anime/by-ranking/${input}`
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
    
}
