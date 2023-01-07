import express from "express";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";
import studentRouter from "./routes/student.route.js";
import mentorRouter from "./routes/mentor.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("app started in port", PORT));

//connect mongo
const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL);
client.connect();
console.log("mongo connected");

app.use(express.json());
app.get("/", async function (request, response) {
  response.send(
    "/students to view all students **  /mentors to view all mentors ** /students/addStudent to add new student ** /students/assignMentor/ to assign a mentor to a student ** /students/assignMentorToMany/ ** /mentors/addMentor ** /students/studentsWithoutMentor ** /students/studentsOfMentor/63b82cbfda9693e9870cd338 "
  );
});
app.use("/students", studentRouter);
app.use("/mentors", mentorRouter);
