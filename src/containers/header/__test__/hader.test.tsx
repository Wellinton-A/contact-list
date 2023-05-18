import { fireEvent, screen } from '@testing-library/react'

import App from '../../../App'
import { renderWithProvider } from '../../../utils/test'

describe('Test header container', () => {
  test('Filter contact test', () => {
    renderWithProvider(<App />)

    const inputFilter = screen.getByPlaceholderText('Pesquisa')
    const filtered = screen.getAllByText(/Giovanni Silva/i)

    fireEvent.change(inputFilter, {
      target: {
        value: 'gio'
      }
    })

    expect(filtered[1]).toBeInTheDocument()
  })
})
