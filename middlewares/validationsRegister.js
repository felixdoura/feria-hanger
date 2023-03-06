const { body } = require('express-validator');

const validationsRegister = [
  body('firstName').notEmpty().withMessage('El campo nombre es obligatorio'),
  body('email').isEmail().withMessage('El email no es válido'),
  body('password').isLength({ min: 8}).withMessage('El password debe tener como mínimo 8 caracteres')
  ]

  module.exports =validationsRegister;