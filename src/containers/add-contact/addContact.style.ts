import styled from 'styled-components'
import { Props } from './'

export const AddContactContainer = styled.div<Props>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.creating === 'true' ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  background-color: rgba(0, 0, 0, 0.47);
  z-index: 10;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 380px;
  border-radius: 8px;
`

export const FormContainer = styled.form`
  max-width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 20px;
    font-size: 24px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  border-bottom: 1px solid gray;

  img {
    width: 16px;
    height: 16px;
    margin: 0 8px 10px 0;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 40px;

  button {
    margin-left: 16px;
    padding: 16px 16px;
    background-color: #ffffff;
    border: none;
    font-weight: bold;
    color: rgb(26, 115, 232);
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: rgba(26, 115, 232, 0.1);
    }
  }
`
