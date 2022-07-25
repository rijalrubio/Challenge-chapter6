"use strict";

const { time } = require("console");
const { DATEONLY } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
     await queryInterface.bulkInsert("user_game_biodata", [
      {
        nama: "Rijal 1",
        gender: "Laki-laki",
        alamat: "Perumahan A",
        rank: "Junior",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId:1
      },{
        nama: "Rijal 2",
        gender: "Laki-laki",
        alamat: "Perumahan B",
        rank: "Senior",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId:2
      },{
        nama: "Rijal 3",
        gender: "Laki-laki",
        alamat: "Perumahan C",
        rank: "Profesional",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId:3
      },{
        nama: "Rijal 4",
        gender: "Laki-laki",
        alamat: "Perumahan D",
        rank: "Junior",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId:4
      },{
        nama: "Rijal 5",
        gender: "Laki-laki",
        alamat: "Perumahan E",
        rank: "Senior",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId:5
      },{
        nama: "Rijal 6",
        gender: "Laki-laki",
        alamat: "Perumahan F",
        rank: "Proffesional",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId:6
      },{
        nama: "Rijal 7",
        gender: "Laki-laki",
        alamat: "Perumahan G",
        rank: "Legenda",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId:7
      }        
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
