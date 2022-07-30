import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './blogsSlice/blogsSlice';

const store = configureStore({
  reducer: { blogs: blogsReducer },
});

export default store;
