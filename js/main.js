$(document).ready(function() {

  var price
  $("#optionTwo").hide();
  $("#optionThree").hide();
  $("#errorOne").hide();




  $("#camping button").click(function(){
    var price
    $("#optionOne").hide();
    $("#optionTwo").show();
  })

  $("#hotel button").click(function(){
    var price
    $("#optionOne").hide();
    $("#errorOne").show();
  })
})
