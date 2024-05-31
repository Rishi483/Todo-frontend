import React from 'react'
import { Stack } from '@mui/material'
import Todo from './Todo.jsx'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos=useSelector(state=>state.todosReducer.todos);

  return (
    <Stack margin={"1% 25%"}>
        {todos.map((item)=>{
            return <Todo key={item.id} todo={item}/>
        })}
    </Stack>
  )
}

export default TodoList