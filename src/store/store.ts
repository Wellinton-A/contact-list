import {
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import { creatingReducer } from './creating-contanct/creating.reducer'
import { contactReducer } from './contacts/contact.reducer'

// const Store = configureStore({
//   reducer: {
//     creating: creatingReducer,
//     contact: contactReducer
//   }
// })

const rootReducer = combineReducers({
  creating: creatingReducer,
  contact: contactReducer
})

const configStore = (preloadedState?: PreloadedState<rootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type rootState = ReturnType<typeof rootReducer>
export type appStore = ReturnType<typeof configStore>

export default configStore
