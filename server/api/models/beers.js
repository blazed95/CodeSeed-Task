const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'beers',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'beers',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'beers_pk',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
};
