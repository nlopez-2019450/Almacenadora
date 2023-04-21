'use strict'

const Tarea = require('../models/tarea.model');

const createTarea = async (req, res) => {
    const {tareaNombre} = req.body;

    try{
        let tarea = await Tarea.findOne({tareaNombre: tareaNombre});
        if(tarea){
            return res.status(400).send({
                message: "Ya existe una tarea con este nombre",
                ok: false,
                tarea: tarea
            });
        }

        tarea = new Tarea(req.body);

        tarea = await tarea.save();

        return res.status(200).send({
            message: "¡La tarea a sido creada correctamente!",
            tarea
        });
    }catch(err){
        throw new Error(err + "Error al crear el Usuario");
    }
}

module.exports = {
    createTarea
}