 fetch("https://imdb8.p.rapidapi.com/title/get-ratings?tconst=tt0944947", {
 	"method": "GET",
 	"headers": {
 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
 		"x-rapidapi-key": "99f5794064msh9e2d5b9a32574a3p11cc2fjsn711936ad23f9",
 	}
 })
 	.then(response => response.json())
 	.then(jsonData => drawGraph(jsonData))
 	.catch(err => console.error(err));

function drawGraph(dataToShow) {
	let margin = 30;
	let topMargin = 10;
	let graphHeight = 500;
	let vizArea = d3.select(".vizTwo");
	let xScale = d3.scalePoint().domain(["0", "UNDER 18", "18-29", "30-44", "45+"]).range([0, 300]);
	let yScale = d3.scaleLinear().domain([5, 10]).range([300, 0]);
	
	console.log("inside function", dataToShow.ratingsHistograms);
	const teenagers = dataToShow.ratingsHistograms["Females Aged under 18"];
	const youngAdults = dataToShow.ratingsHistograms["Females Aged 18-29"];
	const adults = dataToShow.ratingsHistograms["Females Aged 30-44"];
	const olderAdults = dataToShow.ratingsHistograms["Females Aged 45+"];

	let data = [

		{ x: "UNDER 18", y: dataToShow.ratingsHistograms["Females Aged under 18"].aggregateRating},
		{ x: "18-29", y: youngAdults.aggregateRating},
		{ x: "30-44", y: adults.aggregateRating},
		{ x: "45+", y: olderAdults.aggregateRating}

		
	]

	

  vizArea 
 .append("g")
 .attr("transform", `translate (${margin}, ${topMargin})`)
 .call (d3.axisLeft(yScale));

 vizArea
 .append("g")
 .attr("transform", `translate (${margin}, 310)`)
 .call (d3.axisBottom(xScale));

 vizArea 
.selectAll("dots")
.data(data)
.enter()
.append("circle", "fill", 255)
.style ("fill","orange")
.attr("cx",function(d){
      return xScale(d.x);
})
.attr("cy", function(d){
    return yScale (d.y);
})
.attr("r", 5);

}