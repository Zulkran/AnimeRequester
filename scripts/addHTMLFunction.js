const animeContent = document.getElementById('anime-content');

function addAnimeCard(title, imgPath, desc, type, rank, nbrEpisode) {
    animeContent.innerHTML
        +=
        `<div class="bg-[#dbc1ac] dark:bg-[#634832]  text-[#38220f] dark:text-[#ece0d1] text-center rounded-lg m-4 p-2 shadow-lg">
        <h1 class="font-bold text-3xl my-2">${title}<\h1>
        <img class="mx-auto my-2 w-sm rounded-md" src = "${imgPath}"\>
        <p class="text-left mt-2"><strong>The synopsis is :</strong><\p>
        <p class="text-justify mb-2">${desc}<\p>
        <p class="my-2"><strong>Genre :</strong> ${type}<\p>
        <p class="my-2"><strong>Rank :</strong> ${rank}<\p>
        <p class="my-2"><strong>Number of episode :</strong> ${nbrEpisode}<\p>
    </div>`;
}

function addGenreCheckbox(addOrRemove){
    if (addOrRemove == true){
    document.getElementById(genres).innerHTML
    = 
    `
    <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="AwardWinning" name="genres" />
                <label for="AwardWinning">Award Winning</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Action" name="genres" />
                <label for="Action">Action</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Suspense" name="genres" />
                <label for="Suspense">Suspense</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Horror" name="genres" />
                <label for="Horror">Horror</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Ecchi" name="genres" />
                <label for="Ecchi">Ecchi</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="AvantGarde" name="genres" />
                <label for="AvantGarde">Avant Garde</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Sports" name="genres" />
                <label for="Sports">Sports</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Supernatural" name="genres" />
                <label for="Supernatural">Supernatural</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Fantasy" name="genres" />
                <label for="Fantasy">Fantasy</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="BoysLove" name="genres" />
                <label for="BoysLove">Boys Love</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Drama" name="genres" />
                <label for="Drama">Drama</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Comedy" name="genres" />
                <label for="Comedy">Comedy</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Mystery" name="genres" />
                <label for="Mystery">Mystery</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="GirlsLove" name="genres" />
                <label for="GirlsLove">Girls Love</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="SliceOfLife" name="genres" />
                <label for="SliceOfLife">Slice of Life</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Adventure" name="genres" />
                <label for="Adventure">Adventure</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Romance" name="genres" />
                <label for="Romance">Romance</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Sci-Fi" name="genres" />
                <label for="Sci-Fi">Sci-Fi</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Erotica" name="genres" />
                <label for="Erotica">Erotica</label>
            </div>
            <div class="flex items-center cursor-pointer relative">
                <input type="checkbox" id="Hentai" name="genres" />
                <label for="Hentai">Hentai</label>
            </div>`
    }
    else{
        document.getElementById(genres).innerHTML = "";
    }
}

function clearAnime() {
    animeContent.innerHTML = null;
    animeContent.classList.add("hidden");
}

export {animeContent, addAnimeCard, addGenreCheckbox,clearAnime};