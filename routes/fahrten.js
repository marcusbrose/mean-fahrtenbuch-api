var express = require('express');
var router = express.Router();

var fahrten = require('../controllers/fahrtenController');

// POST /fahrten
router.post('/', fahrten.post);

// GET /fahrten
router.get('/', fahrten.get);

// GET /fahrten/55afae82c290ed603f2596f2
router.get('/:fahrtId', fahrten.show);

// PUT /fahrten/55afae82c290ed603f2596f2 --> body: {}
router.put('/:fahrtId', fahrten.put);

// GET /fahrten/55afae82c290ed603f2596f2
router.delete('/:fahrtId', fahrten.delete);

module.exports = router;
