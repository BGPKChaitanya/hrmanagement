import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './Reducer/Reducer'

const Store = configureStore({
  reducer: {
    UserReducer,
  },
})

export default Store
