import { configureStore } from '@reduxjs/toolkit'
import { creatingReducer } from './creating-contanct/creating.reducer'
import { contactReducer } from './contacts/contact.reducer'

const Store = configureStore({
  reducer: {
    creating: creatingReducer,
    contact: contactReducer
  }
})

export type rootReducer = ReturnType<typeof Store.getState>

export default Store
