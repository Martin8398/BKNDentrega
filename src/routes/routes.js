const { getAlumno, addAlumno, editAlumno, deleteAlumno, } = require("../controller/estudiantesController");
const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
// const logMiddlware = require("../utils/middleware/logMiddleware");




router.post(
    "/User",
    body('name').isString().withMessage("No se permiten caracteres que no sean letras en el campo de nombre"),
    body('lastName').isString().withMessage("No se permiten caracteres que no sean letras en el campo de apellido"),
    body('specialization').contains('Cirujia' || 'Pediatria' || 'Quinesiologia' || 'Cardiologia' || 'Proctologia').withMessage("La especializacion ingresada no corresponde a una dada en nuestro plan de estudios"),
    // async (req, res, next) => {
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() })
    //     }
    //     next(req)
    // },
    addAlumno
);
router.get("/Alumno", getAlumno);
router.put("/Alumno/:_id", editAlumno);
router.delete("/ALumno/:_id", deleteAlumno)

module.exports = router;