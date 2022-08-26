/* Lim Hur
Admin number: p2112589
DAAA/1A02/FT


Common JS programs for 5 web pages
Subject: Front-end web development CA2 - Interactive Website 

*/


// Whan load, it gives an animation to display the page
window.onload = function() {
    document.documentElement.classList.add('show-time');
};

  
// Gives a typing effect on h1 header when page loads, make sure it runs through every letter
const div = document.querySelector('h1')
typeEffect(div,120) //invoke function
function typeEffect(element, speed) {
    let text= element.innerHTML;
    element.innerHTML="";
    var i=0
    var timer = setInterval(function() {
        if (i<text.length) {
            element.append(text.charAt(i))
            i++
        }
        else {
            clearInterval(timer)
        }

    },speed)
}

//========================== //form validation to let user confirm whether to submit or not
function clicktoSubmit(msg) {
    if (confirm(`Do you want to ${msg}?`)) {
        return true;
    } else {
        return false;
    }
  }

// to validate email input, alert if not entered required fields
function formValidation() {
    if(document.feedbackForm.address.value == "" ) {
        alert( "Please provide your Email!" );
        document.feedbackForm.address.focus() ;
        return false;
     }
}