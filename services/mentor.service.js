import { client } from "../studentMentor.js";

export async function getAllMentors() {
  return await client
    .db("studentMentorTask")
    .collection("mentor")
    .find({})
    .toArray();
}
export async function addMentor(data) {
  return await client
    .db("studentMentorTask")
    .collection("mentor")
    .insertOne(data);
}
