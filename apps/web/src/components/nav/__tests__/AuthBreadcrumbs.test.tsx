import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import AuthBreadcrumbs from '../AuthBreadcrumbs'

test('load: unlogged in', async () => {
  render(
    <MemoryRouter>
      <AuthBreadcrumbs loggedIn={false} dataTestId="authb" />
    </MemoryRouter>
  )
  await screen.findByTestId('authb')

  const comp = screen.getByTestId('authb')
  expect(comp).toBeInTheDocument()
  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument()
  expect(homeLink).toHaveAttribute('href', '/')
  expect(homeLink).toHaveTextContent('home')

  const loginLink = screen.getByRole('link', { name: /login/i });
  expect(loginLink).toBeInTheDocument()
  expect(loginLink).toHaveAttribute('href', '/login')
  expect(loginLink).toHaveTextContent('login')

  const registerLink = screen.getByRole('link', { name: /register/i });
  expect(registerLink).toBeInTheDocument()
  expect(registerLink).toHaveAttribute('href', '/register')
  expect(registerLink).toHaveTextContent('register')
})

test('load: logged in', async () => {
  render(
    <MemoryRouter>
      <AuthBreadcrumbs loggedIn={true} email="test@test.com" dataTestId="authb" />
    </MemoryRouter>
  )
  await screen.findByTestId('authb')

  const comp = screen.getByTestId('authb')
  expect(comp).toBeInTheDocument()
  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument()
  expect(homeLink).toHaveAttribute('href', '/')
  expect(homeLink).toHaveTextContent('home')

  const logout = screen.getByRole('link', { name: /logout/i });
  expect(logout).toBeInTheDocument()
  expect(logout).toHaveAttribute('href', '/logout')
  expect(logout).toHaveTextContent('logout')

  //login and register should not be present
  expect(screen.queryByRole('link', { name: /login/i })).not.toBeInTheDocument()
  expect(screen.queryByRole('link', { name: /register/i })).not.toBeInTheDocument()
})