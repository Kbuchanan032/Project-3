const express = require('express');

const router = express.Router();

router.get('/shelters', (req, res, next) => {
    console.log('GET Request in Shelters');
    res.json({message: 'It works!'});
})

module.exports = router;