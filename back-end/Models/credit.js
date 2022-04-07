const mongoose = require('mongoose')

const creditSchema = new mongoose.Schema({
    fName: {
        type:String,
        required:true,
        trim:true
    },
    lName: {
        type:String,
        required:true,
        trim:true
    },
    mName: {
        type:String,
        required:true,
        trim:true
    },
    Suffix: {
        type:String,
        trim:true
    },
    homeNum: {
        type:String,
        required:true,
        trim:true
    },
    cellNum: {
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    Vemail:{
        type:String,
        required:true,
        trim:true
    },
    rr:{
        type:String,
        // required:true,
        trim:true
    },
    box:{
        type:String,
        // required:true,
        trim:true
    },
    street:{
        type:String,
        required:true,
        trim:true
    },
    StreetName:{
        type:String,
        required:true,
        trim:true
    },
    StreetOptional:{
        type:String,
        trim:true
    },
    apt:{
        type:String,
        required:true,
        trim:true
    },
    zip:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    State:{
        type:String,
        required:true,
        trim:true
    },
    House:{
        type:String,
        required:true,
        trim:true
    },
    Year:{
        type:String,
        required:true,
        trim:true
    },
    Month:{
        type:String,
        required:true,
        trim:true
    },
    Mortgage:{
        type:String,
        required:true,
        trim:true
    },
    Dob:{
        type:String,
        required:true,
        trim:true
    },
    SSN:{
        type:String,
        required:true,
        trim:true
    },
    SelectHousingStatus: {
        type:String,
        required:true,
        trim:true
    },
    Employer: {
        type:String,
        required:true,
        trim:true
    },
    WorkTitle: {
        type:String,
        required:true,
        trim:true
    },
    WorkPhone: {
        type:String,
        required:true,
        trim:true
    },
    yearss: {
        type:String,
        required:true,
        trim:true
    },
    monthss:{
        type:String,
        required:true,
        trim:true
    },
    SelfWorkPhone: {
        type:String,
        // required:true,
        trim:true
    },
    Selfyear: {
        type:String,
        // required:true,
        trim:true
    },
    Selfmonths: {
        type:String,
        // required:true,
        trim:true
    },
    EmpStatus: {
        type:String,
        required:true,
        trim:true
    },
    PerYear: {
        type:String,
        required:true,
        trim:true
    },
},{timestamps:true})

module.exports = mongoose.model("credit", creditSchema);
// type:String,
//         required: true,
//         trim:true