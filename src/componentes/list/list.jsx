import './list.css'
import { useState, useEffect } from 'react';


function List ({list, setList, theme}){
  const [filtro, setFiltro] = useState(list)

  const tick = <svg xmlns="http://www.w3.org/2000/svg" width="11" 
  height="9"><path fill="none" stroke="#FFF" stroke-width="2" 
  d="M1 4.304L3.696 7l6-6"/></svg>
  
  const actualizarFiltrado = () => {
    setFiltro(list)
  }

  useEffect(() => {
    actualizarFiltrado()
  }, [list])

  const handleToggle = (id) => {
    setList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  function filtrarCompletados () {
    let itemsCompleted = list.filter(todo => todo.completed )
    setFiltro(itemsCompleted)
  }
  function clearCompleted (){
    setList((prevList) => prevList.filter((todo) => !todo.completed));
  }
  function filtrarActivos () {
    let itemsActive = list.filter(todo => !todo.completed )
    setFiltro(itemsActive)
  }
  function filtrarTodos () {
    setFiltro(list)
  }
  let itemsLeft = list.filter(todo => !todo.completed )
  let numberOfItemsLeft = itemsLeft.length
    
    return (
      <div className='lista'>
    <ul className= {theme === "dark"? 'list-bg-dark-mode' : ''}>
    {filtro.map(todo => (
      <li key={todo.id} >
        <button className='rounded' onClick={() => handleToggle(todo.id)}> 
        {/* {todo.completed ? '✓' : ' '}</button> */}
        {todo.completed && <div className='tick-button'>{tick}</div> }</button>
        <span className={`${todo.completed ? 'taskCompleted' : ''}
       ${theme === "dark"? 'list-fontColor-dark-mode' : ''}`}>
        {todo.content}</span>
        
      </li>
      
    ))}
    <div className='list-footer'>
      <span className={`items-left ${theme === "dark" && 'items-left-dark-mode' }`}>{numberOfItemsLeft} items left </span>
      <div className= 'filters-desktop'>
        <button className = {theme === "dark" && 'filters-dark-mode' } onClick ={filtrarTodos}>All</button>
        <button className = {theme === "dark" && 'filters-dark-mode' } onClick ={filtrarActivos}>Active</button>
        <button className = {theme === "dark" && 'filters-dark-mode' } onClick ={filtrarCompletados}>Completed</button>
      </div>
      <button className= {theme === "dark"? 'clear-completed-dark-mode' : ''} onClick={clearCompleted}>Clear Completed</button>
    </div>
  </ul> 
   <div className= {`filters-mobile ${theme === "dark" && 'filters-mobile-dark-mode' }`}>
   <button className = {theme === "dark" && 'filters-dark-mode' } onClick ={filtrarTodos}>All</button>
   <button className = {theme === "dark" && 'filters-dark-mode' } onClick ={filtrarActivos}>Active</button>
   <button className = {theme === "dark" && 'filters-dark-mode' } onClick ={filtrarCompletados}>Completed</button>
 </div>
 </div>
 )
 
}
export default List;



   


