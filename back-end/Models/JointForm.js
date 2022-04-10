const mongoose = require('mongoose')

const JointFormSchema = new mongoose.Schema({
    fname:{
          type:String,
        unique:true,
    },
    midName:{
          type:String,
        unique:true,
    },
    lName:{
          type:String,
        unique:true,
    },
    Suffix:{
          type:String,
        unique:true,
    },
    homeNum:{
          type:String,
        unique:true,
    },
    cellNum:{
          type:String,
        unique:true,
    },
    email:{
          type:String,
        unique:true,
    },
    Vemail:{
          type:String,
        unique:true,
    },
    rr:{
          type:String,
        unique:true,
    },
    box:{
          type:String,
        unique:true,
    },
    street:{
          type:String,
        unique:true,
    },
    StreetName:{
          type:String,
        unique:true,
    },
    StreetOptional:{
          type:String,
        unique:true,
    },
    apt:{
          type:String,
        unique:true,
    },
    zip:{
          type:String,
        unique:true,
    },
    city:{
          type:String,
        unique:true,
    },
    State:{
          type:String,
        unique:true,
    },
    House:{
          type:String,
        unique:true,
    },
    Year:{
          type:String,
        unique:true,
    },
    Month:{
          type:String,
        unique:true,
    },
    Mortgage:{
          type:String,
        unique:true,
    },
    Dob:{
          type:String,
        unique:true,
    },
    SSN:{
          type:String,
        unique:true,
    },
    CoApplicantRelation:{
          type:String,
          
        unique:true,
    },
    SelectHousingStatus: {
          type:String,
          
        unique:true,
    },
    Employer: {
          type:String,
          
        unique:true,
    },
    WorkTitle: {
          type:String,
          
        unique:true,
    },
    WorkPhone: {
          type:String,
          
        unique:true,
    },
    yearss: {
          type:String,
          
        unique:true,
    },
    monthss:{
          type:String,
          
        unique:true,
    },
    SelfWorkPhone: {
          type:String,
          
        unique:true,
    },
    Selfyear: {
          type:String,
          
        unique:true,
    },
    Selfmonths: {
          type:String,
          
        unique:true,
    },
    EmpStatus: {
          type:String,
          
        unique:true,
    },
    PerYear: {
          type:String,
          
        unique:true,
    },
    Cofname:{
          type:String,
          
        unique:true,
    },
    CoMidName:{
          type:String,
          
        unique:true,
    },
    ColName:{
          type:String,
          
        unique:true,
    },
    CoSuffix:{
          type:String,
          
        unique:true,
    },
    CocellNum:{
          type:String,
          
        unique:true,
    },
    CohomeNum:{
          type:String,
          
        unique:true,
    },
    Coemail:{
          type:String,
          
        unique:true,
    },
    CoVemail:{
          type:String,
          
        unique:true,
    },

    Corelease:{
          type:String,
          
        unique:true,
    },
    Corr:{
          type:String,
          
        unique:true,
    },
    Cobox:{
          type:String,
          
        unique:true,
    },
    Costreet:{
          type:String,
          
        unique:true,
    },
    CoStreetName:{
          type:String,
          
        unique:true,
    },
    CoStreetOptional:{
          type:String,
          
        unique:true,
    },
    Coapt:{
          type:String,
          
        unique:true,
    },
    Cozip:{
          type:String,
          
        unique:true,
    },
    Cocity:{
          type:String,
          
        unique:true,
    },
    CoState:{
          type:String,
          
        unique:true,
    },
    Corelease2:{
          type:String,
          
        unique:true,
    },
    CoHouse:{
          type:String,
          
        unique:true,
    },
    CoYear:{
          type:String,
          
        unique:true,
    },
    CoMonth:{
          type:String,
          
        unique:true,
    },
    CoMortgage:{
          type:String,
          
        unique:true,
    },
    Codob:{
          type:String,
          
        unique:true,
    },
    CoSSN:{
          type:String,
          
        unique:true,
    },


    CoSelectHousingStatus:{
          type:String,
          
        unique:true,
    },
    CoEmployer:{
          type:String,
          
        unique:true,
    },
    CoWorkTitle:{
          type:String,
          
        unique:true,
    },
    CoWorkPhone:{
          type:String,
          
        unique:true,
    },
    Coyearss:{
          type:String,
          
        unique:true,
    },
    Comonthss:{
          type:String,
          
        unique:true,
    },
    CoSelfWorkPhone:{
          type:String,
          
        unique:true,
    },
    CoSelfyear:{
          type:String,
          
        unique:true,
    },
    CoSelfemployer:{
          type:String,
          
        unique:true,
    },
    CoSelfmonths:{
          type:String,
          
        unique:true,
    },
    CoEmpStatus:{
          type:String,
          
        unique:true,
    },
    CoPerYear:{
          type:String,
          
        unique:true,
    },

    view:{
        type: String,
        default: "unread",
        trim: true
    }

},{timestamps:true})

module.exports = mongoose.model("JointForm", JointFormSchema);
// {
//     type:String,
//       
//     trim:true
// },
