/* Lim Hur
Admin number: p2112589
DAAA/1A02/FT

Javascript file for daaa.html
Subject: Front-end web development CA2 - Interactive Website 

*/

// Script that runs when user clicks on a button which displays information for them
function userClick() {
    var x = document.getElementById("stephen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
