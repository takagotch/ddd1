//w, h
//same-->teplates
//svg
var svg = d3.select("body")
  .append("svg")
  .attr({
    width: w,
    height: h
  });

svg.slectAll("circle")
  .data(dataset)
  .enter( )
  .append("circle")
  .attr({
    cx: function(d) {return d[0] ;}
    cy: function(d) {return d[1];}
    r: 5
  });
