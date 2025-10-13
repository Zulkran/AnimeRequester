import { searchButton,eraseButton,animeSearch,findAnime } from './api_searchAnime.js';
import { darkButton,initialiseDark, toggleTheme } from './darkMode.js';

initialiseDark();

// Using prompt to get api key
if(sessionStorage.getItem('userKey') == null) {
    let userKey = prompt("Please enter your api key:");
    sessionStorage.setItem('userKey', userKey);
    if (userKey !== null) {
      alert(`Hello you have access to your application!`);
    } else {
      alert("You canceled the input.");
    }
}

searchButton.addEventListener("click", () => findAnime());
eraseButton.addEventListener("click", () => clearAnime());
darkButton.addEventListener("click", () => toggleTheme());