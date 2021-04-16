const express = require('express');
const router = express.Router();

/*Rota Get */
router.get('/', function(req, res) {
    res.render('contact');
})

module.exports = router;