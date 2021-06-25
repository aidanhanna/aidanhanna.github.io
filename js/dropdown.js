   //////////////////////////
  // controls opening and //
 // closing of dropdowns //
//////////////////////////

let aboutVisible = false;

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


