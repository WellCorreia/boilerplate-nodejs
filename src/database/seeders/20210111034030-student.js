'use strict';
const faker = require('faker');
const generateCpf = require('gerar-cpf');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('students', [{
      cpf: generateCpf(),
      name: await faker.name.findName(),
      email: await faker.internet.email(),
      academic_register: Math.floor(Math.random() * 999999) + 111111,
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('students', null, {});
  }
};
