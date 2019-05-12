var express = require('express');
var router = express.Router();
var { asyncErrorHandler } = require('../middleware');
var {
	postWeek,
	getWeeks,
	getNewWeek,
	getShowWeek,
	getEditWeek,
	updateWeek,
	deleteWeek
} = require('../controllers/weeks');

/* GET /weeks */
router.get('/', asyncErrorHandler(getWeeks));

/* GET /weeks/new */
router.get('/new', getNewWeek);

/* POST /weeks */
router.post('/', asyncErrorHandler(postWeek));

/* GET /weeks/:id */
router.get('/:id', asyncErrorHandler(getShowWeek));

// /* GET /weeks/:id/edit */
// router.get('/:id/edit', asyncErrorHandler(getEditWeek));

// /* PUT /weeks/:id */
// router.put('/:id', asyncErrorHandler(updateWeek));

// /* DELETE /weeks/:id */
// router.delete('/:id', asyncErrorHandler(deleteWeek));

module.exports = router;
