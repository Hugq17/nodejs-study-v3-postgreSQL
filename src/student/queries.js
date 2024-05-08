const getStudents = "select * from students"
const getStudentById = "select * from students where id = $1"

module.exports = {
    getStudents,
    getStudentById
}