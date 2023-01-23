import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalCount: 0,
    productsList: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProductCart: (state, action) => {
            state.productsList = [...state.productsList, action.payload];
            state.totalCount += 1;
        },
        deleteProductCart: (state, action) => {
            const productId = action.payload;
      state.totalCount -= 1;
      state.productsList = state.productsList.filter(product => product.id !== productId);        }
    },
})

export const { addProductCart, deleteProductCart} = cartSlice.actions

export default cartSlice.reducer