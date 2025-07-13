import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(
        state.items.findIndex(
          (item) => item.card.info.id === action.payload.card.info.id
        ),
        1
      );
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});

// CartSlice={
//     actions:{
//         addItem, removeItem, clearItem
//     },
//     reducer
// }

export const { addItem, removeItem, clearItem } = CartSlice.actions;

export default CartSlice.reducer;
