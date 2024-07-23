const router = require('express').Router();
const v4 = require('uuid').v4;

const {getNotes, saveNotes} = require('../db/index');


//API Routes
router.get('/notes', async (req, res) => {
	const notes = await getNotes();
	
	res.json(notes);
});

router.post('/notes', async (req, res) => {
	const noteText = req.body.text;
	const noteTitle = req.body.title;
	const notes = await getNotes();
	
	const id = v4();

	const newNote = {
		id: id,
		title: noteTitle,
		text: noteText
	}

	notes.push(newNote);

	await saveNotes(notes);

	res.json(newNote);

});

module.exports = router;