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

let margin = 50;
let vizArea = d3.select(".vizThree");
let xScale = d3.scaleLinear().domain([0,10]).range([0,500]);
let yScale = d3.scaleLinear().domain([5,10]).range([500,0]); 

vizArea
.append('g')
.attr("transform", `translate(${margin},10)`)
.call(d3.axisLeft(yScale));

vizArea
.append('g')
.attr("transform", `translate(${margin},510)`)
.call(d3.axisBottom(xScale));

console.log(xScale(1.5));
console.log(yScale(9.4));



// vizArea
// .selectAll("rect")
// .data(data)
// .enter()
// .append("rect", "fill")
// .style ("fill", "orange")

