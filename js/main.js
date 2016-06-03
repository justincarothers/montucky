$(document).ready(function() {
  // ======================ANIMATIONS=================
  var price
  $("#optionTwo").hide();
  $("#optionThree").hide();
  $("#errorOne").hide();

  $("#introBanner").animate({
    marginLeft: "+=4000",
  }, 0)
  $("#introBanner").animate({
    marginLeft: "-=4000" ,
  }, 300);

  $("img").animate({
    marginLeft: "+=4000" ,
  }, 0)
  $("img").animate({
    marginLeft: "-=4000" ,
  }, 900);

  // =============LOGIC=================

  $('#myForm input').on('change', function() {
    alert($('input[name=radioName]:checked', '#myForm').val());
  });





  // ==========================================

  $("#camping button").click(function(){
    var price
    $("#optionOne").animate({
      marginLeft: "-=4000" ,
    }, 800);
    $("#optionOne").hide();
    $("#optionTwo").show();
  })

  $("#hotel button").click(function(){
    var price
    $("#optionOne").hide();
    $("#errorOne").show();
  })
})
