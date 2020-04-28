const mongoose = require('mongoose');

const Procuct = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Procuct.find();

        return res.json(products);
    },
};