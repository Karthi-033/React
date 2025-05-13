import { createSlice} from "@reduxjs/toolkit";

interface State{
    data:any,
    city:string,
}
const initialState:State={
    data:null,
    city:'chennai'
}

export const ApiSlice=createSlice({
    name:'Api',
    initialState,
    reducers:{
         setData:(state,action)=>{
            state.data=action.payload;
            
         },
            
         setCity:(state,action)=>{
            state.city=action.payload;
            
        },    
    },
    
})

export const {setData ,setCity}=ApiSlice.actions;
export default ApiSlice.reducer;