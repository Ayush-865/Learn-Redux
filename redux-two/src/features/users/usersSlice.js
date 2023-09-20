import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:1 , name:'Ayush'},
    {id:2 ,name:'Dhruv' },
    {id:3 ,name:'Advait' },
]

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state)=>state.users;

export default userSlice.reducer;