import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin: 16px 24px 16px 16px;

  span {
    font-size: 22px;
    line-height: 24px;
    font-weight: bold;
    color: #5f6368;
    opacity: 0.9;
    margin-left: 8px;
  }

  @media screen and (max-width: 1023px) {
    width: 150px;
  }
`

export const FilterDiv = styled.div`
  width: 480px;
  margin: 16px 24px 16px 16px;
  display: flex;
  align-items: center;
  background: #f1f3f4;
  border-radius: 8px;

  img {
    width: 24px;
    margin: 0 16px;
  }

  input {
    padding: 8px;
    border: none;
    background: transparent;
    outline: none;
    width: 80%;
  }

  @media screen and (max-width: 1023px) {
    width: 300px;
    margin-right: 80px;
  }
`

export const CreateContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  background-color: #fff;
  height: 48px;
  border-radius: 24px 24px 24px 24px;
  font-size: 0.765rem;
  font-weight: bold;
  letter-spacing: 0.0178571429em;
  padding-right: 24px;
  padding-left: 20px;
  margin: 16px;
  cursor: pointer;
  width: fit-content;

  img {
    width: 32px;
    margin-right: 16px;
  }
`
