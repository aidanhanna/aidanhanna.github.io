// This file is used to control collapsing 
// and expanding semesters and courses on 
// the class page 

//stores visibility of each class and semester
//'true' is visible, 'false' is hidden
let courses = {F20: { "semester": false, "ECSE1010": false, "CSCI1100": false, "IHSS1972": false, "MATH2010": false, "MATH2400": false },
               S21: { "semester": false, "ECSE1010": false, "CSCI1100": false, "IHSS1972": false, "MATH2010": false, "MATH2400": false },
               F21: { "semester": false, "ECSE1010": false, "CSCI1100": false, "IHSS1972": false, "MATH2010": false, "MATH2400": false },
               S22: { "semester": false}};
              

//semester is formatted like 'F20'
//id is the HTML id NOT including '#'
//type is either 'course' or 'semester'
function toggleCourses(semester, id, type) {
  
  let out = document.querySelector(".output");
  out.textContent = "#" + id + ", " + courses[semester][id] + ", " + courses[semester]["semester"];
  
  //for toggling a single class
  if (type === 'course')
  {
    //find course to toggle
    let course = document.querySelector("#" + id);
    
    //set height to change visibility
    if (courses[semester][id])
    {
      course.style.height = "0px";
    }
    else
    {
      course.style.height = "auto";
    }
    
    //update state
    courses[semester][id] = !courses[semester][id];
  }
  
  //for toggling a whole semester
  else if (type === 'semester')
  {
    //update state
    courses[semester]["semester"] = !courses[semester]["semester"];
    
    //find semester to toggle
    let sem = document.querySelector("#" + id);
    
    //set height to change visibility
    if (courses[semester]["semester"])
    {
      sem.style.height = "0px";//hide all classes (if open)
      for (let courseID in courses[semester])
      {
        if (courses[semester][courseID]) //if open
        {
          let course = document.querySelector("#" + id);
          course.style.height = "0px";
          courses[semester][courseID] = !courses[semester][courseID];
        }
      }
    }
    else
    {
      sem.style.height = "auto";
      out.textContent = "doin it";
    }
    
  }
}
