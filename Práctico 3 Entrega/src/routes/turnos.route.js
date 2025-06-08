const { Router } = require("express");
const turnosWebController = require("../controllers/turnosWeb.controller.js");
const router = Router();

router.get("/", turnosWebController.mostrarTurnos);
router.get("/nuevo", turnosWebController.formularioNuevoTurno);
router.post("/nuevo", turnosWebController.crearTurno);
router.post("/cancelar/:id", turnosWebController.cancelarTurno);

module.exports = router;
