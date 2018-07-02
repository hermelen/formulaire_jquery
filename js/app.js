$(document).ready(function(){
  $("#pseudo-input").focusout(function(){
    $(this).val();
    if ($(this).val().length < 6 ) {
      console.log("short");
      $(this).addClass("border-warning");
      $("#pseudoHelp").text("nickname too short, need 5 character");
    }
  })










})
