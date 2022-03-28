const express = require('express');
const beerController = require('../controllers/beerController');

// const createHttpError = require('http-errors');
const router = express.Router();

router.get('/beers', beerController.getBeers);
router.post('/beer', beerController.createBeer);
router.put('/beer', beerController.updateBeer);
router.delete('/beer/:id', beerController.deleteBeer);

module.exports = router;
