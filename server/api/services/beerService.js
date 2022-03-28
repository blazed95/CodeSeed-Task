const db = require('../models');
var createHttpError = require('http-errors');

const BeerService = {
  getBeers: async () => {
    try {
      const beers = await db.beers.findAll({ raw: true });
      return beers;
    } catch (error) {
      throw error;
    }
  },

  createBeer: async (payload) => {
    try {
      const newBeer = await db.beers.create({ ...payload });
      return newBeer;
    } catch (error) {
      throw error;
    }
  },

  deleteBeer: async (params) => {
    let transaction;

    try {
      transaction = await db.sequelize.transaction();

      const beerId = parseInt(params.id);

      const beer = await db.beers.findOne({
        where: { id: beerId },
        transaction,
      });
      if (!beer) throw createHttpError(404, 'Beer not found', { id: beerId });

      await beer.destroy({ transaction });
      await transaction.commit();
    } catch (error) {
      if (transaction) await transaction.rollback();

      throw error;
    }
  },

  updateBeer: async (payload) => {
    let transaction;
    try {
      transaction = await db.sequelize.transaction();

      console.log(payload);
      const beer = await db.beers.findOne({
        where: { id: payload.id },
        transaction,
      });

      if (!beer) throw createHttpError(404, 'Beer not found', { id: beerId });

      const updatedAsset = await beer.update(
        {
          ...payload,
        },
        { transaction }
      );

      await transaction.commit();
      return updatedAsset;
    } catch (error) {
      if (transaction) await transaction.rollback();

      throw error;
    }
  },
};

module.exports = BeerService;
