import React, { useState } from 'react'
import { Stack, TextField, Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/reducers/todosReducer';
import axios from 'axios';

const AddTodo = () => {
  const [title,setTitle]=useState("");
  const dispatch=useDispatch();

  const addHelper=async()=>{
    const isSpaceOnlyString = title.trim() === '';
    if(isSpaceOnlyString) return;
    dispatch(addTodo({title,isCompleted:false,id:Math.random(1000)}));
    setTitle("");
    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL+'/addTodo',{todo:{title,isCompleted:false,id:Math.random(1000)}});
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Stack direction="row" alignItems={"center"} justifyContent={"center"} padding={"1rem"} margin={"0 10%"}>
        <TextField onKeyDown={(e)=>{
          if(e.key=='Enter'){
            addHelper();
          }
        }} onChange={(e)=>setTitle(e.target.value)} label={"New task"} value={title} fullWidth/>
        <Button onClick={addHelper} variant='contained' sx={{margin:"0 1%",padding:"1%",minWidth:"2.4rem",minHeight:"3.1rem"}}><AddCircleOutlineIcon/></Button>
    </Stack>
  )
}

export default AddTodo
