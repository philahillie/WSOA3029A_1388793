let margin = 50;
let topMargin = 10;
let graphHeight = 500;
let vizTwoArea = d3.select(".vizTwo");
let xScale = d3.scalePoint().domain(["UNDER 18", "18-29", "30-44", "45+"]).range([0,300]);
let yScale = d3.scaleLinear().domain([0,10]).range([300,0]);

let data = [
    {x: "UNDER 18", y: 9.2},
    {x: "18-29", y: 9.3},
    {x: "30-44", y: 9.2},
    {x: "45+", y: 9.1}
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