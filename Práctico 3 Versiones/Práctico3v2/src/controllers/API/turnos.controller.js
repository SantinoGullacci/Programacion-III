const turnosModel = require("../../models/mock/turnos.models.js");

class TurnosController {
  getByPaciente(req, res) {
    const { idPaciente } = req.params;
    const turnos = turnosModel.getTurnosByPaciente(idPaciente);
    res.status(200).json(turnos);
  }
}

module.exports = new TurnosController();