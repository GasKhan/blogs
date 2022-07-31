import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteBlog } from '../API';

const deleteBlogThunk = createAsyncThunk('blogs/deleteBlog', async (id) => {
  const res = await deleteBlog(id);
  return res;
});

export default deleteBlogThunk;
