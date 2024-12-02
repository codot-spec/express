const express = require('express');
const path = require('path');

const router = express.Router();

// Route to display the contact form
router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'contactus.html'));
});

// Route to handle form submission
router.post('/contactus', (req, res, next) => {
    const { name, email } = req.body;
    res.redirect('/success'); // Redirect to the success page after form submission
});

// Route to show the success message
router.get('/success', (req, res, next) => {
    res.send('<h1>Form successfully filled</h1>');
});

module.exports = router;