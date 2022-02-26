var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}


// Yo this is W3Schools stuff + some of mine
var countDownDate = new Date("Feb 2, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Do the inserting of the information
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Thanks for visiting!";
  }
}, 1000);

var url = 'https://script.google.com/macros/s/AKfycbyozciFf9JJl4mdyi_CVyuNm6xl3XcJfOduCJzVp6asNd7cTdg/exec',
    redirectUrl = 'index.html';

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var $form = $('#email-form');
  var jqxhr = $.post(
    url,
    $form.serialize(),
    function(data) {
      console.log("Success! Data: " + data.statusText);
      $(location).attr('href',redirectUrl);
    }
  );
})
