import { render, screen } from '@testing-library/react'

import Input from '.'

const mountComponent = () => {
  return (
    <Input.Container>
      <Input.Label>Label</Input.Label>
      <Input.Root />
    </Input.Container>
  )
}

describe('<Input />', () => {
  it('should render the heading', () => {
    render(mountComponent())

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
