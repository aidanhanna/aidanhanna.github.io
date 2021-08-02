   //////////////////////////
  // controls opening and //
 // closing of dropdowns //
//////////////////////////

/*
let aboutVisible = false;
function toggleAbout() {
   let dropdown = document.querySelector("#about-list");
   if (aboutVisible)
   {
      dropdown.style.height = "0px";
      aboutVisible = false;
   }
   else
   {
      dropdown.style.height = "auto";
      aboutVisible = true;
   }
}

let edVisible = false;
function toggleEd() {
   let dropdown = document.querySelector("#ed-list");
   if (edVisible)
   {
      dropdown.style.height = "0px";
      edVisible = false;
   }
   else
   {
      dropdown.style.height = "auto";
      edVisible = true;
   }
}

let expVisible = false;
function toggleExp() {
   let dropdown = document.querySelector("#exp-list");
   if (expVisible)
   {
      dropdown.style.height = "0px";
      expVisible = false;
   }
   else
   {
      dropdown.style.height = "auto";
      expVisible = true;
   }
}

let intVisible = false;
function toggleInt() {
   let dropdown = document.querySelector("#int-list");
   if (intVisible)
   {
      dropdown.style.height = "0px";
      intVisible = false;
   }
   else
   {
      dropdown.style.height = "auto";
      intVisible = true;
   }
}
*/

   ////////////////////////////
  // controls changing view //
 // if window is too small //
////////////////////////////

window.addEventListener("load", checkSpace, false);
window.addEventListener("resize", checkSpace, false);
                  
let out = document.querySelector(".output");
  
function checkSpace() {
   let windowWidth = document.body.clientWidth;
   let buttonBarWidth = 890;
   
   if (buttonBarWidth > windowWidth)
   {
      let buttons = document.querySelectorAll(".header-button");
      buttons.forEach(function(button) { 
         //dropdown.style.height = "0px";
         button.style.width = "100vw";
      })
      
      let dropdowns = document.querySelectorAll(".button-list");
      dropdowns.forEach(function(dropdown) { 
         //dropdown.style.height = "0px";
         //dropdown.style.display = "block";
         dropdown.style.width = "100vw";
         dropdown.style.left = "0px";
      })
      
      let menuToggle = document.querySelector(".menu-toggle");
      menuToggle.style.width = "50px";
      
   }
   else
   {
      
   }
   
   out.textContent = "3";
}

let menuVisible = false;
function toggleMenu() {
   if (menuVisible)
   {
     
   }
   else 
   {
      
   }
}

