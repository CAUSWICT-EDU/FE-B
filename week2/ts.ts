document.addEventListener('DOMContentLoaded', () => { //문서 업로드 되면 실행
    const todoForm = document.getElementById('todo-form') as HTMLFormElement;
    const todoInput = document.getElementById('todo-input') as HTMLInputElement;
    const todoList = document.getElementById('todo-list') as HTMLUListElement;
    const todoTemplate = document.getElementById('todo-template') as HTMLTemplateElement;

    // 할일 추가
    todoForm.addEventListener('click', (event: Event) => {
        event.preventDefault(); // 추가 안하면 새로고침 됨

        const todoText: string = todoInput.value; // todoText에 입력한 값 저장
        if (todoText !== '') {
            addTodoItem(todoText); // 함수 호출
            todoInput.value = ''; // 입력 필드 초기화
        }
    });

    // 할일 삭제
    todoList.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement; // 클릭된 요소를 가리키는 변수

        // 삭제 버튼
        if (target.classList.contains('delete-btn')) {
            const todoItem = target.closest('.todo-item') as HTMLElement; // 삭제버튼이 속한 곳 찾기
            if (todoItem) {
                todoList.removeChild(todoItem);
            }
        }
    });

    // 할일 추가 함수
    function addTodoItem(text: string): void {
        const todoItem = document.importNode(todoTemplate.content, true) as DocumentFragment; // 템플릿 복제
        const itemTitle = todoItem.querySelector('.item-title') as HTMLElement; // item-title 찾아서 저장

        if (itemTitle !== null) {
            itemTitle.textContent = text;
            todoList.appendChild(todoItem);
        }
    }
});
