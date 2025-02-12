import { createSlice } from "@reduxjs/toolkit";

const FavResSlice = createSlice({
    name: "Favorites",
    initialState: {
        items: []
    },
    reducers:{
        addFav: (state,action) =>{
            state.items.push(action.payload)
        },
        removeFav: (state,action) => {
            state.items=state.items.filter(item => item.id!==action.payload)
        },
        clearFav:(state) => {
            state.items.length=0
        }
    }
})

export const {addFav, removeFav, clearFav} = FavResSlice.actions
export default FavResSlice.reducer