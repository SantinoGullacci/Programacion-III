class TurnosModel {
  constructor() {
    this.data = [
      { id: 1, idPaciente: 1, fecha: "2024-06-01", hora: "10:00", motivo: "Consulta general" },
      { id: 2, idPaciente: 1, fecha: "2024-06-15", hora: "11:00", motivo: "Control" },
      { id: 3, idPaciente: 2, fecha: "2024-06-20", hora: "09:30", motivo: "Vacunación" }
    ];
  }

  getTurnosByPaciente(idPaciente) {
    return this.data.filter(turno => turno.idPaciente == idPaciente);
  }
}

module.exports = new TurnosModel();