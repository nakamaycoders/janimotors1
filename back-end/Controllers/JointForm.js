const Joint = require("../models/JointForm");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createJointForm = (req, res) => {
  const {
       fname ,
       midName ,
       
  lName ,
  Suffix ,
  homeNum ,
  cellNum ,
  email ,
  Vemail ,
  rr ,
  box ,
  street ,
  StreetName ,
  StreetOptional ,
  apt ,
  zip ,
  city ,
  State ,
  House ,
  Year ,
  Month ,
  Mortgage ,
  Dob ,
  SSN ,
  CoApplicantRelation ,
  SelectHousingStatus,
  Employer,
  WorkTitle,
  WorkPhone,
  yearss,
  monthss ,
  SelfWorkPhone,
  Selfyear,
  Selfmonths,
  EmpStatus,
  PerYear,
//   <..................CO-applicant info.............................>
  Cofname ,
  CoMidName ,
  ColName ,
  CoSuffix ,
  CocellNum ,
  CohomeNum ,
  Coemail ,
  CoVemail ,

//   <...........step2.........>
  Corelease ,
  Corr ,
  Cobox ,
  Costreet ,
  CoStreetName ,
  CoStreetOptional ,
  Coapt ,
  Cozip ,
  Cocity ,
  CoState ,
  Corelease2 ,
  CoHouse ,
  CoYear ,
  CoMonth ,
  CoMortgage ,
  Codob ,
  CoSSN ,


  CoSelectHousingStatus ,
  CoEmployer ,
  CoWorkTitle ,
  CoWorkPhone ,
  Coyearss ,
  Comonthss ,
  CoSelfWorkPhone ,
  CoSelfyear ,
  CoSelfemployer ,
  CoSelfmonths ,
  CoEmpStatus ,
  CoPerYear ,
   view } = req.body;

  const joint = new Joint({
    fname ,
    midName ,
    lName ,
    Suffix ,
    homeNum ,
    cellNum ,
    email ,
    Vemail ,
    rr ,
    box ,
    street ,
    StreetName ,
    StreetOptional ,
    apt ,
    zip ,
    city ,
    State ,
    House ,
    Year ,
    Month ,
    Mortgage ,
    Dob ,
    SSN ,
    CoApplicantRelation ,
    SelectHousingStatus,
    Employer,
    WorkTitle,
    WorkPhone,
    yearss,
    monthss ,
    SelfWorkPhone,
    Selfyear,
    Selfmonths,
    EmpStatus,
    PerYear,
    // <..................CO-applicant info.............................>
    Cofname ,
    CoMidName ,
    ColName ,
    CoSuffix ,
    CocellNum ,
    CohomeNum ,
    Coemail ,
    CoVemail ,
  
    // <...........step2.........>
    Corelease ,
    Corr ,
    Cobox ,
    Costreet ,
    CoStreetName ,
    CoStreetOptional ,
    Coapt ,
    Cozip ,
    Cocity ,
    CoState ,
    Corelease2 ,
    CoHouse ,
    CoYear ,
    CoMonth ,
    CoMortgage ,
    Codob ,
    CoSSN ,
  
  
    CoSelectHousingStatus ,
    CoEmployer ,
    CoWorkTitle ,
    CoWorkPhone ,
    Coyearss ,
    Comonthss ,
    CoSelfWorkPhone ,
    CoSelfyear ,
    CoSelfemployer ,
    CoSelfmonths ,
    CoEmpStatus ,
    CoPerYear ,
    view,
  });
  joint.save((err, data) => {
    if (err) {
      return res.status(400).json({ err });
    }
    if (data) {
      return res.status(201).json({
        joint,
      });
    }
  });
};

exports.getJointForm = async (req, res) => {
    const JointInfo = await Joint.find();
  
    res.status(201).json({
      success: true,
      JointInfo,
    });
  };
  
  exports.getJointDetailsById = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const result = await Joint.findOne({ _id: id });
    if (!result) {
      return next(new ErrorHander("Not found", 404));
    }
    res.status(200).json({
      success: true,
      result,
    });
  });


  exports.deleteJointFormById = catchAsyncErrors(async (req, res, next) => {
    const result = await Joint.findById(req.params.id);
    if (!result) {
      return next(new ErrorHander("Something Went Wrong", 400));
    }
  
    await result.remove();
  
    res.status(201).json({
      success: true,
      message: "Deleted Successfully",
    });
  });


  exports.updateDetails = catchAsyncErrors(async (req, res, next) => {
    const updatedData = await Joint.findByIdAndUpdate(
      req.params.id,
      { view: "read" },
      {
        new: true,
        runValidators: true,
      }
    );
    try {
      res.status(200).json({
        status: "Success",
        data: {
          updatedData,
        },
      });
    } catch (err) {
      console.log(err);
    }
  });