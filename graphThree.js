fetch("https://imdb8.p.rapidapi.com/title/get-filming-locations?tconst=tt0944947", {
	method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/get-filming-locations',
  params: {tconst: 'tt0944947'},
  headers: {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': '99f5794064msh9e2d5b9a32574a3p11cc2fjsn711936ad23f9'
  }
});

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// .then(response => response.json())
// 	.then(jsonData => drawGraph(jsonData))
// 	.catch(err => console.error(err));

    

// function drawGraph(dataToShow) {
//     let margin = 30;
//     let topMargin = 10;
//     let graphHeight = 500;
//     let vizArea = d3.select(".viz");
//     let xScale = d3.scalePoint().domain(["0", "UNDER 18", "18-29", "30-44", "45+"]).range([0, 300]);
//     let yScale = d3.scaleLinear().domain([5, 10]).range([300, 0]);    

//     console.log("inside function", dataToShow.locations);
	

//let default =  
//let axios = require("axios").default;

//let options = {
  //method: 'GET',
  //url: 'https://imdb8.p.rapidapi.com/title/get-filming-locations',
  //params: {tconst: 'tt0944947'},
  //headers: {
    //'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    //'x-rapidapi-key': '99f5794064msh9e2d5b9a32574a3p11cc2fjsn711936ad23f9'
  //}
//};
