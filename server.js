let express = require('express');
let app = express();
let controllers = require('./controllers');

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

app.get('/', function homepage(req, res) {
	res.sendFile('views/index.html', { root: __dirname });
})

app.get('/api', controllers.api.index);

app.get('/api/profile', controllers.data.profile);

app.get('/api/movies', controllers.movies.index);

app.listen(3000);