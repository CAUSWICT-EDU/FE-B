import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [content, setContent] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const AddTaskList = () => {
    if (content.trim() !== '') {
      if (editIndex !== null) {
        // 수정 중
        const newTasks = [...tasks];
        newTasks[editIndex] = content;
        setTasks(newTasks);
        setEditIndex(null);
      } else {
        // 새로운 항목 추가
        setTasks([...tasks, content]);
      }
      setContent('');
    } else {
      alert('할 일을 입력하세요');
    }
  };

  const delTaskList = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setContent(tasks[index]);
    setEditIndex(index);
  };

  const inputChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="ICT_ass3">
      <h1>To-Do List</h1>
      <div className="inputArea">
        <input
          type="text"
          onChange={inputChange}
          value={content}
          placeholder="오늘은 무엇을 할까요?"
        />

        <button onClick={AddTaskList}>추가</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <div key={index} className="list">
            {editIndex === index ? (
                <button onClick={() => AddTaskList()}>저장</button>
            ) : (
              <>
                <span>{task}</span>
                <button onClick={() => delTaskList(index)}>삭제</button>
                <button onClick={() => editTask(index)}>수정</button>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
