const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: Number,
    required: true
});

const Ingredient = mongoose.model('ingredient', IngredientSchema);

module.exports = Ingredient;