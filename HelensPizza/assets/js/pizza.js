/* global $ */

$(function() {
  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      phonenumber: "required",
      datetime: "required",
      },

    messages: {
      firstname: "Please enter your first name",
      lastname: "Please enter your last name",
      phonenumber: "Please enter your phone number",
      datetime: "Please enter a date and time",
      pizza: "Please select your pizza",
      crust: "Please select your crust",
      size: "Please select your size",
      drink: "Please select a drink",
      breadstick: "Please select a type of breadstick",
      salad: "Please select yes or no",
      email: "Please enter a valid email address",
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});


var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function initMap() {
        var uluru = {lat: 34.7252235, lng: -92.34084659999996};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: mapp
        });
      }