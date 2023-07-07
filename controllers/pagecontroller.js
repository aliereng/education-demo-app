const getHomePage = (req, res) => {

    res.status(200).render('index');

}

const getAboutPage = (req, res) => {

    res.status(200).render('about');

}

const getCoursesPage = (req, res) => {

    res.status(200).render('courses');

}

const getContactPage = (req, res) => {

    res.status(200).render('contact');

}
const getDashboardPage = (req, res) => {

    res.status(200).render('dashboard');

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