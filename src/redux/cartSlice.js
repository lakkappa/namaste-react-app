import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        name: 'lucky'
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearItem: (state) => {
            state.items.length = [];
        }
    }
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;