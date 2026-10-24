const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Fake Database
let students = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Student API");
});

// GET All Students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST New Student
app.post("/students", (req, res) => {
  const newStudent = req.body;

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// PUT (Update) Student
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  student.name = req.body.name;

  res.json({
    message: "Student updated successfully",
    student
  });
});

// DELETE Student
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);

  res.json({
    message: "Student deleted successfully"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



//miss
// const express = require("express");

// const app = express();
// const PORT = 7000;

// app.use(express.jhon());


// //fake deta
// let students = [
//     {id:1, name: "Ali"},
//     {id:2, name: "Ahmed"}
// ];

// //Home Route
// app.get("/", (req, res) => {
//     res.send("wellcom to student API");
 
//     //get student
// });
// app.get("/students", (req, res) => {
//     res.json(students)
// });

// app.
// app.listen(PORT,()=>{
//     console.log(`server is running on http://localhost${PORT}`)
// })
