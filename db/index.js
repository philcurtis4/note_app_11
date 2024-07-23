
const fs = require('fs').promises;


async function getNotes () {
	const rawData = await fs.readFile('./db/db.json', 'utf8');
	
	return JSON.parse(rawData);
};

async function saveNotes (updatedNotesArray) {
	await fs.writeFile('./db/db.json', JSON.stringify(updatedNotesArray, null, 2));

	console.log('Notes json file updated');
}



module.exports = {
	getNotes: getNotes,
	saveNotes: saveNotes
}