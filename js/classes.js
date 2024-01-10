// This file is used to control collapsing 
// and expanding semesters and courses on 
// the class page 

//stores visibility of each class and semester
//'true' is visible, 'false' is hidden
let courses = {
    // Fall 2020
    "CSCI1100": false,
    "ECSE1010": false,
    "IHSS1972": false, 
    "MATH2010": false,
    "MATH2400": false,

    // Spring 2021
    "CSCI1200": false,
    "ECSE2010": false, 
    "ECSE2500": false,
    "ENGR2350": false, 
    "PHYS1200": false,

    // Fall 2021
    "CSCI2200": false,
    "ECSE2100": false,
    "ECSE2210": false,
    "ECSE2610": false,
    "ECSE4480": false,
    "ENGR1400": false,

    // Spring 2022
    "ADMN1030": false,
    "COGS2120": false,
    "COMM2520": false,
    "CSCI2300": false,
    "ECSE2660": false,
    "ECSE2900": false,
    "ENGR4010": false,

    // Summer 2022
    "CSCI4210": false,
    "ECSE2110": false,
    "ECSE2410": false,
    "ENGR2050": false,

    // Spring 2023
    "COGS4880": false,
    "CSCI4380": false,
    "ECSE2050": false,
    "ECSE4220": false,
    "STSO4100": false,

    // Fall 2023
    "COGS4420": false,
    "ECSE4900": false
}
              

//id is the HTML id NOT including '#'
function toggleCourse(id) {
  
    let course = document.querySelector("#" + id);
    
  //set height to change visibility
  if (courses[id])
  {
    course.style.height = "0px";
  }
  else
  {
    course.style.height = "auto";
  }
    
    //update state
    courses[id] = !courses[id];
}
