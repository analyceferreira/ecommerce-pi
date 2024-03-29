'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [{
      id_product: 1,
      file_url: 'https://media.discordapp.net/attachments/997292586333110365/1012011695096479935/game-jogo-minecraft-xbox-pi-digital-house.png?width=474&height=613',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
