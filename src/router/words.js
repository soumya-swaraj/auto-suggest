const express = require('express');
const { add } = require('../controller/add');
const { fetch, halfWay } = require('../controller/fetch');
const router = express.Router();


router.post('/add', add);
router.post('/fetch', halfWay, fetch);

module.exports = router;