   //////////////////////////
  // controls opening and //
 // closing of dropdowns //
//////////////////////////

let hidingAbout = true

let showAbout = function() {
  let buttonList = document.querySelector("#about-list")
  buttonList.style.height = "132px"
}

let hideAbout = function() {
  let buttonList = document.querySelector("#about-list")
  buttonList.style.height = "0px"
}
