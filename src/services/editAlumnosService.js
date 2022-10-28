const AlumnoModel = require("../models/alumnos.model");

const editAlumnoService = async (req) => {
    const alumno = req.body;
    const  {_id}  = req.params;
    console.log(_id);
    const updateAlumno = await AlumnoModel.findById(_id).exec();
    console.log(updateAlumno);
    if(!updateAlumno)throw new Error("Alumno not found");
    updateAlumno.name = alumno.name;
    updateAlumno.lastName = alumno.lastName;
    updateAlumno.age = alumno.age;
    updateAlumno.specialization = alumno.specialization;
    await updateAlumno.save();
};

module.exports = editAlumnoService;