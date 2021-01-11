module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(
        'Student',
        {
            academic_register: DataTypes.STRING,
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
        },
    );

    return Student;
}