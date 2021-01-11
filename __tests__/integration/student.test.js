const faker = require('faker')
const request = require('supertest')
const generateCpf = require('gerar-cpf');

const app = require('../../src/app')
const factory = require('../../src/utils/factories')
const HTTP = require('../../src/constants/http')

describe('Student > StudentController.js', () => {
  describe('Store', () => {
    it('Student registered with success', async () => {
      const response = await request(app)
        .post('/api/student')
        .send({
          academic_register: generateCpf(),
          name: faker.name.findName(),
          email: faker.internet.email(),
          cpf: generateCpf(),
        })

      expect(response.status).toBe(HTTP.CREATED);
    })

    it('Already exist a student with CPF', async () => {
      const student = await factory.create('Student', {
        cpf: generateCpf(),
      });
      const response = await request(app)
        .post('/api/student')
        .send({
          academic_register: generateCpf(),
          name: faker.name.findName(),
          email: faker.internet.email(),
          cpf: student.cpf,
        });

      expect(response.status).toBe(HTTP.BAD_REQUEST);
    })

    it('Already exist a student with Academic Record', async () => {
      const student = await factory.create('Student', {
        academic_register: generateCpf(),
        cpf: generateCpf(),
      });
      const response = await request(app)
        .post('/api/student')
        .send({
          academic_register: student.academic_register,
          name: faker.name.findName(),
          email: faker.internet.email(),
          cpf: generateCpf(),
        });

      expect(response.status).toBe(HTTP.BAD_REQUEST);
    })
  })

  describe('Update', () => {
    it('Student updated with success', async () => {
      const student = await factory.create('Student', {
        cpf: generateCpf(),
      });

      const response = await request(app)
        .put(`/api/student/${student.id}`)
        .send({
          name: faker.name.findName(),
          cpf: generateCpf(),
        });

      expect(response.status).toBe(HTTP.OK);
    })

    it('No student found', async () => {
      const response = await request(app)
        .put('/api/student/4000000')
        .send({
          name: faker.name.findName(),
          cpf: generateCpf(),
        });

      expect(response.status).toBe(HTTP.BAD_REQUEST);
    })
  })
  
  describe('Get All', () => {
    it('Students successfully found', async () => {

      const response = await request(app).get(`/api/student`);

      expect(response.status).toBe(HTTP.OK);
    })
  })

  describe('Get', () => {
    it('Student successfully found', async () => {
      const student = await factory.create('Student', {
        // academic_register: '657498',
        cpf: generateCpf(),
      });

      const response = await request(app).get(`/api/student/${student.id}`);

      expect(response.status).toBe(HTTP.OK);
    })

    it('No student found', async () => {
      const response = await request(app).get('/api/student/4000000');

      expect(response.status).toBe(HTTP.BAD_REQUEST);
    })
  })

  describe('Destroy', () => {
    it('Student deleted with success', async () => {
      const student = await factory.create('Student', {
        cpf: generateCpf(),
      });

      const response = await request(app).delete(`/api/student/${student.id}`);

      expect(response.status).toBe(HTTP.OK);
    })

    it('No student found', async () => {
      const response = await request(app).delete('/api/student/0');

      expect(response.status).toBe(HTTP.BAD_REQUEST);
    })
  })
})
