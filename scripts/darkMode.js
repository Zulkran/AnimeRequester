const darkButton = document.getElementById("darkModeButton");

function initialiseDark() {
    if (sessionStorage.theme === 'dark' ||
        (!('theme' in sessionStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    sessionStorage.theme = isDark ? 'dark' : 'light';
}

export { darkButton,initialiseDark, toggleTheme };