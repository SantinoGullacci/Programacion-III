const { Router } = require("express");
const pacientesWebController = require("../controllers/pacientesWeb.controller.js");

const rutaPacientesWeb = Router();

rutaPacientesWeb.get("/", (req, res) => pacientesWebController.mostrarPacientes(req, res));
rutaPacientesWeb.post("/eliminar/:id", (req, res) => pacientesWebController.eliminarPaciente(req, res));

module.exports = rutaPacientesWeb;
