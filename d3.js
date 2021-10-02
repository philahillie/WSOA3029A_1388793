let margin = 50;
let topMargin = 10;
let graphHeight = 500;
let thronesArea = d3.select(".thrones");
let xScale = d3.scaleLinear().domain([0,100]).range([0,500]);
let yScale = d3.scaleLinear().domain([0,100]).range([graphHeight,0]);

thronesArea
.append("g")
.attr("transform","translate")
