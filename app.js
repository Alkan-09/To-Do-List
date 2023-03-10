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
    var modelCbs = document.querySelectorAll(".to-dos input[type='checkbox']");

    if(filterValue == 'completed') {
        getListOfCheckboxes(modelCbs, 'checked');
      
    }else if(filterValue == 'uncompleted') {
        getListOfCheckboxes(modelCbs, 'unChecked');

    } else {
        getListOfCheckboxes(modelCbs, 'all');
    }


  }
  
  function getListOfCheckboxes(checkboxes, type) {

    if (checkboxes && checkboxes.length > 0) {

        for (var i = 0; i < checkboxes.length; i++) {
            var cb = checkboxes[i];
      
            cb.parentElement.style.display = "block";

          }


        if(type == 'checked') {
            for (var i = 0; i < checkboxes.length; i++) {
                var cb = checkboxes[i];
          
                if (!cb.checked) {
                    cb.parentElement.style.display = "none";
                }
              }
        }
    
        if(type == 'unChecked')
        {
            for (var i = 0; i < checkboxes.length; i++) {
                var cb = checkboxes[i];
          
                if (cb.checked) {
                    cb.parentElement.style.display = "none";
                }
              }
        }

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

