"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("designations", [
      {
        name: "CEO",
        max_claim: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Manager",
        max_claim: 7000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Level 1",
        max_claim: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete("designations", null, {});
  },
};
