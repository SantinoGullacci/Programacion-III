const turnosModel = require("../models/mock/turnos.models.js");

class TurnosWebController {
  async mostrarTurnos(req, res) {
    try {
      const turnos = await turnosModel.getTurnos();
      res.render("turnos", { turnos });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  formularioNuevoTurno(req, res) {
    res.render("nuevo-turno");
  }

  async crearTurno(req, res) {
    try {
      const { idPaciente, fecha, hora, motivo } = req.body;
      await turnosModel.agregarTurno({ idPaciente, fecha, hora, motivo });
      res.redirect("/turnos");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async cancelarTurno(req, res) {
    try {
      const { id } = req.params;
      await turnosModel.deleteTurno(id);
      res.redirect("/turnos");
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
}

module.exports = new TurnosWebController();