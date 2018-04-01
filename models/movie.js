let mongoose = require('mongoose');
  Schema = mongoose.Schema;

let MovieSchema = new Schema({
	title: String,
	releaseDate: Number,
	genres: String
})

let Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;