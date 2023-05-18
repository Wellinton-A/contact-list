import { fireEvent, screen } from '@testing-library/react'

import 'jest-styled-components'

import AddContact from '..'
import App from '../../../App'
import { renderWithProvider } from '../../../utils/test'
import { colors } from '../../../style/colors'

const initialContacts = [
  {
    id: 1,
    nome: 'Contato A',
    telefone: '(00) 00000-0000',
    email: 'email@exemplo.com',
    editando: false,
    marcado: false,
    cor: colors.lightBlue
  },
  {
    id: 2,
    nome: 'Contato B',
    telefone: '(00) 11111-0000',
    email: 'email2@exemplo.com',
    editando: false,
    marcado: false,
    cor: colors.beige
  }
]

describe('Add contact modal tests', () => {
  test('Initial render test', () => {
    renderWithProvider(<AddContact />)
    const addElement = screen.getByTestId('addContact')
    expect(addElement).toHaveStyleRule('display', 'none')
  })
  test('Clicked AddContact button', () => {
    renderWithProvider(<App />)
    const addContact = screen.getByTestId('addButton')
    fireEvent.click(addContact)
    const addContactModal = screen.getByTestId('addContact')
    expect(addContactModal).toHaveStyleRule('display', 'flex')
  })
  test('Clicked cancel add contact button', () => {
    renderWithProvider(<App />, {
      preloadedState: {
        creating: {
          creating: true
        }
      }
    })
    const addCancelButton = screen.getByText(/cancelar/i)
    fireEvent.click(addCancelButton)
    const addContactModal = screen.getByTestId('addContact')
    expect(addContactModal).toHaveStyleRule('display', 'none')
  })
  test('Add contact input test', () => {
    const { debug } = renderWithProvider(<App />, {
      preloadedState: {
        contact: {
          contactList: initialContacts,
          backUpContactList: initialContacts,
          favContactList: [],
          filteredList: [],
          filter: ''
        }
      }
    })

    const nameInput = screen.getByTestId('name-input')
    const phoneInput = screen.getByTestId('phone-input')
    const emailInput = screen.getByTestId('email-input')
    const saveButton = screen.getByText(/salvar/i)

    fireEvent.change(nameInput, {
      target: {
        value: 'julia sais'
      }
    })
    fireEvent.change(phoneInput, {
      target: {
        value: '(47) 98975-8877'
      }
    })
    fireEvent.change(emailInput, {
      target: {
        value: 'julia@gmail.com'
      }
    })
    fireEvent.click(saveButton)
    debug()
    expect(screen.getByText('Contatos(3)')).toBeInTheDocument()
  })
})
