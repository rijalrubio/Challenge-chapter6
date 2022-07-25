'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert("user_game_histories", [
      {
        player:"gunting",
        bot: "kertas",
        hasil:"win",
        date: new Date(),
        userId:1
      },{
        player:"batu",
        bot: "kertas",
        hasil:"lose",
        date: new Date(),
        userId:1
      },{
        player:"gunting",
        bot: "kertas",
        hasil:"win",
        date: new Date(),
        userId:2
      },{
        player:"batu",
        bot: "kertas",
        hasil:"lose",
        date: new Date(),
        userId:2
      },{
        player:"gunting",
        bot: "kertas",
        hasil:"win",
        date: new Date(),
        userId:3
      },{
        player:"batu",
        bot: "kertas",
        hasil:"lose",
        date: new Date(),
        userId:3
      },{
        player:"gunting",
        bot: "kertas",
        hasil:"win",
        date: new Date(),
        userId:4
      },{
        player:"batu",
        bot: "kertas",
        hasil:"lose",
        date: new Date(),
        userId:4
      },{
        player:"gunting",
        bot: "kertas",
        hasil:"win",
        date: new Date(),
        userId:5
      },{
        player:"batu",
        bot: "kertas",
        hasil:"lose",
        date: new Date(),
        userId:5
      },{
        player:"gunting",
        bot: "kertas",
        hasil:"win",
        date: new Date(),
        userId:6
      },{
        player:"batu",
        bot: "kertas",
        hasil:"lose",
        date: new Date(),
        userId:6
      },{
        player:"gunting",
        bot: "kertas",
        hasil:"win",
        date: new Date(),
        userId:7
      },{
        player:"batu",
        bot: "kertas",
        hasil:"lose",
        date: new Date(),
        userId:7
      }    
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
