const { Student } = require('../models');
const Response = require('../../constants/response');
const StudentRepository = require('../repositories/student');

class StudentService {
  constructor() {
    this.student = Student;
  }

  /**
   * Method responsible for saving a student
   * @param {*} body 
   */
  async store(body) {
    
    const student = await StudentRepository.findStudent(body.cpf, body.email, body.academic_register);

    if (!student) {
      return {
        student: await StudentRepository.create(body),
        ...Response.created,
      }
    }

    return Response.found;
  }

  /**
   * Method responsible for receiving a student object and changing the record
   * @param {*} body 
   */
  async update(body) {
    const student = await StudentRepository.find(body.id);

    if (!student) {
      return Response.notFound;
    }

    const studentAtt = await StudentRepository.update(body);

    return {
      student: studentAtt,
      ...Response.ok,
    };
  }

  /**
   * Method responsible for returning a student
   * @param {*} id 
   */
  async get(id) {
    const student = await StudentRepository.find(id);

    if (!student) {
      return Response.notFound;
    }

    return {
      student,
      ...Response.ok,
    }
  }

  /**
   * Method responsible for returning all students
   */
  async getAll() {
    const student = await StudentRepository.getAll();

    if (!student) {
      return Response.notFound;
    }

    return {
      student,
      ...Response.ok,
    }
  }

  /**
   * Method responsible for remove a student
   * @param {*} id 
   */
  async destroy(id) {
    const student = await StudentRepository.find(id)

    if (!student) {
      return Response.notFound;
    }

    await StudentRepository.destroy(student);

    return Response.deleted;
  }
}

module.exports = new StudentService();
