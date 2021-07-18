   //////////////////////////
  // controls opening and //
 // closing of dropdowns //
//////////////////////////

// used to store dropdown states
let aboutVisible = false;
let edVisible = false;
let expVisible = false;
let intVisible = false;

function closeAll() {
   if (aboutVisible)
   {
      toggleAbout();
   }
   if (edVisible) 
   {
      toggleEd();
   }
   if (expVisible)
   {
      toggleExp();
   }
   if (intVisible)
   {
      toggleInt();
   }
}

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
      closeAll();
      dropdown.style.height = "auto";
      aboutVisible = true;
   }
}

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
      closeAll();
      dropdown.style.height = "auto";
      edVisible = true;
   }
}

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
      closeAll();
      dropdown.style.height = "auto";
      expVisible = true;
   }
}

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
      closeAll();
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
   // calculate widths
   let windowWidth = document.body.clientWidth;
   let buttonBarWidth = 890;
   
   // compare widths
   if (buttonBarWidth > windowWidth) // if too small
   {
      // reformat main buttons to collapse to the side
      let dropdowns = document.querySelectorAll(".header-button");
      dropdowns.forEach(function(dropdown) { 
         dropdown.style.height = "0px";
         dropdown.style.display = "block";
         dropdown.style.width = "100vw";
         dropdown.style.position = "absolute";
      })
      
      let lists = document.querySelectorAll(".button-list");
      lists.forEach(function(list) { 
         list.style.height = "0px";
         list.style.display = "block";
         list.style.width = "100vw";
      })
      
      // show toggle
      let menuToggle = document.querySelector(".menu-toggle");
      menuToggle.style.width = "50px";
   }
   else
   {
      // close menu if necessary
      if (menuVisible)
      {
         toggleMenu();
      }
      
      // reformat main buttons into a line
      let dropdowns = document.querySelectorAll(".header-button");
      dropdowns.forEach(function(dropdown) { 
         dropdown.style.display = "inline-block";
         dropdown.style.height = "50px";
      })
      
      // reset button widths
      document.querySelector("#about-button").style.width = "160px";
      document.querySelector("#education-button").style.width = "240px";
      document.querySelector("#experience-button").style.width = "250px";
      document.querySelector("#interest-button").style.width = "240px";
      
      // reset horizontal positions for lists
      // about list is always at 0
      document.querySelector("#ed-list").style.left = "160px";
      document.querySelector("#exp-list").style.left = "400px";
      document.querySelector("#int-list").style.left = "650px";
      
      let menuToggle = document.querySelector(".menu-toggle");
      menuToggle.style.width = "0px";
   }
   
   out.textContent = windowWidth;
}

let menuVisible = false;
function toggleMenu() {
   if (menuVisible)
   {
      let dropdowns = document.querySelectorAll(".header-button");
      dropdowns.forEach(function(dropdown) { 
         dropdown.style.height = "0px";
      })
      menuVisible = false;
   }
   else 
   {
      let dropdowns = document.querySelectorAll(".header-button");
      dropdowns.forEach(function(dropdown) { 
         dropdown.style.height = "50px";
      })
      menuVisible = true;
   }
}
