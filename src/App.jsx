import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTodos } from '../redux/reducers/todosReducer';


function App() { 

  const dispatch=useDispatch();

  useEffect(()=>{
    fetch('http://localhost:3000/getTodos').then(response => response.json())
    .then(v=>{
      dispatch(setTodos(v));
    });
  },[])
  console.log('app.jsx');
  return (
    <>
      <Navbar/>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
