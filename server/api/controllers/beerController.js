const BeerService = require('../services/beerService');

async function getBeers(req, res, next) {
  try {
    const result = await BeerService.getBeers();
    return res.status(200).send(result);
  } catch (err) {
    next(err);
  }
}

async function createBeer(req, res, next) {
  try {
    const result = await BeerService.createBeer(req.body);
    return res.status(200).send(result);
  } catch (err) {
    next(err);
  }
}

async function deleteBeer(req, res, next) {
  try {
    await BeerService.deleteBeer(req.params);
    return res.status(202).send();
  } catch (err) {
    next(err);
  }
}

async function updateBeer(req, res, next) {
  try {
    const result = await BeerService.updateBeer(req.body);
    return res.status(200).send(result);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getBeers,
  createBeer,
  deleteBeer,
  updateBeer,
};
