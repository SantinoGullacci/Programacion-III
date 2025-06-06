const pacientesModel = require("./../models/mock/pacientes.models.js");

class PacientesWebController {
  async mostrarPacientes(req, res) {
    const pacientes = await pacientesModel.list();
    res.render("pacientes", { pacientes });
  }

  async eliminarPaciente(req, res) {
    const id = req.params.id;
    try {
      await pacientesModel.delete(id);
      res.redirect("/pacientes");
    } catch (error) {
      res.status(404).send("Paciente no encontrado");
    }
  }
}

module.exports = new PacientesWebController();
