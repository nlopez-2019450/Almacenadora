"use strict"
var mongoose= require("mongoose")
var Schema = mongoose.Schema;

const tareaSchema = Schema({
    
    tareaNombre:{
        type: String,
        required: true
    },

    descripcion:{
        type: String,
        required: true
    },

    fechaInicio:{
        type: String,
        required: true
    },

    fechaCierre:{
        type: String,
        required: true
    },

    estado:{
        type: String,
        required: true
    },

    nombreCompleto:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Tareas', tareaSchema);