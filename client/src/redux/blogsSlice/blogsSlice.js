import { createSlice } from '@reduxjs/toolkit';
import fetchBlogsThunk from '../fetchBlogsThunk';
import deleteBlogThunk from '../deleteBlogThunk';

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
    [deleteBlogThunk.fulfilled]: (state, action) => {
      return (state = state.filter((blog) => blog.id !== action.payload.id));
    },
  },
});

export default blogsSlice.reducer;
