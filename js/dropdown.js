   //////////////////////////
  // controls opening and //
 // closing of dropdowns //
//////////////////////////

let aboutVisible = false;
/*
function hideAbout() {
  let aboutButtons = document.querySelectorAll(".about-subbutton")
  aboutButtons.forEach(function(button) {
  button.style.display = "none";
  })
}

function showAbout() {
  let aboutButtons = document.querySelectorAll(".about-subbutton")
  aboutButtons.forEach(function(button) { 
  button.style.display = "block";
  })
}
*/

function hideAbout() {
  let aboutList = document.querySelector("#about-list");
  aboutList.style.overflow = "hidden";
}

function showAbout() {
  let aboutButtons = document.querySelectorAll("#about-list");
  aboutList.style.overflow = "visible";
}

function toggleAbout() {
  if (aboutVisible) {
    aboutVisible = false;
    hideAbout();
  }
  else {
    aboutVisible = true;
    showAbout();
  }
}

function unhoverAbout() {
  if (!aboutVisible) {
    hideAbout();
  }
}


