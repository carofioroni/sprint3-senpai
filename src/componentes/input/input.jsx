import React, { useState } from 'react';

const todos = [
  { id: 1, content: "Tomar agua", completed: true },
  { id: 2, content: "Finalizar práctica de estados y props", completed: false },
  { id: 3, content: "Tomar agua", completed: false },
  { id: 4, content: "Compartir lo aprendido con algún compañero", completed: false },
  { id: 5, content: "Probar pizza italiana", completed: false },
  { id: 6, content: "Completar el desafío del sprint 3", completed: false },
];

function Input() {
  const [newTask, setNewTask] = useState('');
  const [array, setArray] = useState(todos);

  function onChangeHandler(e) {
    setNewTask (e.target.value)}
  
  function addTask() {
    const nuevaTarea = { id: todos.length + 1, content: newTask, completed: false };
    setArray(prevArray => [...prevArray, nuevaTarea]);
    setNewTask('');
    }


  return (
    <>
      <input   value={newTask} placeholder='Agregar nueva tarea' onChange={onChangeHandler} onClick ={addTask} />
      <ul>
        {array.map(todo => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );
}

export default Input;