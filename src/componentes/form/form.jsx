import { useState } from 'react';
import './form.css'

function Form({ list, setList, theme }){
    const [newTask, setNewTask] = useState('');
    
    function onChangeHandler(e) {
        setNewTask (e.target.value)}
      
    function addTask() {
        if (newTask.trim() !== ''){
        const lastItemId = list[list.length - 1].id;
        const newId = lastItemId + 1;
        const nuevaTarea = { id: newId, content: newTask, completed: false };
        setList(prevList => [...prevList, nuevaTarea]);
        setNewTask('');}
        }

    function onKeyDownHandler(e) {
        if (e.key === 'Enter') {
        // e.preventDefault();
        addTask();}
        }

        return (
            <>
              <input 
              className= {theme === "dark"? 'input-bg-dark-mode' : ''}
              value={newTask} 
              placeholder='Agregar nueva tarea' 
              onChange={onChangeHandler} 
              onKeyDown={onKeyDownHandler} />
            </>
          );
        }
export default Form;

