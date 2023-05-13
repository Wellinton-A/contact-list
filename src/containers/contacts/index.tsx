import { useDispatch, useSelector } from 'react-redux'

import ContactItem from '../../components/contact-item'
import * as S from './contacts-container.style'
import {
  selectContactList,
  selectFavContactList
} from '../../store/contacts/contact.selector'
import { useEffect } from 'react'
import { favContactList } from '../../store/contacts/contact.reducer'
import ContactItemFav from '../../components/contact-favorite'

const Contacts = () => {
  const contactList = useSelector(selectContactList)
  const favsContactList = useSelector(selectFavContactList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(favContactList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactList])

  return (
    <S.ContactsContainer>
      <S.ContactsHeader>
        <S.TitleContainer>Titulo</S.TitleContainer>
        <S.EmailTitleContainer>E-mail</S.EmailTitleContainer>
        <S.PhoneNumberTitleContaiuner>
          Numero de telefone
        </S.PhoneNumberTitleContaiuner>
      </S.ContactsHeader>
      <S.ContactListContainer>
        {favsContactList.length > 0 && (
          <>
            <S.ContactLength>{`Contatos favoritos(${favsContactList.length})`}</S.ContactLength>
            {favsContactList.map((item) => (
              <ContactItemFav key={item.id} contact={item} />
            ))}
          </>
        )}
        <S.ContactLength>{`Contatos(${contactList.length})`}</S.ContactLength>
        {contactList.map((item) => (
          <ContactItem key={item.id} contact={item} />
        ))}
      </S.ContactListContainer>
    </S.ContactsContainer>
  )
}

export default Contacts
