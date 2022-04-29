import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "tasks", //creating todoSlice slice have name initialState and reducer
    initialState:[],
    reducers:{
        addTask: (state, action)=>{  //add task firstly add task
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask); //pushing the array state
        },
        deleteTask: (state, action)=>{ //if have task , task is delete
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const {addTask, deleteTask} = todoSlice.actions;

export default todoSlice.reducer;