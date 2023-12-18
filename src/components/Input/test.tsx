import { render, screen } from '@testing-library/react'

import Input from '.'

const mountComponent = () => {
  return (
    <Input.Container>
      <Input.Label>Label</Input.Label>
      <Input.Root name="test" />
    </Input.Container>
  )
}

const fieldMock = {}
const metaMock = {}
const helperMock = {}

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useField: jest.fn(() => {
    return [fieldMock, metaMock, helperMock]
  })
}))

describe('<Input />', () => {
  it('should render the heading', () => {
    render(mountComponent())

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
