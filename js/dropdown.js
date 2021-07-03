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

function toggleDropdown(name) {
  let dropdown = document.querySelector("#" + name + ".subbutton");
  dropdown.style.color = "#FF0000";
}
