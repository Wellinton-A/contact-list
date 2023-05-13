import { rootReducer } from '../store'

export const selectContactList = (state: rootReducer) =>
  state.contact.contactList

export const selectFavContactList = (state: rootReducer) =>
  state.contact.favContactList
