import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from './Login'
import { MemoryRouter } from 'react-router-dom';

test('Should render login correctly', async () => {

  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // Expectations
  const formElement = screen.getByRole('button');
  expect(formElement).toBeInTheDocument();
});