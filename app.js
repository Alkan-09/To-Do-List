let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");

addToDoButton.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-style");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    let removeButton = document.createElement("button");
    removeButton.classList.add("action-buttons");
    toDoContainer.appendChild(removeButton);
    removeButton.innerHTML = "Remove";


    removeButton.addEventListener("click", function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(removeButton);
        toDoContainer.removeChild(addingButton);
    });

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function(){
        paragraph.style.textDecoration = "none";
    });

    clearToDo.addEventListener("click", function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(removeButton);
        toDoContainer.removeChild(addingButton);
    });
})