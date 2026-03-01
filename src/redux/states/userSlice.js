import {createSlice} from "@reduxjs/toolkit"

const initialState={
    name:"",
    username:"",
    email:""
}

export const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const{user,password}=action.payload;
        }           
    }
})


export const {addUser}=userSlice.actions
export default userSlice.reducer;