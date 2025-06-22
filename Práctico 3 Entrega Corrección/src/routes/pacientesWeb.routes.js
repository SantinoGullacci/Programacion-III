const { Router } = require("express");
const pacientesWebController = require("../controllers/pacientesWeb.controller.js");
const router=Router();

const rutaPacientesWeb = Router();

//rutaPacientesWeb.get("/", (req, res) => pacientesWebController.mostrarPacientes(req, res));
router.get("/",pacientesWebController.mostrarPacientes);
//rutaPacientesWeb.post("/eliminar/:id", (req, res) => pacientesWebController.eliminarPaciente(req, res));
router.post("/eliminar/:id",pacientesWebController.eliminarPaciente);

module.exports = router;
