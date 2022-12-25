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

function onFilter() {
    let filterValue = filteractivity.value;

    if(filterValue == 'completed') {
        toDoContainer.childNodes.forEach(element => {

            let check = element.lastChild;

            console.log(check.value)

        });

    }else if(filterValue == 'uncompleted') {
        for(let i=1; i<toDoContainer.childNodes.length; i++)
        console.log(i);
    } else {
        for(let i=1; i<toDoContainer.childNodes.length; i++)
        console.log(i);
    }
}


addToDoButton.addEventListener("click", function(){

    if(!inputText.value == '') {

        let div = document.createElement("div");
        div.setAttribute('class', 'to-do-element');

        toDoContainer.appendChild(div);

        let paragraph = document.createElement("p");
        paragraph.classList.add("paragraph-style");
        div.appendChild(paragraph);
        paragraph.innerHTML = inputText.value;
    
        inputText.value = "";
    
        let removeButton = document.createElement("button");
        removeButton.classList.add("actionbuttons");
        div.appendChild(removeButton);
        removeButton.innerHTML = "Remove";
    
    
        let editButton = document.createElement("button");
        editButton.classList.add("actionbuttons");
        div.appendChild(editButton);
        editButton.innerHTML = "Edit";
    
        let checkbox = document.createElement("input");
        checkbox.classList.add("checkbox");
        div.appendChild(checkbox);
        checkbox.type = "checkbox";
    
        console.log(paragraph, removeButton, editButton, checkbox);

        clearToDo.addEventListener("click", function(){
            toDoContainer.removeChild(div);
        });
        
        checkbox.addEventListener("click", function(){
            if (checkbox.checked == true) {
                paragraph.style.textDecoration = "line-through #29d9d5";
            } else {
                paragraph.style.textDecoration = "none";
            }
        });
        
        removeButton.addEventListener("click", function(){
            toDoContainer.removeChild(div);
        });
        
        editButton.addEventListener("click", function(){
        
            if (editButton.innerHTML.toLocaleLowerCase() == "edit") {
                editButton.innerHTML = "Save";
                paragraph.removeAttribute("readonly");
                paragraph.focus();
                inputText.value = paragraph.innerText;
            } else {
                editButton.innerHTML = "Edit";
                paragraph.setAttribute("readonly", "readonly");
                paragraph.innerText = inputText.value;
                inputText.value = "";
            }
        });
    
    }


})

