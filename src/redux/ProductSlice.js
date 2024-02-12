import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list : [],
}

export const productSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    setlist: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload);
      state.list = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setlist } = productSlice.actions

export default productSlice.reducer