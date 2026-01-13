import { createSlice } from '@reduxjs/toolkit'
import { auth } from '../../Firebase.config'

const initialState = {
  value: auth.currentUser ? auth.currentUser : null,

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