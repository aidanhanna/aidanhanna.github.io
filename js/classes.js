// This file is used to control collapsing 
// and expanding semesters and courses on 
// the class page 

let courses = {F20: { "semester": false, "ECSE1010": false, "CSCI1100": false, "IHSS1972": false, "MATH2010": false, "MATH2400": false },
               S21: { "semester": false, "ECSE1010": false, "CSCI1100": false, "IHSS1972": false, "MATH2010": false, "MATH2400": false },
               F21: { "semester": false, "ECSE1010": false, "CSCI1100": false, "IHSS1972": false, "MATH2010": false, "MATH2400": false },
               S22: { "semester": false}};
              

//semester is formatted like 'F20'
//id is the HTML id NOT including '#'
//type is either 'course' or 'semester'
function toggleCourses(semester, id, type) {
  
  let out = document.querySelector(".output");
  out.textContent = "#" + id + ", " + courses[semester][id] + ", " + course.style.height;
  
  /*
  if (type === 'course')
  {
    //find course to toggle
    let course = document.querySelector("#" + id)
    course.style.color = "red";
    
    if (courses[semester][id])
    {
      course.style.height = "0px";
    }
    else
    {
      course.style.height = "auto";
    }
    
    courses[semester][id] = !courses[semester][id];
  }
  */
}
