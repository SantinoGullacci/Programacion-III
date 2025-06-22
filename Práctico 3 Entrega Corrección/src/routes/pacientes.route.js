const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const pacienteSchema=require('../schemas/paciente.schema.js')
const {validate}=require("../middlewares/validate.js")


const rutaPacientes = Router();
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);

rutaPacientes.get('/:campo/:valor',verifyTokenMiddleware,validate(pacienteSchema.get, 'params'),pacientesController.list)
rutaPacientes.post('/login',validate(pacienteSchema.login),pacientesController.login)
rutaPacientes.post('/',verifyTokenMiddleware,validate(pacienteSchema.create, 'params'),pacientesController.create);




rutaPacientes.put('/:id',verifyTokenMiddleware,validate(pacienteSchema.update),pacientesController.update);
rutaPacientes.delete('/:id',verifyTokenMiddleware,validate(pacienteSchema.delete),pacientesController.delete);

//Otras rutas CRUD



module.exports = rutaPacientes;