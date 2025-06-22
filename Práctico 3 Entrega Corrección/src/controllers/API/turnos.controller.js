const turnosModel = require("../../models/mock/turnos.models.js");

class TurnosController {
  getByPaciente = async (req, res) => {
    try {
      const turnos = await turnosModel.getTurnosByPaciente(req.params.idPaciente);
      res.status(200).json(turnos);
    } catch (error) {
      res.status(404).send(error.message);
    }
  };
  

  deleteTurno(req, res) {
    const { idTurno } = req.params;
    const eliminado = turnosModel.deleteTurno(idTurno);
    
    if (eliminado) {
      res.status(200).json({ mensaje: `Turno con el id: ${idTurno} cancelado correctamente.` });
    } else {
      res.status(404).json({ error: `No se encontró el turno con el id: ${idTurno}.` });
    }
  }

   mostrarTurnos(req, res) {
     const turnos = turnosModel.getTurnos();
   res.render("turnos", { turnos });
  }

  formularioNuevoTurno(req, res) {
    res.render("nuevo-turno");
  }

  crearTurno(req, res) {
    const { idPaciente, fecha, hora, motivo } = req.body;
    turnosModel.agregarTurno({ idPaciente, fecha, hora, motivo });
    res.redirect("/turnos");
  }

}

module.exports = new TurnosController();