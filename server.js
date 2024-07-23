const express = require('express');
const path = require('path');

const view_routes = require('./routes/view_routes');
const api_routes = require('./routes/api_routes');

const app = express();


//create direct paths
app.use(express.static('./public'));

//import routes
app.use(express.json());

app.use('/', view_routes);
app.use('/api', api_routes);





//wildcard route
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(4444, () => {
	console.log('Server Started');
})