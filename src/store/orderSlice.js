import { createSlice } from "@reduxjs/toolkit"

const initialState= ({
    order: []
})

export const ordertSlice =createSlice({
    name: "order",
    initialState,
    reducers: {

       PlaceOrderRedux: (state,action)=>{
        state.order = action.payload
       }

  

}
})

export const {PlaceOrderRedux} = ordertSlice.actions

export default ordertSlice.reducer