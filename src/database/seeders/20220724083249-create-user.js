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
   await queryInterface.bulkInsert("user_games", [
    {
      username: "rijal1",
      password: "pass1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      username: "rijal2",
      password: "pass2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      username: "rijal3",
      password: "pass3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      username: "rijal4",
      password: "pass4",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      username: "rijal5",
      password: "pass5",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      username: "rijal6",
      password: "pass6",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      username: "rijal7",
      password: "pass7",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ])
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
