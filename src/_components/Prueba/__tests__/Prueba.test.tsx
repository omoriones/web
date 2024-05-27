import { render } from '@testing-library/react'
import { Prueba } from '../Prueba'

describe('Prueba', () => {
  it('renders the Prueba component', () => {
    const { getByText } = render(<Prueba />)
    const prueba = getByText('Prueba')

    expect(prueba).toBeInTheDocument()
  })
})
