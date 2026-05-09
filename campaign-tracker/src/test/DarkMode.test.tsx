import { render, screen, fireEvent } from '@testing-library/react'
import DarkMode from '../components/DarkMode'

test('botão de dark mode renderiza', () => {
  render(<DarkMode />)
  const button = screen.getByRole('switch')
  expect(button).toBeInTheDocument()
})

test('toggle de dark mode adiciona classe dark no html', () => {
  render(<DarkMode />)
  const toggle = screen.getByRole('switch')
  
  fireEvent.click(toggle)
  expect(document.documentElement.classList.contains('dark')).toBe(true)
  
  fireEvent.click(toggle)
  expect(document.documentElement.classList.contains('dark')).toBe(false)
})