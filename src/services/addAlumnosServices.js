const axios = require("axios");
const AlumnoModel = require("../models/alumnos.model");

const addAlumnoService = async (req) => {
  
  const alumno = req.body;
  const res = await axios.get("https://api.agify.io/?name="+alumno.name);
  alumno.age=res.data.age;
  const newAlumno = new AlumnoModel(alumno);
  await newAlumno.save();
  return newAlumno;
};

module.exports = addAlumnoService;