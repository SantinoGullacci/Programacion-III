const { Router } = require("express");
const turnosController = require("../controllers/API/turnos.controller.js");
const router = Router();

router.get("/:idPaciente", turnosController.getByPaciente);

module.exports = router;