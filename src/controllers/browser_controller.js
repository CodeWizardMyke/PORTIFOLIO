
const browser = {
    redirect: (req, res) =>{
        res.redirect('/borwser')
    },
    index: (req, res) => {
        res.render('home.ejs');
    },
    about: (req, res) => {
        res.render('about.ejs');
    },
    projects: (req, res) => {
        res.render('projects.ejs');
    },
};

module.exports = browser;