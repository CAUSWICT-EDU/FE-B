document.addEventListener('DOMContentLoaded', function() { //문서 업로드 되면 실행
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  const todoTemplate = document.getElementById('todo-template');

  // 할일 추가
  todoForm.addEventListener('click', function(event) {
    event.preventDefault(); // 추가 안하면 새로고침 됨

    const todoText = todoInput.value; //todoText에 입력한 값 저장
    if (todoText !== '') {
      addTodoItem(todoText); //함수 부르기
      todoInput.value = ''; // 입력 필드 초기화
    }
  });

  // 할일 삭제 및 수정
  todoList.addEventListener('click', function(event) {
    const target = event.target; //클릭된 요소를 가리키는 변수

    // 삭제 버튼
    if (target.classList.contains('delete-btn')) {
      const todoItem = target.closest('.todo-item'); //삭제버튼이 속한 곳 찾기
      todoList.removeChild(todoItem);
    }
    // 수정 버튼
    else if (target.classList.contains('edit-btn')) {
      const todoItem = target.closest('.todo-item'); //수정버튼이 속한 곳 찾기
      const itemTitle = todoItem.querySelector('.item-title');
      const newText = prompt('새로운 내용 :', itemTitle.textContent); //팝업 띄우기
      itemTitle.textContent = newText;
    }
  });

  // 할일 추가 함수
  function addTodoItem(text) {
    const todoItem = document.importNode(todoTemplate.content, true); //템플릿 복제
    const itemTitle = todoItem.querySelector('.item-title'); //item-title 찾아서 저장
    const deleteBtn = todoItem.querySelector('.delete-btn');
    const editBtn = todoItem.querySelector('.edit-btn');

    itemTitle.textContent = text;
    todoList.appendChild(todoItem);
  }
});
