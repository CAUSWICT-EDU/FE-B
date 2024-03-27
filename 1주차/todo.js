let countTodo = 1;

function enterKey() {
    if(window.event.keyCode == 13) {
        const getToDo = document.getElementById("todo_input").value;
        const newToDoDiv = document.createElement("span");
        newToDoDiv.innerHTML = getToDo;
        getToDo.value = null;

        newToDoDiv.setAttribute("class", "whatToDo_detail");
        newToDoDiv.setAttribute("id", "WhatToDoId_" + countTodo);

        const getToDoList = document.getElementById("whatToDoId");
        getToDoList.appendChild(newToDoDiv);

        const toDoBtnDiv = document.createElement("div");
        toDoBtnDiv.innerHTML = "<button>삭제</button><button>수정</button>";
        const getBtnId = document.getElementById("id_" + countTodo);
        newToDoDiv.appendChild(toDoBtnDiv);

        countTodo++;
    }
}