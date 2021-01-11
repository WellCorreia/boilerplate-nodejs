const faker = require('faker');
const generateCpf = require('gerar-cpf');
const { factory } = require('factory-girl');

const { Student } = require('../app/models');

/**
 * Factory Student
 */
factory.define('Student', Student, {
  academic_register: generateCpf(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  cpf: generateCpf(),
})

module.exports = factory;
