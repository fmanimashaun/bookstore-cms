import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'iCQQc2iC3QCwTkqPO8vQ';

const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(URL);
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  const data = await Object.entries(response.data).map(([key, value]) => ({
    item_id: key,
    ...value[0],
  }));
  return data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(URL, book);
  if (response.status !== 201) {
    throw new Error(response.statusText);
  }
  return book;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`${URL}/${id}`);
  if (response.status !== 201) {
    throw new Error(response.statusText);
  }
  return id;
});

const initialState = {
  bookList: [],
  status: 'idle',
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
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
      }))
      .addCase(addBook.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        bookList: [...state.bookList, action.payload],
      }))
      .addCase(addBook.rejected, (state) => ({
        ...state,
        status: 'failed',
      }))
      .addCase(removeBook.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        bookList: state.bookList.filter(
          (book) => book.item_id !== action.payload,
        ),
      }))
      .addCase(removeBook.rejected, (state) => ({
        ...state,
        status: 'failed',
      }));
  },
});

export default bookSlice.reducer;
