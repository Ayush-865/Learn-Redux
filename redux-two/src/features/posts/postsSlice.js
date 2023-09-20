import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1, title:'hello1', content:'hola1'},
    {id:2, title:'hello2', content:'hola2'},
    {id:3, title:'hello3', content:'hola3'},
]

const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:(state, action)=>{
            state.push(action.payload);
        },
    }
});

export const selectAllPosts = (state)=>state.posts;

export const {postAdded} = postSlice.actions;

export default postSlice.reducer;