import { createGlobalStyle, styled } from 'styled-components'

const mainFont = "'Roboto', sans-serif;"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${mainFont}
    background-color: #FFFFFF;
  }
`

export default GlobalStyle

export const Container = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
`
