/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dictionaryApi from '../DAL/dictionaryAPI';

const initialState = {
  dataWord: [],
  errorWithSearch: false,
};
export const findWord = createAsyncThunk(
  'dictionary/findWord',
  async (searchParams) => {
    const response = await dictionaryApi.getWord(searchParams);
    return response;
  },
);

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addNewWord: (state, action) => {
      state.dataWord = action.payload;
    },
    setError: (state, action) => {
      state.errorWithSearch = action.payload;
    },
  },
});

export const dataWord = (state) => state.dictionary.dataWord;
export const errorWithSearch = (state) => state.dictionary.errorWithSearch;
export const { setError, addNewWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
