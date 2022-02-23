const {check} = require('express-validator');
const {validationResult} = require('express-validator')

exports.registerValidation = [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),
    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    check('email')
    .isEmail()
    .withMessage('valid email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 character long')
];

exports.loginValidation = [
    check('email')
    .isEmail()
    .withMessage('valid email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 character long')
];

exports.isValidated = (req,res,next) =>{
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }
    next();
}
