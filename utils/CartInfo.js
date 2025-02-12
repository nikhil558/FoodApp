import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import favoritesReducer from "./FavResSlice.js"

const CartInfo = configureStore({
    reducer:{
        cart: cartReducer,
        favorites: favoritesReducer
    },   
})

export default CartInfo