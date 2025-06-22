const turnosModel = require("../models/mock/turnos.models.js");

class TurnosController {
  mostrarTurnos = async (req, res) => {
    try {
      const turnos = await turnosModel.getTurnos();
      res.render("turnos", { turnos });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  

  formularioNuevoTurno(req, res) {
    res.render("nuevo-turno");
  }

  crearTurno(req, res) {
    const { idPaciente, fecha, hora, motivo } = req.body;
    turnosModel.agregarTurno({ idPaciente, fecha, hora, motivo });
    res.redirect("/turnos");
  }

  cancelarTurno(req, res) {
    const { id } = req.params;
    const eliminado = turnosModel.deleteTurno(id);
  
    if (eliminado) {
      res.redirect("/turnos");
    } else {
      res.status(404).send("Turno no encontrado");
    }
  }

}  

module.exports = new TurnosController();
