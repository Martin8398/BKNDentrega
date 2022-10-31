const { Schema, model } = require("mongoose");

const AlumnoSchema = new Schema({
    name: { type: String, required: [true, "Por favor coloque un nombre"] },
    lastName: { type: String, required : [true, "Por favor coloque un apellido"] },
    age: { type: Number, required : [true, "Por favor coloque una edad"]},
    specialization: { type: String, enum: ["Cirujia", "Pediatria", "Quinesiologia", "Cardiologia","Proctologia"], require: true },
})

const AlumnoModel = model("Alumnos", AlumnoSchema);

module.exports = AlumnoModel;