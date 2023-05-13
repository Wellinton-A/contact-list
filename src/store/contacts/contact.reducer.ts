import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { contacts } from '../../contact-list/contactList'

export type Contact = {
  id: number
  nome: string
  telefone: string
  email: string
  editando: boolean
  marcado: boolean
  cor: string
}

interface ContactList {
  contactList: Contact[]
}

const initialState: ContactList = {
  contactList: contacts.sort((a, b) => a.nome.localeCompare(b.nome))
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, actions: PayloadAction<Contact>) {
      if (
        state.contactList.some(
          (contact: Contact) => contact.telefone === actions.payload.telefone
        )
      ) {
        return alert('Este numero de telefone ja existe')
      }
      state.contactList.push(actions.payload)
    },
    sortContactList(state) {
      state.contactList.sort((a, b) => a.nome.localeCompare(b.nome))
    }
  }
})

export const contactReducer = contactSlice.reducer
export const { addContact, sortContactList } = contactSlice.actions
