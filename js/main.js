$(document).ready(function() {
  // ======================ANIMATIONS=================


  $('#btnSubmit').click(function(){
    var result1 = $('input[name="query1"]:checked').val();
    var result2 = $('input[name="query2"]:checked').val();
    var result3 = $('input[name="query3"]:checked').val();

    if (result1 === NaN || result2 === NaN || result3 === NaN ){
      alert("CHOOSE YOUR FAVORITE THINGS!");
    } else if (result1 === '1' || result2 === '5')  {
      $("#optionTwo").hide();
      $("#optionOne").hide();
      $("#winnerOne").show();
      $("#questionBanner").hide();
      alert("The outdoorsy drunk. You go to jail.")
    } else if (result3 === '9' && result2 ==='5') {
      $("#optionTwo").hide();
      $("#optionOne").hide();
      $("#winnerTwo").show();
      $("#questionBanner").hide();
      alert("Ohhh very nice");
    } else if (result1 === 2 || result2 === 6 || result3 === 12) {
      $("#optionTwo").hide();
      $("#optionOne").hide();
      $("#questionBanner").hide();
      $("#winnerThree").show();
      alert("You get to visit the post office!")
    } else {
      $("#optionTwo").hide();
      $("#optionOne").hide();
      $("#winnerFour").show();
      $("#questionBanner").hide();
      alert("Your perfect destination is a trip to the abandoned nuclear power plant located in the heart of the Montucky radiation zone!")
    }
  });

  $("#winnerOne").hide();
  $("#winnerTwo").hide();
  $("#winnerThree").hide();
  $("#winnerFour").hide();
  $("#errorOne").hide();
  $("#optionTwo").hide();
  $("#optionThree").hide();
  $("#errorOne").hide();

  $("#introBanner").animate({
    marginLeft: "+=4000",
  }, 0)
  $("#introBanner").animate({
    marginLeft: "-=4000" ,
  }, 500);

  $("img").animate({
    marginLeft: "+=4000" ,
  }, 0)
  $("img").animate({
    marginLeft: "-=4000" ,
  }, 900);

  // =============LOGIC=================

  // $('#radioGroup1').on('change', function() {
  //   alert($('input[name=query1]:checked').val());
  // });
  //
  // $('#radioGroup2').on('change', function() {
  //   alert($('input[name=query2]:checked').val());
  // });
  //
  // $('#radioGroup3').on('change', function() {
  //   alert($('input[name=query3]:checked').val());
  // });
  //
  //
  //
  //


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
    $("#optionOne").hide();
    $("#errorOne").show();
  })
})
