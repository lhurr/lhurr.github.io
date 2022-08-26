/* Lim Hur
Admin number: p2112589
DAAA/1A02/FT

javascript file for expinSP.html
Subject: Front-end web development CA2 - Interactive Website 

*/


//adds display block for individual soc project when button is clicked

function displayContent1() {
  document.getElementById('project1').classList.add('d-block')
}
function displayContent2() {
  document.getElementById('project2').classList.add('d-block')
}

function displayContent3() {
  document.getElementById('project3').classList.add('d-block')
}

// Array with div ID's
var textArray = ["project1", "project2", "project3"]
//arrays to display the div text boxes
window.addEventListener('mouseup', function (event) {
  //go through each array item through a FOR loop,, when user clicks, mouseup and hence function is triggered.
  for (var i = 0; i < textArray.length; i++) {
    var box = document.getElementById(textArray[i]);
    //if the click outside the box, then close the box, but also allows user interact within the box
    if (event.target != box && event.target.parentNode != box) {
      box.classList.remove("d-block");
      box.classList.add("d-none")
      //Removed display block class and adds d-none class
    }
  }

})
//When user clicks, information boxes about final year project done by Y3 students appear


// EAE date initiallisation
var exp = document.getElementsByClassName('exp1');

var x = document.getElementsByClassName('x');


// countdown to 2022 eae, calculates time diff, seconds mins hours and days. Loops to display live time.
function countdown() {
  var now = new Date();
  for (var i = 0; i < exp.length; i++) {
    var futureDate = new Date(exp[i].innerHTML);
    var timeDiff = futureDate.getTime() - now.getTime();
    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    // Display in webpage, with live countdown
    x[i].innerHTML = '<span class="col-sm-6 bg-success text-light p-1 rounded d-inline-block mb-1">' + days + ' Days ' + '</span>' + '<span class="col-sm-6 bg-success text-light p-1 rounded d-inline-block mb-1">' + hours + ' Hour ' + '</span>' + '<span class="col-sm-6 bg-success text-light p-1 rounded d-inline-block mb-1">' + minutes + ' Mins ' + '</span>' + '<span class="col-sm-6 bg-success text-light p-1 rounded d-inline-block mb-1">' + seconds + ' Sec ' + '</span>';
  }

}
setInterval(function () { countdown(); }, 1000);
// Interval every 1 second.

//timer countdown to eae 2022

