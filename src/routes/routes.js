const { getAlumno, addAlumno, editAlumno, deleteAlumno, } = require("../controller/alumnosController");
const router = express.Router();
const express = require("express");
const { body } = require("express-validator");
const logMiddlware = require("../utils/middleware/logMiddleware");

router.post("/User", body('name').isLength({ min: 4 }).withMessage("Nombre debe tener mas de tres caracteres"), addAlumno);

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

router.use(requestTime);

router.get("/Alumno", logMiddlware, getAlumno);
router.put("/Alumno/:_id", editAlumno);
router.delete("/ALumno/:_id", deleteAlumno)

module.exports = router;