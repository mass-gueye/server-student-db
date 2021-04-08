import express from 'express';
import {
    getStudents,
    createStudent,
    deleteStudent
} from '../controllers/student.js';


const studentRouter = express.Router();


studentRouter.get("/", getStudents);
studentRouter.post("/", createStudent);
studentRouter.delete("/:id", deleteStudent);



export default studentRouter;