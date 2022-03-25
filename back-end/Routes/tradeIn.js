const express = require("express");
const { createTradeInForm, deleteTradeInFormById, getTradeInDetailsById,getTradeInForm } = require("../Controllers/tradeIn");

const router = express.Router();

router.post('/trade-in',createTradeInForm);
router.get('/trade-in/information',getTradeInForm);
router.delete('/trade-in/delete/:id',deleteTradeInFormById);
router.get('/trade-in/information/:id',getTradeInDetailsById);


module.exports = router;