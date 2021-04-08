import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    },
    subjects: [String]
});

const Student = mongoose.model('Student', StudentSchema);

export default Student;