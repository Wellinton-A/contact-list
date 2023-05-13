import { useSelector, useDispatch } from 'react-redux'

import { selectCreating } from '../../store/creating-contanct/creating.selector'

import {
  CreateContainer,
  FilterDiv,
  HeaderContainer,
  TitleContainer
} from './header.style'
import { toggleCreating } from '../../store/creating-contanct/creating.reducer'
import { setFilter } from '../../store/contacts/contact.reducer'
import { selectFilter } from '../../store/contacts/contact.selector'

const Header = () => {
  const creating = useSelector(selectCreating)
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value.toLocaleLowerCase()))
  }

  const handleCreateContact = () => {
    dispatch(toggleCreating(!creating))
  }

  return (
    <HeaderContainer>
      <TitleContainer>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png"
          alt="Profile icon"
        />
        <span>Contatos</span>
      </TitleContainer>
      <FilterDiv>
        <img
          src={process.env.PUBLIC_URL + '/images/icons8-search-gray.svg'}
          alt="search icon"
        />
        <input
          onChange={handleFilter}
          type="text"
          placeholder="Pesquisa"
          value={filter}
        />
      </FilterDiv>
      <CreateContainer onClick={handleCreateContact}>
        <img
          src={process.env.PUBLIC_URL + '/images/icons8-add-50.png'}
          alt="Add Icon"
        />
        <span>Criar contato</span>
      </CreateContainer>
    </HeaderContainer>
  )
}

export default Header
