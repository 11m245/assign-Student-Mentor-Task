import { client } from "../studentMentor.js";

export async function getAllStudents() {
  return await client
    .db("studentMentorTask")
    .collection("student")
    .find({})
    .toArray();
}
export async function addStudent(data) {
  return await client
    .db("studentMentorTask")
    .collection("student")
    .insertOne(data);
}

export async function assignMentor(data) {
  console.log(data);
  return await client
    .db("studentMentorTask")
    .collection("student")
    .updateOne({ _id: data.studentId }, { $set: { mentorId: data.mentorId } });
}
export async function assignMentorToMany(data) {
  const { studentIds, mentorId } = data;
  return await client
    .db("studentMentorTask")
    .collection("student")
    .updateMany({ _id: { $in: studentIds } }, { $set: { mentorId: mentorId } });
}

export async function getStudentsOfMentor(mentorId) {
  return await client
    .db("studentMentorTask")
    .collection("student")
    .find({ mentorId: mentorId })
    .toArray();
}

export async function getStudentsWithoutMentor() {
  return await client
    .db("studentMentorTask")
    .collection("student")
    .find({ mentorId: null })
    .toArray();
}
