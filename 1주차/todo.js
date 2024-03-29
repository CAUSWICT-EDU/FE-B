let countTodo = 1;

function enterKey() {
    if(window.event.keyCode == 13) {
        const getToDo = document.getElementById("todo_input").value;
        const newToDoDiv = document.createElement("div");
        newToDoDiv.innerHTML = getToDo;
        getToDo.value = null;

        newToDoDiv.setAttribute("class", "whatToDo_detail");
        newToDoDiv.setAttribute("id", "WhatToDoId_" + countTodo);

        const getToDoList = document.getElementById("whatToDoId");
        getToDoList.appendChild(newToDoDiv);

        const toDoBtnDiv = document.createElement("div");

        const DelBtn = document.createElement("button");

        DelBtn.setAttribute("id", "DelBtn_" + countTodo);
        DelBtn.setAttribute("class", "toDoBtn");
        DelBtn.addEventListener("click", delToDo);
        DelBtn.innerHTML = "삭제";


        const fixBtn = document.createElement("button");
        fixBtn.setAttribute("id", "fixBtn_" + countTodo);
        fixBtn.setAttribute("class", "toDoBtn");
        fixBtn.innerHTML = "수정";
        

        toDoBtnDiv.appendChild(DelBtn);
        toDoBtnDiv.appendChild(fixBtn);
        newToDoDiv.appendChild(toDoBtnDiv);

        countTodo++;
    }
}

function clickAddBtn() {
    const getToDo = document.getElementById("todo_input").value;
    const newToDoDiv = document.createElement("div");
    newToDoDiv.innerHTML = getToDo;
    getToDo.value = null;

    newToDoDiv.setAttribute("class", "whatToDo_detail");
    newToDoDiv.setAttribute("id", "WhatToDoId_" + countTodo);

    const getToDoList = document.getElementById("whatToDoId");
    getToDoList.appendChild(newToDoDiv);

    const toDoBtnDiv = document.createElement("div");

    const DelBtn = document.createElement("button");

    DelBtn.setAttribute("id", "DelBtn_" + countTodo);
    DelBtn.setAttribute("class", "toDoBtn");
    DelBtn.addEventListener("click", delToDo);
    DelBtn.innerHTML = "삭제";


    const fixBtn = document.createElement("button");
    fixBtn.setAttribute("id", "fixBtn_" + countTodo);
    fixBtn.setAttribute("class", "toDoBtn");
    fixBtn.innerHTML = "수정";
        

    toDoBtnDiv.appendChild(DelBtn);
    toDoBtnDiv.appendChild(fixBtn);
    newToDoDiv.appendChild(toDoBtnDiv);

    countTodo++;
}


 function delToDo() {
    const tarId = this.id;
    const getTarChild = document.getElementById(tarId);
    const getTar = getTarChild.parentElement.parentElement;
    getTar.style.display = "none";
}