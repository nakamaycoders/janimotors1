const Credit = require('../Models/credit')
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


exports.postCredit = catchAsyncErrors(async(req, res, next) => {
    const {
      fname,
      mname,
      lname,
      phone,
      email,
      streetNo,
      streetName,
      Apartment,
      zipCode,
      city,
      state,
      housingStatus,
      timeAtAddress,
      mortgage,
      SSN,
      employmentStatus,
      incomeSrc,
      income,
      incomeSrc2,
      income2,
    } = req.body;
  
  
    const creditData = new Credit({
        fname,
        mname,
        lname,
        phone,
        email,
        streetNo,
        streetName,
        Apartment,
        zipCode,
        city,
        state,
        housingStatus,
        timeAtAddress,
        mortgage,
        SSN,
        employmentStatus,
        incomeSrc,
        income,
        incomeSrc2,
        income2,
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