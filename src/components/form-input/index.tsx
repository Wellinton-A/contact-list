import * as S from './form.style'

export type Props = {
  label: string
  value: string
  type: string
  required?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({
  onChange,
  required,
  label,
  type,
  ...otherProps
}: Props) => {
  return (
    <S.Group>
      <S.FormImp
        onChange={onChange}
        required={required}
        type={type}
        {...otherProps}
      />
      {label && (
        <S.FormImputLabel shrink={otherProps.value.length}>
          {label}
        </S.FormImputLabel>
      )}
    </S.Group>
  )
}

export default FormInput
