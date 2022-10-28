const ediAlumnoService = require("../services/editAlumnosService");
const addAlumnoService = require("../services/addAlumnosService");
const deleteAlumnoService = require("../services/deleteAlumnoService");
const getAlumnosService= require("../services/getAlumnosService" );

const addAlumno = async (req, res, next) => {
const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
    try {
        await addAlumnoService(req);
        res.json({message: "El alumno ha sido agregado con exito :D"})
    } catch (error) {
        const msg = error.message
        res.json({message: "Ha ocurrido un error " + msg})
        next(error.message);
    }
}

const getAlumno = async (req, res, next) => {

    try {
        const Alumnos = await getAlumnosService();
        res.json({Alumnos})
    } catch (error) {
        next(error)
    }
}

const editAlumno = async (req, res, next) => {
    try {
        await ediAlumnoService(req);
        res.json({message: 'El alumno ha sido modificado con exito :D'})
    } catch (error) {
        next(error)
    }
}

const deleteAlumno = async (req, res, next) => {
    try {
        await deleteAlumnoService(req);
        res.json({message: "El alumno ha sido eliminado con exito"})
    } catch (error) {
        next(error);
    }
}

module.exports = {addAlumno, getAlumno, editAlumno, deleteAlumno};