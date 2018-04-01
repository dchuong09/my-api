// controllers/apiController.js
function index(req, res) {
  res.json({
    message: 'Welcome to my API!',
    documentation_url: 'https://github.com/dchuong09/my-api.git',
    base_url: 'localhost:3000',
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, 
      {method: "POST", path: "/api/movies", description: "Movie Lists"} 
    ]
  });
}


module.exports = {
  index: index
}