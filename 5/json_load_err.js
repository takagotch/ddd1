var dataset;

d3.json("income.csv", function(error, json){
  if (error){
    console.log(error);
  }else{
    console.log(error);
  }
  dataset = data;
  //
  generateVis();
  hideLoadingMsg();
});


