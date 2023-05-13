import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Creating {
  creating: boolean
}

const initialState: Creating = {
  creating: false
}

const creatingSlice = createSlice({
  name: 'creating',
  initialState,
  reducers: {
    toggleCreating(state, actions: PayloadAction<boolean>) {
      state.creating = actions.payload
    }
  }
})

export const creatingReducer = creatingSlice.reducer

export const { toggleCreating } = creatingSlice.actions
