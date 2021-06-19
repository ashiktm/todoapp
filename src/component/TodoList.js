// import React from 'react'
import Todo from './Todo'

function TodoList({todos,setTodos,filteredTodos,date}) {

 return (
  <div className="todo-container">
      <ul className="todo-list">
        {
         filteredTodos.map((todo,index) => <Todo 
          setTodos={setTodos} 
           todos={todos} 
            key ={index}
            date={todo.id}
            todo={todo}
            text={todo.text}
        //  id={todo.id}      
            />)
        }
      </ul>
    </div>
 )
}

export default TodoList
