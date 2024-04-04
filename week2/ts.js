document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const todoTemplate = document.getElementById('todo-template');
    // 할일 추가
    todoForm.addEventListener('click', (event) => {
        event.preventDefault(); // 추가 안하면 새로고침 됨
        const todoText = todoInput.value; // todoText에 입력한 값 저장
        if (todoText !== '') {
            addTodoItem(todoText); // 함수 호출
            todoInput.value = ''; // 입력 필드 초기화
        }
    });
    // 할일 삭제
    todoList.addEventListener('click', (event) => {
        const target = event.target; // 클릭된 요소를 가리키는 변수
        // 삭제 버튼
        if (target.classList.contains('delete-btn')) {
            const todoItem = target.closest('.todo-item'); // 삭제버튼이 속한 곳 찾기
            if (todoItem) {
                todoList.removeChild(todoItem);
            }
        }
    });
    // 할일 추가 함수
    function addTodoItem(text) {
        const todoItem = document.importNode(todoTemplate.content, true); // 템플릿 복제
        const itemTitle = todoItem.querySelector('.item-title'); // item-title 찾아서 저장
        if (itemTitle !== null) {
            itemTitle.textContent = text;
            todoList.appendChild(todoItem);
        }
    }
});
