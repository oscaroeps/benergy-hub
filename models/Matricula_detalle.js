var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Matricula_detalleSchema = Schema({

    cliente: { type: Schema.ObjectId, ref: 'cliente', required: false },
    asesor: { type: Schema.ObjectId, ref: 'colaborador', required: false },
    matricula: { type: Schema.ObjectId, ref: 'matricula', required: false },
    ciclo_curso: { type: Schema.ObjectId, ref: 'ciclo_curso', required: false },
    ciclo_salon: { type: Schema.ObjectId, ref: 'ciclo_salon', required: false },
    curso: { type: Schema.ObjectId, ref: 'curso', required: false },
    tipo_inscripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    f_inicio: { type: String, required: true },
    f_fin: { type: String, required: true },
    dia: { type: String, required: true },
    mes: { type: String, required: true },
    year: { type: String, required: true },
    nclases: { type: Number, required: false },
    estado: { type: String, required: true },

    descuento_tipo: { type: String, required: true },
    descuento_valor: { type: Number, required: true },

    createdAt: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model('matricula_detalle', Matricula_detalleSchema)