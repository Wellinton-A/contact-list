import { rootReducer } from '../store'

export const selectContactList = (state: rootReducer) =>
  state.contact.contactList
