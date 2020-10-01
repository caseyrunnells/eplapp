$(function(){
  // 1. On Load Make Request, Store as Variable.

  var unirest = require("unirest");

var req = unirest("GET", "https://sportsop-soccer-sports-open-data-v1.p.rapidapi.com/v1/leagues/%7Bleague_slug%7D/seasons/%7Bseason_slug%7D/standings");

req.headers({
	"x-rapidapi-host": "sportsop-soccer-sports-open-data-v1.p.rapidapi.com",
	"x-rapidapi-key": "jXQXSGf8cTmsh0AkW0qIl0zQqmm9p1LsQxfjsnnXBtWoB5uCrB",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
});

    