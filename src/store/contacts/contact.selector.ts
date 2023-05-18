import { rootState } from '../store'

export const selectContactList = (state: rootState) => state.contact.contactList

export const selectFavContactList = (state: rootState) =>
  state.contact.favContactList

export const selectFilteredList = (state: rootState) =>
  state.contact.filteredList

export const selectbackUpContactList = (state: rootState) =>
  state.contact.backUpContactList

export const selectFilter = (state: rootState) => state.contact.filter
