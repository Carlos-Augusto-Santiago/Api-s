const express = require("express");
const app = express();

// los archivos van a ser de tipo json
app.use(express.json());

const students = [
    { id: 1, name: "Jorge", age: 20, enroll: true },
    { id: 2, name: "Antonio", age: 30, enroll: false },
    { id: 3, name: "Mariana", age: 25, enroll: false },
];

// request que va a tener la api
// en home
app.get("/", (req, res) => {
    res.send("Node JS api");
});

// students
app.get("/api/students", (req, res) => {
    res.send(students);
});

// 1 student by id
app.get("/api/students/:id", (req, res) => {
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Estudiante no encontrado");
    else res.send(student);
});

// method post
// add student
app.post("/api/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: req.body.enroll === "true",
    };
    students.push(student);
    res.send(student);
});

// delete student
app.delete("api/student/:id", (req, res) => {
    const student = student.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Estudiante no encontrado");
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);
});

// port to listen
const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
