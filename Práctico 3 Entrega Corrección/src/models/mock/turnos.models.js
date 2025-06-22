const Turno = require("./../mock/entities/turno.entity.js");

class TurnosModel {
  constructor() {
    this.data = [
      new Turno(1, "2024-06-01", "10:00", "Consulta general"),
      new Turno(1, "2024-06-15", "11:00", "Control"),
      new Turno(2, "2024-06-20", "09:30", "Vacunación"),
    ];
    this.data[0].id = 1;
    this.data[1].id = 2;
    this.data[2].id = 3;
    this.id = 4;
  }

  getTurnosByPaciente(idPaciente) {
    return new Promise((resolve, reject) => {
      try {
        const turnosEncontrados = this.data.filter(
          (turno) => turno.idPaciente == Number(idPaciente)
        );
  
        if (turnosEncontrados.length === 0) {
          throw new Error("No hay turnos para ese paciente");
        }
  
        resolve(turnosEncontrados);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  

  deleteTurno(idTurno) {
    return new Promise((resolve, reject) => {
      try {
        const index = this.data.findIndex((turno) => turno.id == idTurno);
        if (index === -1) throw new Error("Turno no encontrado");
        const turnoEliminado = this.data.splice(index, 1)[0];
        resolve(turnoEliminado);
      } catch (error) {
        reject(error);
      }
    });
  }

  agregarTurno(turno) {
    return new Promise((resolve, reject) => {
      try {
        turno.id = this.id;
        this.id++;
        this.data.push(turno);
        resolve(turno);
      } catch (error) {
        reject(error);
      }
    });
  }

  getTurnos() {
    return new Promise((resolve) => {
      resolve(this.data);
    });
  }

  getTurnoById(idTurno) {
    return new Promise((resolve, reject) => {
      try {
        const turno = this.data.find((t) => t.id == idTurno);
        if (!turno) throw new Error("Turno no encontrado");
        resolve(turno);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = new TurnosModel();
