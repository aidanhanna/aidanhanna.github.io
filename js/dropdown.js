   //////////////////////////
  // controls opening and //
 // closing of dropdowns //
//////////////////////////

let aboutVisible = false;
function toggleAbout() {
   let dropdown = document.querySelector("#about-list");
   /*dropdown.style.height = "500px";*/
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
   /*dropdown.style.height = "500px";*/
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
   /*dropdown.style.height = "500px";*/
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
   /*dropdown.style.height = "500px";*/
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

   ////////////////////////////
  // controls changing view //
 // if window is too small //
////////////////////////////

window.addEventListener("load", checkSpace, false);
window.addEventListener("resize", checkSpace, false);
                  
let out = document.querySelector(".output");
  
function checkSpace() {
   let windowWidth = document.body.clientWidth;
   let buttonBarWidth = 1100;
   
   if (buttonBarWidth > windowWidth)
   {
      let dropdowns = document.querySelectorAll(".header-button");
      dropdowns.forEach(function(dropdown) { 
      dropdown.style.display = "none";
      })
      
      let menuToggle = document.querySelector(".menu-toggle");
      menuToggle.style.width = "50px";
   }
   else
   {
      let dropdowns = document.querySelectorAll(".header-button");
      dropdowns.forEach(function(dropdown) { 
      dropdown.style.display = "inline-block";
      })
      
      let menuToggle = document.querySelector(".menu-toggle");
      menuToggle.style.width = "0px";
   }
   
   out.textContent = windowWidth;
}

