const getHomePage = (req, res) => {

    res.status(200).render('index', {
        page_name: 'index'
    });

}

const getAboutPage = (req, res) => {

    res.status(200).render('about', {
        page_name: 'about'
    });

}

const getCoursesPage = (req, res) => {

    res.status(200).render('courses', {
        page_name: 'courses'
    });

}

const getContactPage = (req, res) => {

    res.status(200).render('contact', {
        page_name: 'contact'
    });

}
const getDashboardPage = (req, res) => {

    res.status(200).render('dashboard', {
        page_name: 'dashboard'
    });

}
const getLoginPage = (req, res) => {

    res.status(200).render('login');

}
const getRegisterPage = (req, res) => {

    res.status(200).render('register');

}

module.exports = {
    getHomePage,
    getAboutPage,
    getCoursesPage,
    getContactPage,
    getDashboardPage,
    getLoginPage,
    getRegisterPage
}