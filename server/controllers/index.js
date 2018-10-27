const express = require('express');
let router = express.Router();

router.use('/session',require('./session'));
router.use('/note',require('./note'));
module.exports=router;