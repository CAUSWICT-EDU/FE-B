let countTodo: number = 1;
/*
TS 알게된 점

1. 키보드 이벤트: <KeyboardEvent>
2. 함수에서 리턴 값이 없으면 => :void 사용
3. 웹에서 받는 입력: HTMLInputElement
4. div => HTMLDivElement
5. getElementById => :HTMLElement
6. button => HTMLButtonElement
==> 그냥 형식에 맞게 HTML--Element 지정해주면 되는듯!
7. <>로 타입 지정 가능
==> (ex) const getTar: HTMLElement = <HTMLElement>getTarChild.parentElement.parentElement;

*/
function enterKey(): void {
    if ((<KeyboardEvent>window.event).keyCode == 13) {
        const getToDo: string = (<HTMLInputElement>document.getElementById("todo_input")).value;
        const newToDoDiv: HTMLDivElement = document.createElement("div");
        newToDoDiv.innerHTML = getToDo;
        (<HTMLInputElement>document.getElementById("todo_input")).value = "";

        newToDoDiv.setAttribute("class", "whatToDo_detail");
        newToDoDiv.setAttribute("id", "WhatToDoId_" + countTodo);

        const getToDoList: HTMLElement = document.getElementById("whatToDoId");
        getToDoList.appendChild(newToDoDiv);

        const toDoBtnDiv: HTMLDivElement = document.createElement("div");

        const DelBtn: HTMLButtonElement = document.createElement("button");

        DelBtn.setAttribute("id", "DelBtn_" + countTodo);
        DelBtn.setAttribute("class", "toDoBtn");
        DelBtn.addEventListener("click", delToDo);
        DelBtn.innerHTML = "삭제";


        const fixBtn: HTMLButtonElement = document.createElement("button");
        fixBtn.setAttribute("id", "fixBtn_" + countTodo);
        fixBtn.setAttribute("class", "toDoBtn");
        fixBtn.innerHTML = "수정";

        toDoBtnDiv.appendChild(DelBtn);
        toDoBtnDiv.appendChild(fixBtn);
        newToDoDiv.appendChild(toDoBtnDiv);

        countTodo++;
    }
}

function clickAddBtn(): void {
    const getToDo: string = (<HTMLInputElement>document.getElementById("todo_input")).value;
    const newToDoDiv: HTMLDivElement = document.createElement("div");
    newToDoDiv.innerHTML = getToDo;
    (<HTMLInputElement>document.getElementById("todo_input")).value = "";

    newToDoDiv.setAttribute("class", "whatToDo_detail");
    newToDoDiv.setAttribute("id", "WhatToDoId_" + countTodo);

    const getToDoList: HTMLElement = document.getElementById("whatToDoId");
    getToDoList.appendChild(newToDoDiv);

    const toDoBtnDiv: HTMLDivElement = document.createElement("div");

    const DelBtn: HTMLButtonElement = document.createElement("button");

    DelBtn.setAttribute("id", "DelBtn_" + countTodo);
    DelBtn.setAttribute("class", "toDoBtn");
    DelBtn.addEventListener("click", delToDo);
    DelBtn.innerHTML = "삭제";


    const fixBtn: HTMLButtonElement = document.createElement("button");
    fixBtn.setAttribute("id", "fixBtn_" + countTodo);
    fixBtn.setAttribute("class", "toDoBtn");
    fixBtn.innerHTML = "수정";

    toDoBtnDiv.appendChild(DelBtn);
    toDoBtnDiv.appendChild(fixBtn);
    newToDoDiv.appendChild(toDoBtnDiv);

    countTodo++;
}

function delToDo(): void {
    const tarId: string = this.id;
    const getTarChild: HTMLElement = document.getElementById(tarId);
    const getTar: HTMLElement = <HTMLElement>getTarChild.parentElement.parentElement;
    getTar.style.display = "none";
}

function fixToDo(): void {
    const tarId: string = this.id;
    const getTarChild: HTMLElement = document.getElementById(tarId);
    const getTar: HTMLElement = <HTMLElement>getTarChild.parentElement.parentElement;
    getTar.innerHTML = "<input placeholder='오늘의 계획은 무억인가요?'>";
}

//TS 문법으로 고쳐본 부분
function setClock() :void {
    const currentDate = new Date();
    const currentDate_hour: number = currentDate.getHours();
    const currentDate_minute:  number = currentDate.getMinutes();
    let currentDate_seconds: any = currentDate.getSeconds();

    if(currentDate_seconds < 10) {
        currentDate_seconds = "0" + currentDate_seconds;
    }

    const currTime = currentDate_hour + ":" + currentDate_minute + ":" + currentDate_seconds;
    document.getElementById("getClock").innerHTML = currTime;
}