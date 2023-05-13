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
  backUpContactList: Contact[]
  contactList: Contact[]
  favContactList: Contact[]
  filteredList: Contact[]
  filter: string
}

const initialState: ContactList = {
  backUpContactList: contacts.sort((a, b) => a.nome.localeCompare(b.nome)),
  contactList: contacts.sort((a, b) => a.nome.localeCompare(b.nome)),
  favContactList: [],
  filteredList: [],
  filter: ''
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, actions: PayloadAction<Contact>) {
      if (
        state.backUpContactList.some(
          (contact: Contact) => contact.telefone === actions.payload.telefone
        )
      ) {
        return alert('Este numero de telefone ja existe')
      }
      state.backUpContactList.push(actions.payload)
      if (
        state.contactList.some(
          (contact: Contact) => contact.telefone === actions.payload.telefone
        )
      ) {
        return alert('Este numero de telefone ja existe')
      }
      state.contactList.push(actions.payload)
    },
    setContactList(state, actions: PayloadAction<Contact[]>) {
      state.contactList = actions.payload
    },
    sortContactList(state) {
      state.contactList.sort((a, b) => a.nome.localeCompare(b.nome))
      state.backUpContactList.sort((a, b) => a.nome.localeCompare(b.nome))
    },
    markAsFav(state, actions: PayloadAction<Contact>) {
      state.contactList = state.contactList.map((contact) => {
        if (contact.id === actions.payload.id) {
          return { ...contact, marcado: !contact.marcado }
        }
        return contact
      })
      state.backUpContactList = state.backUpContactList.map((contact) => {
        if (contact.id === actions.payload.id) {
          return { ...contact, marcado: !contact.marcado }
        }
        return contact
      })
    },
    removeContact(state, actions: PayloadAction<Contact>) {
      state.contactList = state.contactList.filter(
        (item) => item.id !== actions.payload.id
      )
      state.backUpContactList = state.backUpContactList.filter(
        (item) => item.id !== actions.payload.id
      )
    },
    editingContact(state, actions: PayloadAction<Contact>) {
      state.contactList = state.contactList.map((contact) => {
        if (contact.id === actions.payload.id) {
          return { ...contact, editando: !contact.editando }
        }
        return contact
      })
      state.backUpContactList = state.backUpContactList.map((contact) => {
        if (contact.id === actions.payload.id) {
          return { ...contact, editando: !contact.editando }
        }
        return contact
      })
    },
    saveEditedContact(state, actions: PayloadAction<Contact>) {
      state.contactList = state.contactList.map((item) => {
        if (item.id === actions.payload.id) {
          return actions.payload
        }
        return item
      })
      state.favContactList = state.favContactList.map((item) => {
        if (item.id === actions.payload.id) {
          return actions.payload
        }
        return item
      })
      state.backUpContactList = state.backUpContactList.map((item) => {
        if (item.id === actions.payload.id) {
          return actions.payload
        }
        return item
      })
    },
    favContactList(state) {
      state.favContactList = state.contactList.filter(
        (item) => item.marcado === true
      )
    },
    setFIlteredList(state, actions: PayloadAction<string>) {
      state.filteredList = state.backUpContactList.filter((item) =>
        item.nome.toLowerCase().includes(actions.payload)
      )
    },
    setFilter(state, actions: PayloadAction<string>) {
      state.filter = actions.payload
    }
  }
})

export const contactReducer = contactSlice.reducer
export const {
  addContact,
  sortContactList,
  markAsFav,
  removeContact,
  editingContact,
  saveEditedContact,
  favContactList,
  setFIlteredList,
  setContactList,
  setFilter
} = contactSlice.actions
