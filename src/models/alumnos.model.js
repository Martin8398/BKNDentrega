const { Schema, model } = require("mongoose");

const AlumnoSchema = new Schema({
    name: { type: String, required: [true, "No puede no tener un nombre"] },
    lastName: { type: String, required },
    age: { type: Number, required },
    id: { type: Number, require: true, unique: true },
    specialization: { type: String, enum: ["Cirujia", "Pediatria", "Quinesiologia", "Cardiologia","Proctologia"], require: true }
});

const AlumnoModel = model("Alumnos", AlumnoSchema);

module.exports = UsuarioModel;