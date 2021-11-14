fetch("https://data-imdb1.p.rapidapi.com/movie/order/byRating/?page_size=50", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "data-imdb1.p.rapidapi.com",
		"x-rapidapi-key": "ef994bb83bmshfeedf19cea730f5p192546jsnd57c0890117c"
	}
})



//let drawGraph = jsonData

.then(response=>response.json())
.then(json => drawGraph(json))
.catch(err => console.error(err));

// .then(response => response.json())
// 	.then(jsonData => drawGraph(jsonData))
// 	.catch(err => console.error(err));



function drawGraph(dataToShow) {
	let margin = 30;
	let topMargin = 10;
	let graphHeight = 500;
	let vizArea = d3.select(".vizThree");
	let xScale = d3.scalePoint().domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).range([0, 600]);
	let yScale = d3.scaleLinear().domain([5, 10]).range([300, 0]);
	
	console.log("inside function");

   let data = [
    
       {x: "1", y: 9.4},
       {x: "2", y: 9.3},
       {x: "3", y: 9.2},
       {x: "4", y: 9.1},
       {x: "5",y: 9},
       {x: "6",y: 9},
       {x: "7",y: 9},
       {x: "8",y: 9},
       {x: "9",y: 9},
       {x: "10",y: 8.9},
      
      ];


	vizArea
		.append("g")
		.attr("transform", `translate (${margin}, ${topMargin})`)
		.call(d3.axisLeft(yScale));
    

	vizArea
		.append("g")
		.attr("transform", `translate (${margin}, 310)`)
		.call(d3.axisBottom(xScale))

  let color = d3.scaleOrdinal()
  .domain(["setosa", "versicolor", "virginica" ])
  .range([ "#440154ff", "#21908dff", "#fde725ff"])

  let highlight = function(d){

    selected_specie = d.Species

    d3.selectAll(".dot")
      .transition()
      .duration(200)
      .style("fill", "lightgrey")
      .attr("r", 3)

    d3.selectAll("." + selected_specie)
      .transition()
      .duration(200)
      .style("fill", color(selected_specie))
      .attr("r", 7)
  }

  // Highlight the specie that is hovered
  let doNotHighlight = function(){
    d3.selectAll(".dot")
      .transition()
      .duration(200)
      .style("fill", "lightgrey")
      .attr("r", 5 )
  }
// As seen on https://www.d3-graph-gallery.com/graph/scatter_grouped_highlight.html
   // Add dots
//    vizArea
//   .append('g')
//   .selectAll("dot")
//   .data(data)
//   .enter()
//   .append("circle")
//     .attr("class", function (d) { return "dot " + d.Species } )
//     .attr("cx", function (d) { return x(d.Sepal_Length); } )
//     .attr("cy", function (d) { return y(d.Petal_Length); } )
//     .attr("r", 5)
//     .style("fill", function (d) { return color(d.Species) } )
//   .on("mouseover", highlight)
//   .on("mouseleave", doNotHighlight )

// }
    

	//let x = d3.ScalePoint()
	//.domain(["UNDER 18", "18-29", "30-44", "45+"])
	//.range([300,0])

 	vizArea
 		.selectAll("dots")
 		.data(data)
 		.enter()
 		.append("circle", "fill", 50)
		.style ("fill", "lightblue")
 		.attr("cx", function (d) {
 			return xScale(d.x);
 		})
 		.attr("cy", function (d) {
 			return yScale(d.y);
 		})
 		.attr("r", 5)
     .on("mouseover", highLight)
    .on("mouseleave", doNotHighLight)


 }