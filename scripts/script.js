

let typeSearch = 0;

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
        url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${titre}`;
        
    }

    try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
}
