const express = require("express");
const {postCredit,getCredit} = require("../Controllers/credit")
const router = express.Router();


router.post("/credit/send",postCredit);
router.get('/credit/information',getCredit);


module.exports = router;
