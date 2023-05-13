import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCreating } from '../../store/creating-contanct/creating.selector'

import FormInput from '../../components/form-input'

import {
  AddContactContainer,
  ButtonContainer,
  ContactContainer,
  FormContainer,
  InputContainer
} from './addContact.style'
import { toggleCreating } from '../../store/creating-contanct/creating.reducer'
import { selectContactList } from '../../store/contacts/contact.selector'
import { colors } from '../../style/colors'
import {
  addContact,
  sortContactList
} from '../../store/contacts/contact.reducer'

export type Props = {
  creating: string
}

const AddContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const colorsList = Object.values(colors)

  const randomColor = colorsList[Math.floor(Math.random() * colorsList.length)]

  const contactList = useSelector(selectContactList)

  const creatingContact = useSelector(selectCreating)
  const dispatch = useDispatch()

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value)
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newContact = {
      id: contactList.length + 1,
      nome: name[0].toUpperCase() + name.slice(1),
      telefone: phone,
      email,
      editando: false,
      marcado: false,
      cor: randomColor
    }

    dispatch(addContact(newContact))

    setName('')
    setPhone('')
    setEmail('')
    dispatch(toggleCreating(!creatingContact))
    dispatch(sortContactList())
  }

  const handleCreatingContact = () => {
    dispatch(toggleCreating(!creatingContact))
  }

  return (
    <AddContactContainer creating={creatingContact.toString()}>
      <ContactContainer>
        <FormContainer onSubmit={handleSubmit}>
          <span>Criar contato</span>
          <InputContainer>
            <img
              src={process.env.PUBLIC_URL + '/images/icons8-male-user-50.png'}
              alt="search icon"
            />
            <FormInput
              onChange={handleName}
              required
              type="text"
              label={'Nome Completo'}
              value={name}
            />
          </InputContainer>
          <InputContainer>
            <img
              src={process.env.PUBLIC_URL + '/images/icons8-phone-50.png'}
              alt="search icon"
            />
            <FormInput
              onChange={handlePhone}
              required
              type="tel"
              label={'Telefone'}
              value={phone}
            />
          </InputContainer>
          <InputContainer>
            <img
              src={process.env.PUBLIC_URL + '/images/icons8-email-50.png'}
              alt="search icon"
            />
            <FormInput
              onChange={handleEmail}
              type="email"
              required
              label={'E-mail'}
              value={email}
            />
          </InputContainer>
          <ButtonContainer>
            <button type="submit">Salvar</button>
            <button type="button" onClick={handleCreatingContact}>
              Cancelar
            </button>
          </ButtonContainer>
        </FormContainer>
      </ContactContainer>
    </AddContactContainer>
  )
}

export default AddContact
