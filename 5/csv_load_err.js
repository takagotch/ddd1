var dataset;

d3.csv("income.csv", function(error, data){
  if(error){
    console.log(error);
  }else{
    console.log(data);
  }
  dataset = data;
  
  generatevisialization();
  makeAwesomecharts();
  makeEvenAwesomecharts();
  thankAwardscommittee();
  generateVis();
  hideLoadingMsg();
  });
