import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        restoName: '',
        restoImage: '',
        areaName: ''
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
        },
        restoName: (state, action) => {
            state.restoName = action.payload;
        },
        restoImage: (state, action) => {
            state.restoImage = action.payload;
        },
        areaDetails: (state, action) => {
            state.areaName = action.payload;
        }
    }
});

export const { addItem, removeItem, clearItem, restoName, restoImage, areaDetails } = cartSlice.actions;

export default cartSlice.reducer;