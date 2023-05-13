import { Contact } from '../../store/contacts/contact.reducer'
import * as S from './contact.style'

type Props = {
  contact: Contact
}

const ContactItem = ({ contact }: Props) => {
  return (
    <S.ContactItemContainer>
      <S.ProfileContainer>
        <S.Profile cor={contact.cor}>{contact.nome[0]}</S.Profile>
      </S.ProfileContainer>
    </S.ContactItemContainer>
  )
}

export default ContactItem
