const { body } = require('express-validator');

exports.registerValidator = [
  body('name')
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 characters long')
    .trim(),
  body('email')
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email')
    .normalizeEmail(),
  body('password')
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Must be at least 6 characters long')
    .matches(/\d/)
    .withMessage('Must have at least one number'),
];

exports.loginValidator = [
  body('email')
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email')
    .normalizeEmail(),
  body('password').not().isEmpty().withMessage('Password is required'),
];
