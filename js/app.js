$(document).ready(function() {
  var toto = "";

  $(".form-control").focusout(function() {
    if ($(this).attr("id") == "pseudo-input") {
      toto = "nickname";
    } else if ($(this).attr("id") == "exampleInputPassword1" || $(this).attr("id") == "exampleInputPassword2") {
      toto = "password";
    } else {
      toto = "email";
    }
    $(this).val();
    if ($(this).val().length < 5 && $(this).val().length > 0) {
      console.log("short");
      $(this).addClass("border-warning");
      $(this).removeClass("border-success");
      $(this).next().text(toto + "too short, need 5 characters");
    } else if ($(this).val().length == 0) {
      $(this).removeClass("border-success");
      $(this).removeClass("border-warning");
      $(this).next().text("Please type your" + toto);
    } else {
      $(this).addClass("border-success");
      $(this).removeClass("border-warning");
      $(this).next().text(toto + " valid");
    }
  })
  $(".form-control").focusin(function() {
    $(this).removeClass("border-success");
    $(this).removeClass("border-warning");
    $(this).next().text("Need at least 5 characters");
  });

$("#exampleInputPassword2").focusout(function() {
  if ($(this).val() == $("#exampleInputPassword1").val()) {
    console.log("victoire");
  }
});





})
