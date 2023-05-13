import styled from 'styled-components'
import { ButtonContainer } from '../../containers/add-contact/addContact.style'

type Props = {
  cor?: string
  editing?: string
}

export const ProfileContainer = styled.div`
  display: flex;
  width: 286px;
  align-items: center;
  background-color: transparent;
`

export const Profile = styled.div<Props>`
  border-radius: 50%;
  display: flex;
  background-color: ${(props) => props.cor};
  width: 36px;
  height: 36px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
`

export const NameContainer = styled.div`
  letter-spacing: 0.01428571em;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.795rem;
  line-height: 1.25rem;
  background-color: transparent;
  color: #202124;
  opacity: 0.8;
  margin-left: 16px;
`

export const PhoneContainer = styled.div`
  display: flex;
  letter-spacing: 0.01428571em;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.795rem;
  line-height: 1.25rem;
  background-color: transparent;
  color: #202124;
  opacity: 0.8;
  width: 215px;
  align-items: center;
`

export const EmailContainer = styled(PhoneContainer)`
  width: 250px;
  background-color: transparent;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const ManageContactContainer = styled.div`
  display: none;
  align-items: center;
  width: 80px;
  margin-left: 60px;
  background-color: transparent;
`

export const ContactItemContainer = styled.div<Props>`
  width: 100%;
  padding: 8px 4px;
  display: flex;

  &:hover {
    background-color: #f1f3f4;

    ${ManageContactContainer} {
      display: flex;
    }
  }

  background-color: ${(props) =>
    props.editing === 'true' ? '#f1f3f4' : '#FFFFFF'};
`

export const Fav = styled.div`
  width: 40;
  cursor: pointer;
  margin-right: 24px;
  background-color: transparent;

  img {
    width: 16px;
  }
`

export const ButtonContainerEditing = styled(ButtonContainer)`
  margin: 0;
  background-color: transparent;

  button {
    background-color: transparent;
  }
`

export const Edit = styled(Fav)``

export const Delete = styled(Fav)``

export const InputEditing = styled.input`
  border: none;
  background-color: transparent;
  padding: 4px;
  width: 200px;
  border-bottom: 1px solid #202124;
`
