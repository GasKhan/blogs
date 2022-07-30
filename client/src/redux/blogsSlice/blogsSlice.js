import { createSlice } from '@reduxjs/toolkit';
import fetchBlogsThunk from '../fetchBlogsThunk';

const initialState = [];

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs(state, action) {
      state = action.payload;
    },
  },
  extraReducers: {
    [fetchBlogsThunk.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default blogsSlice.reducer;
