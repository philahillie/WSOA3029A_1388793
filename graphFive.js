fetch("https://jikan1.p.rapidapi.com/genre/anime/1/1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "ef994bb83bmshfeedf19cea730f5p192546jsnd57c0890117c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

let data = [

  {x: "1", y: 8.52}, 
  {x: "2", y: 9.15},
  {x: "3", y: 7.2},
  {x: "4", y: 8.52},
  {x: "5", y: 7.98}
 
 ];

 
let margin = 50;
let vizArea = d3.select(".vizFive");
let xScale = d3.scaleLinear().domain([0,5]).range([0,500]);
let yScale = d3.scaleLinear().domain([5,10]).range([500,0]); 

vizArea
.append('g')
.attr("transform", `translate(${margin},10)`)
.call(d3.axisLeft(yScale));

vizArea
.append('g')
.attr("transform", `translate(${margin},510)`)
.call(d3.axisBottom(xScale));

console.log(xScale(5));
console.log(yScale(7.98));