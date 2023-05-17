import React from 'react'
import { screen, render } from '@testing-library/react'
import Main from './Main'

describe('<Main />', () => {
  it('should render', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('main')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
