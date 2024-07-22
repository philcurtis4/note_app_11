const router = require('express').Router();

const getNotes = require('../db/index');


//API Routes
router.get('/notes', async (req, res) => {
	const notes = await getNotes();
	
	res.json(notes);
});

module.exports = router;