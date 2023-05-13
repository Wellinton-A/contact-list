import styled, { css } from 'styled-components'

type PropsStyle = {
  shrink: number
}

const subcolor = 'grey'
const mainColor = 'black'

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`

export const FormImputLabel = styled.label<PropsStyle>`
  color: ${subcolor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 5px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabel}
`

export const Group = styled.div`
  position: relative;
  margin: 0 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

export const FormImp = styled.input`
  background: none;
  background-color: white;
  color: ${subcolor};
  font-size: 16px;
  padding: 5px 5px 5px 5px;
  display: block;
  width: 100%;
  border: none;
  margin: 5px 0 5px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormImputLabel} {
    ${shrinkLabel};
  }
`
