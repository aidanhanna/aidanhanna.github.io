   //////////////////////////
  // controls opening and //
 // closing of dropdowns //
//////////////////////////

let hidingAbout = true

let showAbout = function() {
  let buttonList = document.querySelector("#about-list")
  buttonList.style.display = block;
}

let hideAbout = function() {
  let buttonList = document.querySelector("#about-list")
  buttonList.style.display = none;
}
