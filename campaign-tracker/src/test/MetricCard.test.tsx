import { render, screen } from '@testing-library/react'
import MetricCard from '../components/MetricCard'

test('deve renderizar o título e valor', () => {
  render(<MetricCard titulo="Leads" valor={17} icone="📈" variacao={4} />)

  expect(screen.getByText('Leads')).toBeInTheDocument()
  expect(screen.getByText('17')).toBeInTheDocument()
})

test('deve mostrar cor verde quando variação é positiva', () => {
  render(<MetricCard titulo="Leads" valor={17} icone="📈" variacao={4} />)

  const variacao = screen.getByText(/4%/)
  expect(variacao).toHaveClass('text-green-500')
})

test('deve mostrar cor vermelha quando variação é negativa', () => {
  render(<MetricCard titulo="Leads" valor={17} icone="📈" variacao={-10} />)

  const variacao = screen.getByText(/10%/)
  expect(variacao).toHaveClass('text-red-500')
})

test('deve mostrar ícone de seta para cima quando variação positiva', () => {
  render(<MetricCard titulo="Leads" valor={17} icone="📈" variacao={4} />)

  expect(screen.getByText(/▲/)).toBeInTheDocument()
})

test('deve mostrar ícone de seta para baixo quando variação negativa', () => {
  render(<MetricCard titulo="Leads" valor={17} icone="📈" variacao={-10} />)

  expect(screen.getByText(/▼/)).toBeInTheDocument()
})