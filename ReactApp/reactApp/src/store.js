import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'

// create the global store
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})
