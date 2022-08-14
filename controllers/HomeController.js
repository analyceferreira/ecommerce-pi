const productsData = require('../data/data-products.json')

const HomeController = {
    index: (req, res) => {
        res.render('layout', {'page':'home', productsData}) //trying session
    }
} 


module.exports = HomeController