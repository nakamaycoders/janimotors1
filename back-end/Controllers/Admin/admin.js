const userModel = require('../../Models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const shortid = require('shortid');


exports.registerAdmin = async(req,res) => {
    userModel.findOne({email:req.body.email}).exec(async(err,user)=>{
        if (user) {
            return res.status(400).json({
                message:'Admin Already Registered',
            })
        }
    })
    const {firstName,lastName,email,password} = req.body
    const hash_password = await bcrypt.hash(password, 10);
    const _user = new userModel({
        firstName,lastName,email,hash_password
    });
    _user.save((err,user)=>{
        if (err) {
            return res.status(400).json({
                success:false,
                message:err
            })
        }
        if (user) {
            return res.status(201).json({
                message: 'Admin created successfully',
            })
        }
    });
}

exports.login = (req,res)=>{
    userModel.findOne({email:req.body.email}).exec(async(err,user)=>{
        if (err) {
            return res.status(400).json({err})
        }
        if (user) {
            if (user.authenticate(req.body.password)) {
              const token = jwt.sign(
                { _id: user._id, },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
              );
              const { _id, firstName, lastName, email } = user;
              res.cookie('token',token,{expiresIn:'1d'});
              res.status(200).json({
                token,
                user: { _id, firstName, lastName, email},
              });
            }
            else{
                return res.status(400).json({
                    message:"Invalid Password"
                });
            }
        }
        else{
            return res.status(400).json({
                message:"Something Went Wrong"
            });
        }
    });
}

exports.logout = (req,res) =>{
    res.clearCookie('token');
    res.status(200).json({
        message: 'Signout Successfully'
    })

}

// exports.requireLogin = (req,res,next)=>{
//     const token = req.headers.authorization.split(" ")[1];
//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     req.user= user;
//     next()
// }