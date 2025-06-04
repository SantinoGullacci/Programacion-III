const { Router } = require("express");
const turnosController = require("../controllers/API/turnos.controller.js");
const router = Router();

router.get("/", (req, res) => { //para testear que el sistema GET de turnos funcione sin necesidad
                                //de poner un ID de un paciente
    res.json({ mensaje: "Turnos funcionando correctamente" });
  });
  
router.get("/:idPaciente", turnosController.getByPaciente);

router.delete("/:idTurno", turnosController.deleteTurno);

module.exports = router;