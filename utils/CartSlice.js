import { createSlice } from "@reduxjs/toolkit";

const CartSlice= createSlice({
    name: "Cart",
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state)=>{
            state.items.pop()
        },
        clearItem: (state)=>{
            state.items.length=0
        }
    }
})

// CartSlice={
//     actions:{
//         addItem, removeItem, clearItem
//     },
//     reducer
// }

export const {addItem, removeItem, clearItem} = CartSlice.actions

export default CartSlice.reducer

