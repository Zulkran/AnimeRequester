import { searchButton,eraseButton,animeSearch,findAnime } from './api_searchAnime.js';
import { darkButton,initialiseDark, toggleTheme } from './darkMode.js';

initialiseDark();

searchButton.addEventListener("click", () => findAnime());
eraseButton.addEventListener("click", () => clearAnime());
darkButton.addEventListener("click", () => toggleTheme());