import { createSlice } from "@reduxjs/toolkit"

const initialState= ({
    basket: []
})

export const basketSlice =createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToCartRedux : (state, action)=>{
          const index= state.basket.findIndex((item)=> item.id === action.payload.id )

          if(index >= 0){
            state.basket[index].qty +=1;
            state.basket[index].total = (state.basket[index].qty * state.basket[index].sellingprice).toString()
            console.log(state.basket[index].total)
            console.log(state.basket[index].qty)
            console.log(state.basket[index].sellingprice)

          }
          else{
            const newItem ={
                ...action.payload,
                qty : 1,
                total : action.payload.sellingprice
            }
            state.basket.push(newItem)
          }


         // console.log(action.payload)

         

        },
        increaseRedux: (state,action)=>{
          const index = state.basket.findIndex((item) => (item.id === action.payload.id))
             if(index >=0){
              state.basket[index].qty +=1;
              state.basket[index].total = (state.basket[index].qty * state.basket[index].sellingprice).toString()
             }


        },
        decreaseRedux: (state,action)=>{
          const index = state.basket.findIndex((item) => (item.id === action.payload.id))
          if(index >=0 && state.basket[index].qty>1){
           state.basket[index].qty -=1;
           state.basket[index].total = (state.basket[index].qty * state.basket[index].sellingprice).toString()
          }
        },
        removeRedux: (state,action)=>{
          const index = state.basket.findIndex((item) => (item.id === action.payload.id));
          if(index >= 0){
           state.basket.splice(index , 1);

        }
    }

}})

export const {addToCartRedux, increaseRedux, decreaseRedux,removeRedux} = basketSlice.actions

export default basketSlice.reducer