import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTodos } from '../redux/reducers/todosReducer';


function App() { 

  const dispatch=useDispatch();

  useEffect(()=>{
    fetch(process.env.VITE_BACKEND_URL+'/getTodos').then(response => response.json())
    .then(v=>{
      dispatch(setTodos(v));
    });
  },[])
  
  return (
    <>
      <Navbar/>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
