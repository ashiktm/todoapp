// import logo from './logo.svg';
import './App.css'  ;
import React, {useState,useEffect} from 'react'
// import display from './Display';
// import Display from './Display';
import Form from './component/Form'
import TodoList from  './component/TodoList'

function App() {

// state
const [inputText,setInputText] = useState("")
const [todos,setTodos] = useState([])
const [status,setStatus] = useState("All")
const [filteredTodos,setFilteredTodos] =useState([])
//Run once when app starts
useEffect (()=>{
  getLocaltodos();

},[])
 // useEffect
 useEffect (()=>{
  saveLocalTodos();
filterHandler();
 },[todos,status]) ;
// function
 const filterHandler = ()=>{
  switch (status) {
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;

  
    default:setFilteredTodos(todos)
      break;
  }
  
}
const saveLocalTodos = ()=>{
  if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos',JSON.stringify([]))
  }else{
    localStorage.setItem('todos',JSON.stringify(todos))
  }
};
const getLocaltodos = ()=>{
  if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos',JSON.stringify([]))
  }else{
   let localtodos = JSON.parse(localStorage.getItem('todos'))
   setTodos(localtodos)
  }
}
  return (
    <div className="App">
      <header>
      <h1>Ashik's Todo List </h1>
    </header>
    <Form 
     todos={todos} 
     setTodos={setTodos} 
     setInputText={setInputText} 
     inputText={inputText}
     status={status} 
     setStatus={setStatus}
    />
    <TodoList
     todos={todos} 
     setTodos={setTodos}
     filteredTodos={filteredTodos}/>
      
      {/* <h1 onClick={()=> setShow(!show)}>Show/Hide</h1>
     { show && <Display/>}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>You clicked {count} times</p> */}
    </div>
  );
}


export default App;
