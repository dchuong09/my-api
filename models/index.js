let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-api');

let Movie = require('./movie.js');

module.exports = {
	Movie: Movie
};