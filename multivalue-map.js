#svg.select("circle")
#  .attr("cx", 0)
#  .attr("cy", 0)
#  .attr("fill", "red")
# =
#svg.select("circle")
#  .attr({
#    cx: 0,
#    cy: 0,
#    fill: red	
#  });

svg.slectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr({
    x: function(d, i) {return i * (w / dataset.length);},
    y: function(d)    {return h = (d * 4); },
    width: w / dataset.length - barPadding,
    height: function(d) {return d * 4},
    fill: function(d)    {return "rgb(0, 0, " + (d * 10) + ")"; }
  });


