const Trade = require('../models/tradeIn');
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createTradeInForm = (req,res) =>{

    const {
        year, 
        make,
        model,
        vin,
        bodystyle,
        trim,
        exteriorColor,
        interiorColor,
        Cylinders,
        Liters,
        Mileage,
        Transmission,
        LienHolder,
        EstimatedPayoff,
        AdditionalOptions,
        fname,
        lname,
        email,
        state,
        city,
        address,
        zip,
        phone,
      } = req.body;
      
      const trade = new Trade({
        year, 
        make,
        model,
        vin,
        bodystyle,
        trim,
        exteriorColor,
        interiorColor,
        Cylinders,
        Liters,
        Mileage,
        Transmission,
        LienHolder,
        EstimatedPayoff,
        AdditionalOptions,
        fname,
        lname,
        email,
        state,
        city,
        address,
        zip,
        phone,
      });
      trade.save((err, data) => {
        if (err) {
          return res.status(400).json({err});
        }
        if (data) {
          return res.status(201).json({
            trade
          });
        }
      });
    };

exports.getTradeInForm = async(req,res) =>{
    const tradeInfo = await Trade.find();

  res.status(200).json({
    success: true,
    tradeInfo,
  });
}

exports.getTradeInDetailsById = catchAsyncErrors(async(req,res,next) =>{
  const {id} = req.params
  const result = await Trade.findOne({_id: id});
  if (!result) {
    return next(new ErrorHander("Not found", 404));
  }
  res.status(200).json({
    success: true,
    result,
  });
});

      exports.deleteTradeInFormById = catchAsyncErrors(async(req,res,next) => {
        const result = await Trade.findById(req.params.id);
        if (!result) {
            return next(new ErrorHander("Something Went Wrong", 400));
          }
        
          await result.remove();
        
          res.status(201).json({
            success: true,
            message: "Deleted Successfully",
          });
        });
//         {       "year": "3211",
//         "make": "1231",
//         "model": "as22",
//         "vin": "3231231231",
//         "bodystyle": "321123123asda",
//         "trim": "asdasd231",
//         "fname": "asdasdasdasdasdas",
//         "lname":"zcxzxczxczxczx",
//         "email": "asdasdasd@gmail.com",
//         "zip": 321312312,
//         "phone": 123123123123123
// }