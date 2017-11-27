const IngredientsController = require('../controllers/ingredients_controller')

module.exports = ((app) => {

    app.get('/api', IngredientsController.greeting);

    app.post('/api/ingredient', IngredientsController.create)
});