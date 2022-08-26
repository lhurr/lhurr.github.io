/* Lim Hur
Admin number: p2112589
DAAA/1A02/FT
Javascript file for pastschool.html
Subject: Front-end web development CA2 - Interactive Website 

*/

var pics = ["../Photofiles/obs.jpeg", "../Photofiles/obs2.jpeg", "../Photofiles/climbing.jpg"];
// array of picture files

textArray = [];
textArray.push("Outward Bound School Logo with Instructor");
textArray.push("Outward Bound School group photo");
textArray.push(["OBS Activities", " Rock climbing"])

//array of picture texts, description

// Gives a spacing between array items
var summaryText =[].concat.apply([], textArray)
var nested = summaryText.join(', ')
document.getElementById('summaryText').innerHTML = nested.toString()
// Display text to give a description of the Photos


var textContainer = document.getElementById("desid");
var imageContainer = document.getElementById("imgcont");
// Denotes text and image container
var counter = 0;
//initiate the counter to be 0

textContainer.innerHTML = textArray[counter];
// initiate the starting text

function funcNext() {
    if (counter == textArray.length - 1) {
        counter = 0
    }
    else
        counter++;
    imageContainer.src = pics[counter];

    textContainer.innerHTML = textArray[counter];
}
//Next button that allows user to go one step ahead to view next photo, stops at counter array length -1

function funcPrev() {
    if (counter == 0) {
        counter = textArray.length - 1
    } else {
        counter--;
    }
    imageContainer.src = pics[counter];
    textContainer.innerHTML = textArray[counter];
    //Previous button that allows user to go back to view previous photo, stops at counter 0

}




var hovertextCCA = document.getElementById("hovertextCCA")
hovertextCCA.addEventListener("mouseover", mouseOver);
hovertextCCA.addEventListener("mouseout", mouseOut);
// When hovered, gives a danger background, and when moved away, returns to dark for CCA card header


function mouseOver() {
    hovertextCCA.classList.remove('text-dark')
    hovertextCCA.classList.add('text-danger');
}
// Function for mouseover and mouseout

function mouseOut() {
    hovertextCCA.classList.remove('text-danger')
    hovertextCCA.classList.add('text-dark');
}
// Function for mouseover and mouseout


var hovertextOBS = document.getElementById("hovertextOBS")
hovertextOBS.addEventListener("mouseover", mouseOver1);
hovertextOBS.addEventListener("mouseout", mouseOut1);
// When hovered, gives a danger background, and when moved away, returns to dark for OBS card header 

function mouseOver1() {
    console.log("mouseover 1")
    hovertextOBS.classList.remove('text-dark')
    hovertextOBS.classList.add('text-danger');

}
// Function for mouseover and mouseout

function mouseOut1() {
    console.log("mouseover 2")

    hovertextOBS.classList.remove('text-danger')
    hovertextOBS.classList.add('text-dark');
}
// Function for mouseover and mouseout
