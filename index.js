let input = document.querySelector(".input");
let addButton = document.querySelector(".addButton");
let editButton = document.querySelector(".editButton");
let deleteButton = document.querySelector(".deleteButton");
let Container = document.querySelector(".container");

function insert(){
    let input = document.getElementsByClassName("input")[0].value 
    if(input == ""){
        alert("Please add task in box")
        delToDo();
    }
    setTimeout(clearInp, 2000);
    console.log(input);

    let item = document.createElement("div");
    let item_input = document.createElement("div");
    let editButton = document.createElement("button");
    editButton.style.marginLeft = "60px";
    let deleteButton = document.createElement("button");

    item.classList.add("item");
    item_input.classList.add("item_input");

    item_input.innerText = input;
    item_input.setAttribute("readonly", true);

    editButton.classList.add("editButton");
    deleteButton.classList.add("deleteButton");


    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";

//Append 
    item_input.appendChild(editButton);
    item_input.appendChild(deleteButton);

    item.appendChild(item_input);
    Container.appendChild(item);

// EditBtn
    editButton.addEventListener("click", editToDo);
    function editToDo(){
        if(editButton.innerText == "Edit"){
            item_input.removeAttribute("readonly");
            editButton.innerText = "Save";
        }else{
        item_input.setAttribute("readonly", "readonly");
            editButton.innerText = "Edit";
        }
    };

//deleteBtn
    deleteButton.addEventListener("click", delToDo);
    function delToDo(){
        item.classList.remove("item");
        item.innerHTML = "";
        console.log("del");
        
    }
    function clearInp(){
        input.value = "dd";
        console.log(input);
    }
};

addButton.addEventListener("click", insert);






