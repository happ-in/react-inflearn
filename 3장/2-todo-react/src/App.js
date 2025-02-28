import React, { useState } from 'react';

// 비즈니스와 ui가 분리된 react
function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState('');
  const [showOdd, setShowOdd] = useState(false);

  function onAdd(){
    const todo = {id: currentId, desc};
    setCurrentId(currentId + 1)
    setTodoList([...todoList, todo]);
    setDesc('');
  }
  function onDel(e){
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }
  function onSaveToServe() {}

  return (
    <div>
      <h3>할 일 목록</h3>
      <ul>
        {todoList
        .filter((_, index) => showOdd ? index % 2 === 0 : true)
        .map(todo => (
          <li key={todo.id}>
            <span>{todo.desc}</span>
            <button data-id={todo.id} onClick={onDel}>삭제</button>
          </li>
        ))}
      </ul>
      <input type='text' value={desc} onChange={e => setDesc(e.target.value)}/>
      <button onClick={onAdd}>추가</button>
      <button onClick={() => setShowOdd(!showOdd)}> 홀수행보기 on/off</button>
      <button onClick={onSaveToServe}>서버에 저장</button>
    </div>
  );
}

export default App;
