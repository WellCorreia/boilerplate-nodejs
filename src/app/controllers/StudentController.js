const StudentService = require('../service/StudentService')
const ErrorService = require('../service/ErrorService')

const HTTP = require('../../constants/http')

class StudentController {
    /**
     * Method create student
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async store(req, res, next) {
        try {
            const { body } = req;
            const response = await StudentService.store(body);

            if (response.status !== HTTP.CREATED) {
                const e = new ErrorService(req, response);
                return next(e.get());
            }

            return res
                .status(HTTP.CREATED)
                .json({ student: response.student, message: response.describe, status: response.status });
        } catch (err) {
            return next(err);
        }
    }

    /**
     * Method update
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { body } = req;

            const response = await StudentService.update({ ...body, id });

            if (response.status !== HTTP.OK) {
                const e = new ErrorService(req, response);
                return next(e.get());
            }

            return res
                .status(HTTP.OK)
                .json({ student: response.student, message: response.describe, status: response.status });
        } catch (err) {
            return next(err);
        }
    }

    /**
     * Method to remove a student
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async destroy(req, res, next) {
        try {
            const { id } = req.params;

            const response = await StudentService.destroy(id);

            if (response.status !== HTTP.OK) {
                const e = new ErrorService(req, response);
                return next(e.get());
            }

            return res.status(response.status).json({ message: response.describe, status: response.status });
        } catch (err) {
            return next(err);
        }
    }
    /**
     * Method to find a student
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async get(req, res, next) {
        try {
            const { id } = req.params;

            const response = await StudentService.get(id);

            if (response.status !== HTTP.OK) {
                const e = new ErrorService(req, response);
                return next(e.get());
            }

            return res
                .status(HTTP.OK)
                .json({ student: response.student, message: response.menssage, status: response.status });
        } catch (err) {
            return next(err);
        }
    }

    /**
     * Method to return all students
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async index(req, res, next) {
        try {
            const response = await StudentService.getAll();

            if (response.status !== HTTP.OK) {
                const e = new ErrorService(req, response);
                return next(e.get());
            }

            return res
                .status(HTTP.OK)
                .json({ student: response.student, message: response.menssage, status: response.status });
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = new StudentController();
