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
    
  {x: "1", y: 9.15},
  {x: "2", y: 7.2},
  {x: "3", y: 8.52},
  {x: "4", y: 8.52},
  {x: "5", y: 7.98}
]
 
 let margin = 30;
 let topMargin = 10;
 let graphHeight = 500;
 let vizArea = d3.select(".vizFour");
 let xScale = d3.scaleLinear().domain([0,5]).range([0,550]);
 let yScale = d3.scaleLinear().domain([5,10]).range([300,0]);


 vizArea 
  .append("g")
  .attr("transform", `translate (${margin}, ${topMargin})`)
  .call (d3.axisLeft(yScale));

  

  vizArea
  .append("g")
  .attr("transform", `translate (${margin}, 310)`)
  .call (d3.axisBottom(xScale));

// //let x = d3.ScalePoint()
// //.domain(["UNDER 18", "18-29", "30-44", "45+"])
// //.range([300,0])

 vizArea 
 .selectAll("dots")
 .data(data)
 .enter()
 .append("circle")
 .style ("fill","orange")
 .attr("cx",function(d){
       return xScale(d.x);
 })
 .attr("cy", function(d){
     return yScale (d.y);
 })
 .attr("r", 5)

 vizArea.selectAll("myline")
  .data(data)
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(d); })
    .attr("x2", function(d) { return x(d); })
    .attr("x3", function(d) { return x(d); })
    .attr("x4", function(d) { return x(d); })
    .attr("x5", function(d) { return x(d); })
    .attr("y1", function(d) { return y(d); })
    .attr("y2", y(0))
    .attr("stroke", "white")
 



