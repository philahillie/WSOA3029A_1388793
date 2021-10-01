fetch("https://imdb8.p.rapidapi.com/title/get-ratings?tconst=tt0944947", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "99f5794064msh9e2d5b9a32574a3p11cc2fjsn711936ad23f9",
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});




//fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
//	"method": "GET",
//	"headers": {
//		"x-rapidapi-host": "imdb8.p.rapidapi.com",
//		"x-rapidapi-key": "99f5794064msh9e2d5b9a32574a3p11cc2fjsn711936ad23f9"
//	}
//})
//.then(response => {
//	console.log(response);
//})
//.catch(err => {
//	console.error(err);
//});

