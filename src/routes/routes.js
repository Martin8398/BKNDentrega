const { getAlumno, addAlumno, editAlumno, deleteAlumno, } = require("../controller/estudiantesController");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const logMiddlware = require("../utils/middleware/logMiddleware");
const { exists } = require("../models/alumnos.model");




router.post(
    "/Alumno",
    body("name","Por favor ingrese un nombre").exists(),
    body("name","Tipo de dato incorrecto").isString(),
    body("lastName","Por favor ingrese un apellido").exists(),
    body("lastName","Tipo de dato incorrecto").isString(),
    body("age","Por favor ingrese una edad").exists,
    body("age","Por favor ingrese un valor numerico").isNumeric(),
    body("specialization","por favor ingrese una carrera").exists(),
    body("specialization","Tipo de dato incorrecto").isString(),

    // async (req, res, next) => {
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() })
    //     }
    //     next()
    // },
    addAlumno
);

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

router.use(requestTime);

router.get("/Alumno", logMiddlware, getAlumno);
router.put("/Alumno/:_id", editAlumno);
router.delete("/Alumno/:_id", deleteAlumno)

module.exports = router;