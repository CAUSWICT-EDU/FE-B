function addTask() {
    let taskInput = document.getElementById("sendMessage");
    let shownList = document.getElementById("plan");
    let planContent = taskInput.value;
  
    if (planContent.trim() !== "") {
      let listItem = document.createElement("li");
      listItem.textContent = planContent;
      
      //수정버튼
      let editButton=document.createElement("button");
      editButton.textContent="수정";
      editButton.className = "edit-button";
      editButton.onclick=function(){
        let newText=prompt("수정할 내용을 입력하세요.",planContent);
        if(newText!==null){
          listItem.textContent=newText;
        }
      };

      //삭제버튼
      let delButton=document.createElement("button");
      delButton.textContent="삭제";
      delButton.className="delete-button";
      delButton.onclick=function(){
        listItem.remove();
      }

      listItem.appendChild(editButton);
      listItem.appendChild(delButton);
      shownList.appendChild(listItem);
      taskInput.value = "";
    } else {
      alert("할 일을 입력하세요!");
    }
  }
  