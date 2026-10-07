function getCurrentGreeting() {
    const hour = new Date().getHours()

    if (hour < 12) {
        return 'Good Morning'
    }

    if (hour < 18) {
        return 'Good Afternoon'
    }

    return 'Good Evening'
}

function addLocalVariables(req, res, next) {
    const currentYear = new Date().getFullYear()
    const nodeEnvironment = (process.env.NODE_ENV || 'production').toLowerCase()

    const themes = [
        'blue-theme',
        'green-theme',
        'red-theme'
    ]

    const randomTheme = themes[Math.floor(Math.random() * themes.length)]

    res.locals.currentYear = currentYear
    res.locals.NODE_ENV = nodeEnvironment
    res.locals.queryParams = { ...req.query }
    res.locals.greeting = `<p>${getCurrentGreeting()}</p>`
    res.locals.bodyClass = randomTheme

    next()
}

export {
    getCurrentGreeting,
    addLocalVariables
}