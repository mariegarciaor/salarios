const Sequelize = require("sequelize");
const db = require("../util/database");
const User = require("./users");

const Product = db.define("product", {
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
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'img',
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
  },
  sku: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'id',
    },
    onUpdate: 'CASCADE',
  },
});

Product.belongsTo(User);

module.exports = Product;
