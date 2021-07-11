   //////////////////////////
  // controls opening and //
 // closing of dropdowns //
//////////////////////////

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
   let dropdown = document.querySelector(name);
   /*dropdown.style.height = "500px";*/
   if (dropdown.style.height == "0px")
   {
      dropdown.style.height == "500px";
   }
   else
   {
      dropdown.style.height == "0px";
   }
}

let aboutVisible = false;
function toggleAbout() {
   let dropdown = document.querySelector("#about-list");
   /*dropdown.style.height = "500px";*/
   if (aboutVisible)
   {
      dropdown.style.height == "0px";
      aboutVisible = false;
   }
   else
   {
      dropdown.style.height == "500px";
      aboutVisible = true;
   }
}
