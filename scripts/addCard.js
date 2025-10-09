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

function clearAnime() {
    animeContent.innerHTML = null;
    animeContent.classList.add("hidden");
}

export {animeContent, addAnimeCard, clearAnime};