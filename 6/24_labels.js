//w, h

//svg
svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr({
    cx: function(d) { return d[0];}
    cy: function(d) { return d[1];}
    r:  function(d) { return Math.sqrt(h - d[1]);}
  });

svg.slectAll("text")
  .data(dataset)
  .enter( )
  .append("text")
  .text(function(d) {
    return d[0] + "," + d[1];
  })
  .attr({
    x: function(d)    {return d[0];}
    y: function(d)    {return d[1];}
    font-family: sans-serif,  
    font-size:   11px,
    fill:         red
  });


