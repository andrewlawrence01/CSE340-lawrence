function homePage(req, res) {
    res.render('home', {
        title: 'Home'
    })
}

function aboutPage(req, res) {
    res.render('about', {
        title: 'About'
    })
}

function demoPage(req, res) {
    res.render('demo', {
        title: 'Middleware Demo Page'
    })
}

function testErrorPage(req, res, next) {
    const error = new Error('This is a test error.')
    error.status = 500

    next(error)
}

export {
    homePage,
    aboutPage,
    demoPage,
    testErrorPage
}