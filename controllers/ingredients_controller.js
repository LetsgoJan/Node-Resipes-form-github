const Ingredient = require('../models/driver');

module.exports = {
    greeting(req, res){
        res.send({hi: 'there'});
    },
    create(req, res){
        const ingredientProps = req.body;

        Driver.create(ingredientProps)
            .then(ingredient => res.send(ingredient));
    }
};