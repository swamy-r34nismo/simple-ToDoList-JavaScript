var input = document.getElementById("uInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");



//on mouseclick ul
ul.addEventListener("click",itemStrikeThrough);

//on MouseClick
button.addEventListener("click", addAfterClick);

//On Keypress Enter 
input.addEventListener("keypress",addAfterEnter);

// StrikeThrough Function
function itemStrikeThrough(e){
    // e.target is our targetted element.
    // try doing console.log(e.target.nodeName), it will result LI
    if(e.target && e.target.nodeName == "LI") {
        e.target.classList.toggle("done");
    }
}

//click function
function addAfterClick(){
  if(input.value){
    createListElement();
  }
}

//enter function
function addAfterEnter(e){
  if(input.value && e.which === 13){
    createListElement();
  }
}

//Delete parent(LI) on delete button
function removeParent(e){
    e.target.parentNode.remove();
}

function createListElement(){
  //creating an element li
  var li = document.createElement("li");
  //attaching the text attritube to the li using appendchild
  li.appendChild(document.createTextNode(input.value));
  //attaching the created li to the ul in out webpage
  ul.appendChild(li);
  //clearing the input space 
  input.value = "";

  //creating new delete button
  var button = document.createElement("button");
  //attaching the text attritube to the li using appendchild
  button.appendChild(document.createTextNode("Delete!"));
  //attaching the created delete button to the li in out webpage
  li.appendChild(button);

  //delete the LI element
  button.addEventListener("click",removeParent);
}