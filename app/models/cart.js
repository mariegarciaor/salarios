const Sequelize = require("sequelize");
const db = require("../util/database");

const Cart = db.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quality: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = Cart;