let margin = 50;
let topMargin = 10;
let graphHeight = 500;
let vizTwoArea = d3.select(".vizTwo");
let xScale = d3.scaleLinear().domain([0,4]).range([0,300]);
let yScale = d3.scaleLinear().domain([0,10]).range([300,0]);

let data = [
    {x: 1, y: 7.4},
    {x: 2, y: 9.3},
    {x: 3, y: 9.3},
    {x: 4, y: 9.2}
]

vizTwoArea 
 .append("g")
 .attr("transform", `translate (${margin}, ${topMargin})`)
 .call (d3.axisLeft(yScale));

 vizTwoArea
 .append("g")
 .attr("transform", `translate (${margin}, 310)`)
 .call (d3.axisBottom(xScale));

vizTwoArea 
.selectAll("dots")
.data(data)
.enter()
.append("circle", "fill", 255)
.attr("cx",function(d){
      return xScale(d.x);
})
.attr("cy", function(d){
    return yScale (d.y);
})
.attr("r", 5)