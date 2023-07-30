import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
        name:'Aathil',
        firstName:'Mohamed',
        
    },
    reducers:{
        increment: state =>{
            state.value += 1
        },
        decrement: state =>{
            state.value -= 1
        },
        myName: (state,action) =>{
            const { name, firstName } = action.payload;
            state.name = name;
            state.firstName = firstName;
        }
    }
})

export const {increment,decrement,myName} = counterSlice.actions

export default counterSlice.reducer