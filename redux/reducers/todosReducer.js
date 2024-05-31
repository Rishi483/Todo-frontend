import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodos(state,action){
        state.todos=state.todos.map(todo=>{
            if(todo.id==action.payload.id) return action.payload;
            else return todo;
        });
    }
  },
});

export const { setTodos,addTodo,updateTodos,deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
