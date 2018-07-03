$(document).ready(function() {
  var toto = "";
  var tutu = "";


  $(".form-control").focusout(function() { // check input kind (nickname or pass...)
    if ($(this).attr("id") == "pseudo-input") {
      toto = "nickname";
    } else if ($(this).attr("id") == "exampleInputPassword1" || $(this).attr("id") == "exampleInputPassword2") {
      toto = "password";
    } else {
      toto = "email";
    }
    $(this).val();
    if ($(this).val().length < 5 && $(this).val().length > 0) { // check input data length
      $(this).removeClass("border-success");
      $(this).addClass("border-warning");
      $(this).next().text(toto + " too short, need 5 characters");
    } else if ($(this).val().length == 0) {
      $(this).removeClass("border-success");
      $(this).removeClass("border-warning");
      $(this).next().text("Please type your" + toto);
    } else {
      $(this).removeClass("border-warning");
      $(this).addClass("border-success");
      $(this).next().text(toto + " valid");
      $(this).next().next().addClass("fa-check");
    }
  });

  $(".form-control").focusin(function() {
    $(this).removeClass("border-success");
    $(this).removeClass("border-warning");
    $(this).next().next().removeClass("fa-times"); // firefox bug
    $(this).next().text("Need at least 5 characters");
  });

  $("#exampleInputPassword2").on("focusout", function() { // check password confirmation
    if ($(this).val() != $("#exampleInputPassword1").val()) {
      $(this).removeClass("border-success");
      $(this).addClass("border-warning");
      $(this).next().text("Password confirmation invalid !");
      $(this).next().next().removeClass("fa-check");
      $(this).next().next().addClass("fa-times");
    }
  });

  $('#exampleInputEmail1').focusout(function() { // check email
    var email = $('#exampleInputEmail1').val();
    if (validateEmail(email)) {
      $(this).removeClass("border-warning");
      $(this).addClass("border-success");
      $(this).next().text("Email valid !");
    } else {
      $(this).removeClass("border-success");
      $(this).addClass("border-warning");
      $(this).next().text("Email invalid !");
      $(this).next().next().removeClass("fa-check");
      $(this).next().next().addClass("fa-times");
    }
  })


  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }





  $(".btn-primary").click(function(event) {
    for (var i = 0; i < $(".form-control").length; i++) {
      console.log($($(".form-control")[i]));
      if ($($(".form-control")[i]).val() == "") {
        tutu += "\n" + $($(".form-control")[i]).attr('name');
        alert("empty : " + tutu + " ");
        return false;
      }
      else if ($($(".form-control")[i]).attr('class') != 'border-success') {
        alert("Il y a au moins une erreur dans le formulaire");
        return false;
      } else {
        alert("Formulaire validé!")
        return false;
      }
    }
    tutu = "";
  });

  $(".btn-warning").click(function(event) {
    for (var j = 0; j < $(".form-control").length; j++) {
      $($(".form-control")[j]).val("");
    }
  });





})
