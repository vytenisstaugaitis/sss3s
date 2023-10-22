export function toggleMode() {
    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light'
        htmlElement.dataset.theme = 'light'
    } else {
        localStorage.theme = 'dark'
        htmlElement.dataset.theme = 'dark'
    }
}

export function formatDate(date, dateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return formatter.format(new Date(date))
}