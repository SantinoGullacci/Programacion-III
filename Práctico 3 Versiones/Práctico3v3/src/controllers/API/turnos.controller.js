const turnosModel = require("../../models/mock/turnos.models.js");

class TurnosController {
  getByPaciente(req, res) {
    const { idPaciente } = req.params;
    const turnos = turnosModel.getTurnosByPaciente(idPaciente);
    res.status(200).json(turnos);
  }

  deleteTurno(req, res) {
    const { idTurno } = req.params;
    const eliminado = turnosModel.deleteTurno(idTurno);
    
    if (eliminado) {
      res.status(200).json({ mensaje: `Turno con el id: ${idTurno} cancelado correctamente.` });
    } else {
      res.status(404).json({ error: `No se encontró el turno con el id: ${idTurno}.` });
    }
  }
}

module.exports = new TurnosController();