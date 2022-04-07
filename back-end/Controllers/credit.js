const Credit = require('../Models/credit')
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.postCredit = catchAsyncErrors(async(req, res, next) => {
    const {
      fName,
      lName,
      mName,
      Suffix,
      homeNum,
      cellNum,
      email,
      Vemail,
      rr,
      box,
      street,
      StreetName,
      StreetOptional,
      apt,
      zip,
      city,
      State,
      House,
      Year,
      Month,
      Mortgage,
      Dob,
      SSN,
      SelectHousingStatus,
      Employer,
      WorkTitle,
      WorkPhone,
      yearss,
      monthss,
      SelfWorkPhone,
      Selfyear,
      Selfmonths,
      EmpStatus,
      PerYear,
    } = req.body;
  
  
    const creditData = new Credit({
      fName,
      lName,
      mName,
      Suffix,
      homeNum,
      cellNum,
      email,
      Vemail,
      rr,
      box,
      street,
      StreetName,
      StreetOptional,
      apt,
      zip,
      city,
      State,
      House,
      Year,
      Month,
      Mortgage,
      Dob,
      SSN,
      SelectHousingStatus,
      Employer,
      WorkTitle,
      WorkPhone,
      yearss,
      monthss,
      SelfWorkPhone,
      Selfyear,
      Selfmonths,
      EmpStatus,
      PerYear,
    });
    
    creditData.save((err, data) => {
      if (err) {
        return res.status(400).json({
          err,
        });
      }
      if (data) {
        return res.status(201).json({
            creditData,
        });
      }
    });
  });

  exports.getCredit =  catchAsyncErrors(async(req,res,next) => {
    const creditInfo = await Credit.find();
  
    res.status(201).json({
      success: true,
      creditInfo,
    });
});