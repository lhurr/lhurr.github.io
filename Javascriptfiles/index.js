/* Lim Hur
Admin number: p2112589
DAAA/1A02/FT

Javascript file for index.html
Subject: Front-end web development CA2 - Interactive Website 

*/

document.addEventListener('DOMContentLoaded', function (event) {

  // array with texts to type in typewriter
  var dataText = ["Student.", "Brother.", "Learner.", "Programmer."];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text is not finished yet
    if (i < (text.length)) {
      // add next character to h5

      document.querySelector("h5").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 200);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 200);
    }

    // check if dataText[i] exists
    if (dataText[i].length) {
      // text exists, start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

var scrollArrowRight = document.getElementById("arrow-right");
var scrollArrowLeft = document.getElementById("arrow-left");


var par1 = document.getElementById("p-1");
var par2 = document.getElementById("p-2");
var par3 = document.getElementById("p-3");

var slider = [par1, par2, par3];
// Keeps text para in an array

var currentIndex = -1;
// Initialise current index to be -1

//On load, show the first slide

loadPage(0);

function loadPage(i) {
  //Check if index is valid
  if (slider[i]) {
    slider[i].removeAttribute('hidden');
  } else {
    return;
  }

  //Hide previous slide
  if (slider[currentIndex]) {
    slider[currentIndex].setAttribute('hidden', '');
  }

  currentIndex = i;
}
// Next page arrow

scrollArrowRight.onclick = function () {
  loadPage(currentIndex + 1);
}

// Previous page arrow to go back 
scrollArrowLeft.onclick = function () {
  loadPage(currentIndex - 1);
}