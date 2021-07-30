   //////////////////////////
  // controls opening and //
 // closing of dropdowns //
//////////////////////////

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
     /*
      let dropdowns = document.querySelectorAll(".header-button");
      dropdowns.forEach(function(dropdown) { 
         dropdown.style.height = "0px";
         dropdown.style.display = "block";
         dropdown.style.width = "100vw";
      })
      
      let menuToggle = document.querySelector(".menu-toggle");
      menuToggle.style.width = "50px";
      */
   }
   else
   {
      /*
      if (menuVisible)
      {
         toggleMenu();
      }
      
      let dropdowns = document.querySelectorAll(".header-button");
      dropdowns.forEach(function(dropdown) { 
         dropdown.style.display = "inline-block";
         dropdown.style.height = "50px";
      })
      
      let menuToggle = document.querySelector(".menu-toggle");
      menuToggle.style.width = "0px";
      */
      
      let abt = document.querySelector("#about-button");
      let abt2 = document.querySelector("#about-text");
      abt.style.width = abt2.style.width + "px";
      document.querySelector("#education-button").style.width = "240px";
      document.querySelector("#experience-button").style.width = "250px";
      document.querySelector("#interest-button").style.width = "240px";
   }
   
   out.textContent = abt2.style.width + " 2";
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

