"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("departments", [
      {
        name: "Kitchen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Front House",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Server",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete("departments", null, {});
  },
};
