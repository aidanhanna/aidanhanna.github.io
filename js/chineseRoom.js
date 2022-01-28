// This file contains all code necessary 
// for the functioning of the game


// Make the DIV element draggable:
Draggable(document.querySelector(".rule-book-1"));

function Draggable(component) {
  let X1 = 0, Y1 = 0, X2 = 0, Y2 = 0;
  if (document.querySelector(component.className + "handle")) {
    // handle will be used to drag if 
    document.querySelector(component.className + "handle").onmousedown = dragOnClick;
  } else {
    // otherwise drag from anywhere
    component.onmousedown = dragOnClick;
  }

  function dragOnClick(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    X2 = e.clientX;
    Y2 = e.clientY;
    document.onmouseup = stopDrag;
    // call a function whenever the cursor moves:
    document.onmousemove = drag;
  }

  function drag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    X1 = X2 - e.clientX;
    Y1 = Y2 - e.clientY;
    X2 = e.clientX;
    Y2 = e.clientY;
    // set the element's new position:
    component.style.top = (component.offsetTop - pos2) + "px";
    component.style.left = (component.offsetLeft - pos1) + "px";
  }

  function stopDrag() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



// 
function SelectLevel(number)
{
  
}


