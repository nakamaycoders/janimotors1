const express = require("express");
const { createContactForm, deleteContactFormById, getContactDetailsById,getContactForm, updateContactDetailsById } = require("../Controllers/contact");

const router = express.Router();

router.post('/contact',createContactForm);
router.get('/contact/information',getContactForm);
router.delete('/contact/delete/:id',deleteContactFormById);
router.get('/contact/information/:id',getContactDetailsById);

module.exports = router;