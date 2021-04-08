import Student from '../models/Student.js';


export const getStudents = async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.status(200).json(allStudents)
    } catch (error) {
        console.log("something went wrong");
        res.status(404).json({
            message: error.message
        })
    }
}
export const createStudent = async (req, res) => {
    const student = new Student(req.body);

    try {
        await student.save(() => console.log("Student saved to DB"))
        res.status(201).json(student);
    } catch (error) {
        console.log("Failed while saving a new student");
        res.status(409).json({
            message: error.message
        })
    }
}
export const deleteStudent = async (req, res) => {
    const id = req.params.id;

    try {
        await Student.findByIdAndDelete(id).exec();
        res.send("Successfuly deleted");
    } catch (error) {
        console.log(error.message);
    }
}