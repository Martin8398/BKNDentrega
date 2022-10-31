const AlumnoModel = require("../models/alumnos.model");

const deleteAlumnoService = async (req) => {
    const { _id } = req.params
    await AlumnoModel.deleteOne({ _id: _id })
};

module.exports = deleteAlumnoService;