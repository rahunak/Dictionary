import { configureStore } from '@reduxjs/toolkit'
import dictionaryReducer from './dictionaryReducer'

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer
  }
})
window.store=store;