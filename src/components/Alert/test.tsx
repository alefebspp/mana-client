import { render, screen } from '@testing-library/react'
import Alert from '.'

describe('<Alert />', () => {
  it('should render the default alert', () => {
    render(
      <Alert.Root>
        <Alert.Title>Alerta</Alert.Title>
        <Alert.Description>Texto de exemplo</Alert.Description>
      </Alert.Root>
    )

    const alert = screen.getByTestId('alert-root')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('bg-purple-light')
  })

  it('should render the error alert', () => {
    render(
      <Alert.Root variant="error">
        <Alert.Title>Alerta</Alert.Title>
        <Alert.Description>Texto de exemplo</Alert.Description>
      </Alert.Root>
    )

    const alert = screen.getByTestId('alert-root')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('bg-red-200')
  })
})
