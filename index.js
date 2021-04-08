import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import studentRouter from './routes/student.js';


dotenv.config();



const app = express();
const port = process.env.PORT || 8000;

const uri = process.env.URI;

// DB and App Connection
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`)
        })
        console.log("DB Connected")
    })
    .catch(err => console.log("DB connection failed", err.message))
// DB Connection End


// DB Config
mongoose.set('useFindAndModify', false);

// Using Middlewares
app.use(bodyParser.json({
    limit: "20mb",
    extended: true
}));
app.use(bodyParser.urlencoded({
    limit: "20mb",
    extended: true
}));

app.use(cors());

app.use("/students", studentRouter)

// End Of Middlewares