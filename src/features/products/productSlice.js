import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './ProductAPI';

const initialState = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
