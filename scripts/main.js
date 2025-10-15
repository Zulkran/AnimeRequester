import { searchButton,eraseButton,animeSearch,findAnime } from './api_searchAnime.js';
import { darkButton,initialiseDark, toggleTheme } from './darkMode.js';
import { APIButton, APIPrompt, openClosePrompt,updateAPI,updateAPIButton,inputAPIKey } from './APIKeyButton.js';
import {animeContent, addAnimeCard, clearAnime} from './addHTMLFunction.js';

initialiseDark();

searchButton.addEventListener("click", () => findAnime());
eraseButton.addEventListener("click", () => clearAnime());
darkButton.addEventListener("click", () => toggleTheme());
APIButton.addEventListener("click", () => openClosePrompt());
updateAPIButton.addEventListener("click", () => updateAPI());