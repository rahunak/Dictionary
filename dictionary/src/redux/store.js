import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './dictionaryReducer';

const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
  },
});
export default store;
