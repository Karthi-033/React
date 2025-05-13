import {configureStore} from "@reduxjs/toolkit";
import Slice from './Reducer/Slice/Slice'
const store=configureStore({
    reducer:{
        ApiValue:Slice,
    } ,
})
 export default store;
export type RootState = ReturnType<typeof store.getState>;
