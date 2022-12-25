let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");
let filteractivity = document.getElementById("filteractivity");

// let isEmpty = str => !str.trim().length;
//      if (isEmpty(inputText.value)) {
//         inputText.value = "";
//      }else{
//          true;
//      }

addToDoButton.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-style");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    let removeButton = document.createElement("button");
    removeButton.classList.add("actionbuttons");
    toDoContainer.appendChild(removeButton);
    removeButton.innerHTML = "Remove";


    let editButton = document.createElement("button");
    editButton.classList.add("actionbuttons");
    toDoContainer.appendChild(editButton);
    editButton.innerHTML = "Edit";

    let checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    toDoContainer.appendChild(checkbox);
    checkbox.type = "checkbox";



    // Buna erişmeyi denedim
    // filteractivity.addEventListener("click", function(){
    //     if (filteractivity.innerText == "completed") {
    //         console.log(checked.paragraph);
    //     } else{
    //         paragraph.style.opacity = "0";
    //     }
    // });


    removeButton.addEventListener("click", function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(removeButton);
        toDoContainer.removeChild(editButton);
        toDoContainer.removeChild(checkbox);
    });

    editButton.addEventListener("click", function(){

        if (editButton.innerHTML.toLocaleLowerCase() == "edit") {
            editButton.innerHTML = "Save";
            paragraph.removeAttribute("readonly");
            paragraph.focus();
            inputText.value = text;
        } else {
            editButton.innerHTML = "Edit";
            paragraph.setAttribute("readonly", "readonly");
        }
    });

    checkbox.addEventListener("click", function(){
        if (checkbox.checked == true) {
            paragraph.style.textDecoration = "line-through #29d9d5";
        } else {
            paragraph.style.textDecoration = "none";
        }
    });

    clearToDo.addEventListener("click", function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(removeButton);
        toDoContainer.removeChild(editButton);
        toDoContainer.removeChild(checkbox);
    });
})