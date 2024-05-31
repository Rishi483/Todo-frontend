import React, { useState } from 'react'
import { Checkbox, IconButton, Paper, Stack, TextField, Typography} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodos } from '../../redux/reducers/todosReducer';
import axios from 'axios';

const Todo = ({todo}) => {
  const [isChecked,setIsChecked]=useState(todo.isCompleted);
  const [isEditOpen,setIsEditOpen]=useState(false);
  const [title,setTitle]=useState(todo.title);
  const dispatch=useDispatch();

  const handleDelete=async(id)=>{
    dispatch(deleteTodo(id));
    try {
      await axios.post(process.env.VITE_BACKEND_URL+'/deleteTodo',{id});
    }catch (err) {
       console.log(err);
    }
  }
  const handleEdit=async(updatedTodo)=>{
    dispatch(updateTodos(updatedTodo));
    try {
      await axios.patch(process.env.VITE_BACKEND_URL+'/updateTodo',{"todo":updatedTodo});
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Paper sx={{margin:"5px",padding:"0 1%"}}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"start"}>
          <Checkbox checked={isChecked} onClick={()=>{
            setIsChecked(prev=>!prev);
            handleEdit({"id":todo.id,title,"isCompleted":!isChecked});
          }}/>
          {!isEditOpen ? <Typography>{title}</Typography>:<TextField autoFocus onKeyDown={(e)=>{
            if(e.key=='Enter'){
              const isSpaceOnlyString = title.trim() === '';
              if(title!=todo.title && !isSpaceOnlyString){
                handleEdit({"id":todo.id,title,"isCompleted":isChecked})
              }
              else setTitle(todo.title);
              setIsEditOpen(false);
            }
          }} onChange={(e)=>setTitle(e.target.value)} value={title}/>}
        </Stack> 
        <Stack direction={"row"} alignItems={"center"} justifyContent={"end"}>
          <IconButton onClick={()=>{
            if(!isEditOpen){
              setIsEditOpen(true);
            }
            else{
              const isSpaceOnlyString = title.trim() === '';
              if(title!=todo.title && !isSpaceOnlyString){
                handleEdit({"id":todo.id,title,"isCompleted":isChecked})
              }
              else setTitle(todo.title);
              setIsEditOpen(false);
            }
          }}>{isEditOpen ? <CheckIcon/>:<EditIcon/>}</IconButton>
          <IconButton onClick={()=>handleDelete(todo.id)}><DeleteIcon/></IconButton>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default Todo