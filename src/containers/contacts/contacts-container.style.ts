import styled from 'styled-components'

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 20px;
  width: 100%;
`

export const ContactsHeader = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

export const TitleContainer = styled.div`
  width: 286px;
  height: 41px;
  padding: 4px;
  letter-spacing: 0.01785714em;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.25rem;
  box-sizing: border-box;
  color: #5f6368;
  opacity: 0.8;
  display: flex;
  overflow: hidden;
  padding: 4px;
  text-overflow: ellipsis;
  align-items: center;
  margin-top: 8px;
`

export const PhoneNumberTitleContaiuner = styled(TitleContainer)`
  width: 215px;
`

export const EmailTitleContainer = styled(TitleContainer)`
  width: 215px;
`

export const ContactListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  overflow-y: scroll;
`
