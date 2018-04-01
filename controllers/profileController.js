function profile(req, res) {
	res.json({
		name: 'Chuong Dao',
	    githubUsername: 'dchuong09',
	    githubLink: 'https://github.com/dchuong09?tab=repositories',
	    currentCity: 'San Francisco',
        favEdmDj: [
	      {name: 'Tchami', genre: 'Future House'}, 
	      {name: 'Jauz', genre: 'Trap music, Dubstep, Future Bass'}, 
	      {name: 'Tiesto', genre: 'Progressive House'}
        ]
	})
};

module.exports = {
	profile: profile
}