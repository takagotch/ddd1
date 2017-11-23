svg.slectAll("text")
  .data("dataset")
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
