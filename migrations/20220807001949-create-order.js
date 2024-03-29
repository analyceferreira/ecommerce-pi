'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      id_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'OrderStatuses',
          key: 'id'
        }
      },
      date_order: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.FLOAT
      },
      descouint: {
        type: Sequelize.FLOAT
      },
      price_payment: {
        type: Sequelize.FLOAT
      },
      id_payment_method: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PaymentMethods',
          key: 'id'
        }
      },
      payment_status: {
        type: Sequelize.STRING
      },
      id_adress: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Adresses',
          key: 'id'
        }
      },
      id_courier: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Couriers',
          key: 'id'
        }
      },
      delivery_time: {
        type: Sequelize.INTEGER
      },
      delivery_price: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Orders');
  }
};