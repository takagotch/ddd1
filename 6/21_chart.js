//w, h

//svg
var svg = d3.select("body")
  .append("svg")
  .attr({
    width: w,
    height: h
  });

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr({
    x: function(d, i) { return i * (w / dataset.length); },
    y: function(d)    { return h - (d * 4); },
    width: w / dataset.length - barPadding,
    height: function(d) {return d * 4; },
    fill: function(d) { return "rgb(0,0 " + (d * 10) + ")"; }
  });

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) { retrun d; })
  .attr({
    x: function(d, i) { return i * (w / dataset.length) + (w / dataset.length -barPadding) / 2; },
    y: function(d) { return h - (d * 4) + 14; },	  
    font-family: sans-serif,
    font-size: 11px,
    fill: white
  });

