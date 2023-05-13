import { useDispatch } from 'react-redux'
import { Contact, markAsFav } from '../../store/contacts/contact.reducer'
import * as S from '../contact-item/contact.style'

type Props = {
  contact: Contact
}

const ContactItemFav = ({ contact }: Props) => {
  const dispatch = useDispatch()

  const handleFavs = () => {
    dispatch(markAsFav(contact))
  }

  return (
    <S.ContactItemContainer editing={contact.editando.toString()}>
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
              src={process.env.PUBLIC_URL + '/images/icons8-star-50-blue.png'}
              alt="Star Icon"
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + '/images/icons8-star-50.png'}
              alt="Star yellow Icon"
            />
          )}
        </S.Fav>
      </S.ManageContactContainer>
    </S.ContactItemContainer>
  )
}

export default ContactItemFav
