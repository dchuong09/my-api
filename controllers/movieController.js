let db = require('../models');

// GET /api/movies
function index(req, res) {
  // send back all movies as JSON
  db.Movie.find({}, function(err, allMovies) {
    res.json(allMovies);
  })
};



module.exports = {
	index: index
}