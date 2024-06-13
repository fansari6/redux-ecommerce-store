import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
