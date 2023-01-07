import express from "express";
import { getAllMentors, addMentor } from "../services/mentor.service.js";
const router = express.Router();

router.get("/", async function (request, response) {
  const result = await getAllMentors();
  response.send(result);
});

router.post("/addMentor", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await addMentor(data);
  response.send(result);
});

export default router;
