import { render, screen } from '@testing-library/react'

import Select from '.'

const mountComponent = () => {
  return (
    <Select.Container>
      <Select.Label>Label</Select.Label>
      <Select.Root options={[]} name="test" />
    </Select.Container>
  )
}

describe('<Select />', () => {
  it('should render the component', () => {
    render(mountComponent())

    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })
})
