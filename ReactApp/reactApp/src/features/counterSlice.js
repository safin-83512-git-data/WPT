import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      return { value: state.value + 1 }
    },
    decrement: (state) => {
      return { value: state.value - 1 }
    },
  },
})

// export the actions
export const { increment, decrement } = counterSlice.actions

// export the reducer which has two reducers references
export default counterSlice.reducer
