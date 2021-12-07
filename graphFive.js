// fetch("https://jikan1.p.rapidapi.com/genre/anime/1/1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "jikan1.p.rapidapi.com",
// 		"x-rapidapi-key": "ef994bb83bmshfeedf19cea730f5p192546jsnd57c0890117c"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

let width = 500, 
 height =500

let svg = d3.select(".chart")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)")

let simulation = d3.forceSimulation()
    .force("x", d3.forceX(width/2).strength(0.05))
    .force("y", d3.forceY(height/2).strength(0.05))
    .force("collide", d3.forceCollide(10))

  

  d3.queue()
    .defer(d3.csv, "animescores.csv")
    .await(ready)

    function ready(error, datapoints) {

      let circles = svg.SelectAll(".id")
          .data(datapoints)
          .enter().append("circle")
          .attr("class", ".id")
          .attr("r", 10)
          .attr("fill", "orange")

      simulation.nodes(datapoints)
        .on("tick", ticked)

        function ticked() {
          circles 
            .attr("cx", function(d){
              return d.x
            })
            .attr("cy", function(d){
              return d.y
            })
        }
    }


// let data = [

//   {x: "1", y: 8.52}, 
//   {x: "2", y: 9.15},
//   {x: "3", y: 7.2},
//   {x: "4", y: 8.52},
//   {x: "5", y: 7.98}
 
//  ];

 
// let margin = 50;
// let vizArea = d3.select(".vizFive");
// let xScale = d3.scaleLinear().domain([0,5]).range([0,500]);
// let yScale = d3.scaleLinear().domain([5,10]).range([500,0]); 

// vizArea
// .append('g')
// .attr("transform", `translate(${margin},10)`)
// .call(d3.axisLeft(yScale));

// vizArea
// .append('g')
// .attr("transform", `translate(${margin},510)`)
// .call(d3.axisBottom(xScale));

// console.log(xScale(5));
// console.log(yScale(7.98));