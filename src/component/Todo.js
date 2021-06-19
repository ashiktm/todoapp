import React from 'react'
import dateFormat from 'dateformat'


function Todo({text,todos,setTodos,todo,date}) {
 const deleteHandler = () => {

   setTodos(todos.filter((el) => el.id !== todo.id ))

 }

 const completeHandler = () => {
    setTodos(todos.map((item)=>{
       if(item.id === todo.id){
          return{
             ...item,completed: !item.completed,
          };
       } return item
    }))
 }
 return (
  <div className="todo">
   <li  className={`todo-item ${todo.completed ? "completed":''}` }>
   {text}<span className="time">
      {dateFormat(
                    date,
                    'dddd, mmmm d, yyyy, h:MM TT'
                  )}
   </span>
   </li>
   <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
   <button onClick={deleteHandler} className="trash-btn" ><i className="fas fa-trash"></i></button>

  </div>
 )
}

export default Todo
