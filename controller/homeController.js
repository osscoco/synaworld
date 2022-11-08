const getHomePage = (req, res) => {

    res.render("Home");

}

const getSecurePage = (req, res) => {

    fs.readFile("05be2a19091bd3b9072e59a3fbd344b7.txt","utf8",function(err,html) {
        res.send(html);
    });
}

module.exports = {
    getHomePage,
    getSecurePage
};