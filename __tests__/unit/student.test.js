const factory = require('../../src/utils/factories')
const truncate = require('../../src/utils/truncate')
const StudentRepository = require('../../src/app/repositories/student');

describe('Unit > Student', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('student created', async () => {
    const newStudent = await factory.create('Student');
    const student = await StudentRepository.findStudent(newStudent.cpf, newStudent.email, newStudent.academic_register);
    const exist = (typeof student === 'object' && student !== null);
    expect(exist).toBe(true)
  })

  it('student not created', async () => {
    const student = await StudentRepository.findStudent('32154679845', 'test@test.test', '996633');
    const exist = (typeof student === 'object' && student !== null);
    expect(exist).toBe(false)
  })
})
