

const fs = require('fs').promises;

async function getNotes () {
	const rawData = await fs.readFile('./db/db.json', 'utf8');
	
	return JSON.parse(rawData);
};



module.exports = getNotes;