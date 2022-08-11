'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      promotional_price_status: {
        type: Sequelize.BOOLEAN
      },
      promotional_price: {
        type: Sequelize.DECIMAL
      },
      brand: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      id_type_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TypeProducts',
          key: 'id'
        }
      },
      plataform: {
        type: Sequelize.STRING
      },
      short_description: {
        type: Sequelize.STRING
      },
      full_description: {
        type: Sequelize.STRING
      },
      id_rating_system: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RatingSystems',
          key: 'id'
        }
      },
      id_product_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ProductStatuses',
          key: 'id'
        }
      },
      weight: {
        type: Sequelize.DECIMAL
      },
      formart: {
        type: Sequelize.INTEGER
      },
      length: {
        type: Sequelize.DECIMAL
      },
      width: {
        type: Sequelize.DECIMAL
      },
      diameter: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};