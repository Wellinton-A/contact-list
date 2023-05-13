import { useSelector } from 'react-redux'

import ContactItem from '../../components/contact-item'
import * as S from './contacts-container.style'
import { selectContactList } from '../../store/contacts/contact.selector'

const Contacts = () => {
  const contactList = useSelector(selectContactList)

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
        {contactList.map((item) => (
          <ContactItem key={item.id} contact={item} />
        ))}
      </S.ContactListContainer>
    </S.ContactsContainer>
  )
}

export default Contacts
