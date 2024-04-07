import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Signup from './Signup'
import { MemoryRouter } from 'react-router-dom';

test('Should render signup correctly', async () => {

  render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );

  // Expectations
  const formElement = screen.getByRole('button');
  expect(formElement).toBeInTheDocument();
});