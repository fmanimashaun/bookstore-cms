import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
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
        bookList: state.bookList.filter((book) => book.item_id !== id),
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
