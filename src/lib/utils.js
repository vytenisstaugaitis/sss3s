export function toggleMode() {
    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light'
        htmlElement.dataset.theme = 'light'
    } else {
        localStorage.theme = 'dark'
        htmlElement.dataset.theme = 'dark'
    }
}