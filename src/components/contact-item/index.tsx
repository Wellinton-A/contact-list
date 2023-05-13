import { useDispatch } from 'react-redux'
import {
  Contact,
  editingContact,
  markAsFav,
  removeContact,
  saveEditedContact
} from '../../store/contacts/contact.reducer'
import * as S from './contact.style'
import { useState } from 'react'

type Props = {
  contact: Contact
}

const ContactItem = ({ contact }: Props) => {
  const dispatch = useDispatch()
  const [name, setName] = useState(contact.nome)
  const [email, setEmail] = useState(contact.email)
  const [phone, setPhone] = useState(contact.telefone)

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value)
  }

  const handleSaveEdited = () => {
    const newContat: Contact = {
      id: contact.id,
      nome: name,
      telefone: phone,
      email,
      editando: false,
      marcado: contact.marcado,
      cor: contact.cor
    }

    setName(newContat.nome)
    setPhone(newContat.telefone)
    setEmail(newContat.email)
    dispatch(saveEditedContact(newContat))
  }

  const handleFavs = () => {
    dispatch(markAsFav(contact))
  }

  const handleRemove = () => {
    dispatch(removeContact(contact))
  }

  const handleEditing = () => {
    dispatch(editingContact(contact))
  }

  return (
    <S.ContactItemContainer editing={contact.editando.toString()}>
      {contact.editando ? (
        <>
          <S.ProfileContainer>
            <S.NameContainer>
              <S.InputEditing onChange={handleName} type="text" value={name} />
            </S.NameContainer>
          </S.ProfileContainer>
          <S.EmailContainer>
            <S.InputEditing onChange={handleEmail} type="email" value={email} />
          </S.EmailContainer>
          <S.PhoneContainer>
            <S.InputEditing onChange={handlePhone} type="tel" value={phone} />
          </S.PhoneContainer>
          <S.ButtonContainerEditing>
            <button onClick={handleSaveEdited}>Salvar</button>
            <button onClick={handleEditing}>Cancelar</button>
          </S.ButtonContainerEditing>
        </>
      ) : (
        <>
          <S.ProfileContainer>
            <S.Profile cor={contact.cor}>{contact.nome[0]}</S.Profile>
            <S.NameContainer>{contact.nome}</S.NameContainer>
          </S.ProfileContainer>
          <S.EmailContainer>{contact.email}</S.EmailContainer>
          <S.PhoneContainer>{contact.telefone}</S.PhoneContainer>
          <S.ManageContactContainer>
            <S.Fav onClick={handleFavs}>
              {contact.marcado ? (
                <img
                  src={
                    process.env.PUBLIC_URL + '/images/icons8-star-50-blue.png'
                  }
                  alt="Star Icon"
                />
              ) : (
                <img
                  src={process.env.PUBLIC_URL + '/images/icons8-star-50.png'}
                  alt="Star yellow Icon"
                />
              )}
            </S.Fav>
            <S.Edit onClick={handleEditing}>
              <img
                src={process.env.PUBLIC_URL + '/images/icons8-edit-50.png'}
                alt="Edit Icon"
              />
            </S.Edit>
            <S.Delete onClick={handleRemove}>
              <img
                src={process.env.PUBLIC_URL + '/images/icons8-remove-50.png'}
                alt="Remove Icon"
              />
            </S.Delete>
          </S.ManageContactContainer>
        </>
      )}
    </S.ContactItemContainer>
  )
}

export default ContactItem
