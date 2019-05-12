var express = require('express');
var router = express.Router();
var { asyncErrorHandler } = require('../middleware');
var {
	getIndex,
	getAbout
} = require('../controllers/index');

/* GET home page. */
router.get('/', asyncErrorHandler(getIndex));

/* GET about page. */
router.get('/about', getAbout);

module.exports = router;
