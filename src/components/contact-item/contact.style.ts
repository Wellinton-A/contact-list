import styled from 'styled-components'

type Props = {
  cor: string
}

export const ContactItemContainer = styled.div`
  width: 100%;
  padding: 8px 4px;
`

export const ProfileContainer = styled.div``

export const Profile = styled.div<Props>`
  border-radius: 50%;
  display: flex;
  background-color: ${(props) => props.cor};
  width: 40px;
  height: 40px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
`
