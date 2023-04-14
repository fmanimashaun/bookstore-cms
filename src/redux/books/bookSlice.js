import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'iCQQc2iC3QCwTkqPO8vQ';

const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(URL);
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return response.data;
});

const initialState = {
  bookList: {},
  status: 'idle',
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    removeBook: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        bookList: state.bookList.filter((book) => book.id !== id),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        bookList: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        status: 'failed',
      }));
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
