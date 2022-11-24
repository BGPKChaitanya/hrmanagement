import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  user: '',
  userMails: [],
}

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    storeUser: (state, action) => {
      state.user = action.payload
    },
    AddMail: (state, action) => {
      state.userMails.push(action.payload)
    },
  },
})
export const {storeUser, AddMail} = UserReducer.actions
export default UserReducer.reducer
