const Joi=require('joi');

const pacienteSchema={
    create: Joi.object({
        dni: Joi.string().pattern(/^\d+$/).required().min(8).messages({
            'string.pattern.base':'DNI debe contener solo números y tener al menos 8 dígitos.'
        }),
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    }),

    update: Joi.object({
        dni: Joi.string().pattern(/^\d+$/).required().min(8),
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    }),

    login: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    }),

    get: Joi.object({
        campo: Joi.string().valid('id','dni','nombre','apellido').required(),
        valor: Joi.alternatives()
            .conditional('campo',[
                {is:'id',then: Joi.number().integer().positive().required()},
                {is: 'dni',then: Joi.string().pattern(/^\d+$/).required().min(8)},
                {is: 'nombre', then: Joi.string().required()},
                {is: 'apellido',then: Joi.string().required()}
            ])
    }),

    delete: Joi.object({
        id: Joi.number().integer().positive().required()
    })
}
module.exports=pacienteSchema;