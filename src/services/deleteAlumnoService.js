const AlumnoModel = require("../models/alumnos.model");

constdeleteAlumnoService = async (req) => {
    const { _id } = req.params
    await AlumnoModel.deleteOne({ _id: _id })
};

module.exports = deleteAlumnoService;