const AlumnoModel = require("../models/alumnos.model")

const obtenerAlumnoService = async () => {
    console.log("Buscando datos del alumno, Aguarde por favor");
    const alumnos = await AlumnoModel.find();
    console.log("Datos del alumno obtenido " + alumnos)
    return alumnos;

}

module.exports = obtenerAlumnoService;