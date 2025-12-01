import abl from 'loginAbl, registerAbl'

const express = require('express');
const router = express.Router();

router.post('/create', abl.create);
router.get('/get', abl.get);

module.exports = router