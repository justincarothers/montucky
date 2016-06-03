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

  $('#radioGroup1').on('change', function() {
    alert($('input[name=query1]:checked').val());
  });

  $('#radioGroup1').on('change', function() {
    alert($('input[name=query2]:checked').val());
  });

  $('#radioGroup1').on('change', function() {
    alert($('input[name=query3]:checked').val());
  });

//   $("#submit").click(function() {
//     alert($("input[name=q12_3]:checked").val());
// });
//
//



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
