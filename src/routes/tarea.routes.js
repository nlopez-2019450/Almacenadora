'use strict'

const {Router} = require('express');
const { createTarea } = require('../controllers/tarea.controller');
const {check} = require('express-validator');

const api = Router();

api.post('/create_tarea', [check("tareaNombre", "El nombre de la tarea es obligatorio...").not().isEmpty(),
                           check("descripcion", "La descripción de la tarea es obligatorio...").not().isEmpty(),
                           check("fechaInicio", "La decha de inicio de la tarea es obligatorio...").not().isEmpty(),
                           check("fechaCierre", "La fecha de cierre de la tarea es obligatorio...").not().isEmpty(),
                           check("estado", "El estado de la tarea es obligatorio...").not().isEmpty(),
                           check("nombreCompleto", "El nombre completo de la Persona es obligatorio...").not().isEmpty()], 
                           createTarea);

