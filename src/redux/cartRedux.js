import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += action.payload.quantity;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {

            state.quantity -= action.payload.quantity;
            state.total -= action.payload.price * action.payload.quantity;
            if (state.total == 0)  {
                state.products.pop(action.payload);
            }
        },
    },
});

export const { addProduct } = cartSlice.actions;
export const { removeProduct } = cartSlice.actions;
export default cartSlice.reducer;