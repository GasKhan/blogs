import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBlogs } from '../API/index';

const fetchBlogsThunk = createAsyncThunk('blogs/fetchBlogs', async () => {
  const res = fetchBlogs();
  return (await res).data;
});

export default fetchBlogsThunk;
