// import React from 'react'

import '../App.css'
function Form({todos,setTodos,setInputText,inputText,status,setStatus,filteredTodos}) {


  
 const inputTextHandler = (e) =>{
  console.log(e.target.value)
  setInputText(e.target.value)
 }

 const submitTodoHandler = (e) => {
  e.preventDefault()
  // console.log("Hey")
  setTodos([
   ...todos,{text:inputText,completed:false,id:Date.now()}
  ])
  setInputText("")
 }
 const statusHandler = (e)=>{
   console.log(e.target.value)
   setStatus(e.target.value)
}
 return (
   <form>
     
      <input value={inputText} onChange={inputTextHandler} type="text " className="todo-input" />
      <button   onClick= {submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
 )
}

export default Form
