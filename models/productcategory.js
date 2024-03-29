'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductCategory.init({
    id_product: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductCategory',
  });

  ProductCategory.associate = function(models) {
    ProductCategory.belongsTo(models.Product, {
      foreignKey: 'id_product',
      as: 'product_category',
    });

    ProductCategory.belongsTo(models.Category, {
      foreignKey: 'id_category',
      as: 'category_product',
    });
  };

  return ProductCategory;
};