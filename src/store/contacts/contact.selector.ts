import { rootReducer } from '../store'

export const selectContactList = (state: rootReducer) =>
  state.contact.contactList

export const selectFavContactList = (state: rootReducer) =>
  state.contact.favContactList

export const selectFilteredList = (state: rootReducer) =>
  state.contact.filteredList

export const selectbackUpContactList = (state: rootReducer) =>
  state.contact.backUpContactList

export const selectFilter = (state: rootReducer) => state.contact.filter
