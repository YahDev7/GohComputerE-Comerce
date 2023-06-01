import {createSlice} from "@reduxjs/toolkit"
import { BaseURLAPI2 } from "../../config/Base_URL"
import { Fetchs } from "../../api/fetchs"
import { useDispatch } from "react-redux";

let dispatch= useDispatch();

export const initCarr=async ()=>{
    let res= await Fetchs.get();

    dispatch(setCarrito(res))
    console.log(res)
}

const initialState=[]

export const userSlice =createSlice({
    name:"carrito",
    initialState,
    reducers:{
        addUser:(state,action)=>{
          /*   const{user,password}=action.payload; */
          console.log(state,action)
        },
        setCarrito:(state,action)=>{
            state=action.payload
        }           
    }
})


export const {addUser}=userSlice.actions
export default userSlice.reducer;