import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")) : null,

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state , Action) => {

      state.value = Action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer