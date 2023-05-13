import AddContact from './containers/add-contact'
import Contacts from './containers/contacts'
import Header from './containers/header'
import { Container } from './style/style'

const App = () => {
  return (
    <>
      <AddContact />
      <Container>
        <Header />
        <Contacts />
      </Container>
    </>
  )
}

export default App
