import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FormAction from './FormAction'

test('Should render button correctly', async () => {
  // Setup
  render(
    <FormAction />
  );
  const button = screen.queryByRole('button');

  // Expectations
  expect(button).toBeInTheDocument();
});