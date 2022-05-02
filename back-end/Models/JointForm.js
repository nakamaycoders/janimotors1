const mongoose = require('mongoose')

const JointFormSchema = new mongoose.Schema({
    fname:{
          type:String,
        //  ,
    },
    midName:{
          type:String,
        //  ,
    },
    lName:{
          type:String,
        //  ,
    },
    Suffix:{
          type:String,
        //  ,
    },
    homeNum:{
          type:String,
        //  ,
    },
    cellNum:{
          type:String,
        //  ,
    },
    email:{
          type:String,
        //  ,
    },
    Vemail:{
          type:String,
        //  ,
    },
    rr:{
          type:String,
        //  ,
    },
    box:{
          type:String,
        //  ,
    },
    street:{
          type:String,
        //  ,
    },
    StreetName:{
          type:String,
        //  ,
    },
    StreetOptional:{
          type:String,
        //  ,
    },
    apt:{
          type:String,
        //  ,
    },
    zip:{
          type:String,
        //  ,
    },
    city:{
          type:String,
        //  ,
    },
    State:{
          type:String,
        //  ,
    },
    House:{
          type:String,
        //  ,
    },
    Year:{
          type:String,
        //  ,
    },
    Month:{
          type:String,
        //  ,
    },
    Mortgage:{
          type:String,
        //  ,
    },
    Dob:{
          type:String,
        //  ,
    },
    SSN:{
          type:String,
        //  ,
    },
    CoApplicantRelation:{
          type:String,
          
        //  ,
    },
    SelectHousingStatus: {
          type:String,
          
        //  ,
    },
    Employer: {
          type:String,
          
        //  ,
    },
    WorkTitle: {
          type:String,
          
        //  ,
    },
    WorkPhone: {
          type:String,
          
        //  ,
    },
    yearss: {
          type:String,
          
        //  ,
    },
    monthss:{
          type:String,
          
        //  ,
    },
    SelfWorkPhone: {
          type:String,
          
        //  ,
    },
    Selfyear: {
          type:String,
          
        //  ,
    },
    Selfmonths: {
          type:String,
          
        //  ,
    },
    EmpStatus: {
          type:String,
          
        //  ,
    },
    PerYear: {
          type:String,
          
        //  ,
    },
    Cofname:{
          type:String,
          
        //  ,
    },
    CoMidName:{
          type:String,
          
        //  ,
    },
    ColName:{
          type:String,
          
        //  ,
    },
    CoSuffix:{
          type:String,
          
        //  ,
    },
    CocellNum:{
          type:String,
          
        //  ,
    },
    CohomeNum:{
          type:String,
          
        //  ,
    },
    Coemail:{
          type:String,
          
        //  ,
    },
    CoVemail:{
          type:String,
          
        //  ,
    },

    Corelease:{
          type:String,
          
        //  ,
    },
    Corr:{
          type:String,
          
        //  ,
    },
    Cobox:{
          type:String,
          
        //  ,
    },
    Costreet:{
          type:String,
          
        //  ,
    },
    CoStreetName:{
          type:String,
          
        //  ,
    },
    CoStreetOptional:{
          type:String,
          
        //  ,
    },
    Coapt:{
          type:String,
          
        //  ,
    },
    Cozip:{
          type:String,
          
        //  ,
    },
    Cocity:{
          type:String,
          
        //  ,
    },
    CoState:{
          type:String,
          
        //  ,
    },
    Corelease2:{
          type:String,
          
        //  ,
    },
    CoHouse:{
          type:String,
          
        //  ,
    },
    CoYear:{
          type:String,
          
        //  ,
    },
    CoMonth:{
          type:String,
          
        //  ,
    },
    CoMortgage:{
          type:String,
          
        //  ,
    },
    Codob:{
          type:String,
          
        //  ,
    },
    CoSSN:{
          type:String,
          
        //  ,
    },


    CoSelectHousingStatus:{
          type:String,
          
        //  ,
    },
    CoEmployer:{
          type:String,
          
        //  ,
    },
    CoWorkTitle:{
          type:String,
          
        //  ,
    },
    CoWorkPhone:{
          type:String,
          
        //  ,
    },
    Coyearss:{
          type:String,
          
        //  ,
    },
    Comonthss:{
          type:String,
          
        //  ,
    },
    CoSelfWorkPhone:{
          type:String,
          
        //  ,
    },
    CoSelfyear:{
          type:String,
          
        //  ,
    },
    CoSelfemployer:{
          type:String,
          
        //  ,
    },
    CoSelfmonths:{
          type:String,
          
        //  ,
    },
    CoEmpStatus:{
          type:String,
          
        //  ,
    },
    CoPerYear:{
          type:String,
          
        //  ,
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
