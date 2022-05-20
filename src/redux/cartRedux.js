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
            state.quantity -=action.payload.quantity;
            alert(action.payload.id);
            let bug =state.products.map(product => product.quantity);
            alert(bug);
            alert(action.payload.quantity)
            // state.cart.products.quantity -= action.payload.quantity;
            state.total -= action.payload.price * action.payload.quantity;
            (state.quantity===0)?state.products.pop(action.payload.products):alert('Хуй');
          state.products.map(product => product.id === action.payload.id
                ? {
                    ...product,
                    quantity: product.quantity - action.payload.quantity,
                }
                : product,

        )
        },
    },
});

export const { addProduct } = cartSlice.actions;
export const { removeProduct } = cartSlice.actions;
export default cartSlice.reducer;