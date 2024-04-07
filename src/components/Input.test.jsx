import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './Input'

test('should render input correctly', async () => {
  // Setup
  const handleChangeMock = jest.fn();
    const labelText = 'Username';
    const labelFor = 'username';
    const id = 'username';
    const name = 'username';
    const type = 'text';
    const placeholder = 'Enter your username';
    const customClass = 'my-input-class';

    render(
      <Input
        handleChange={handleChangeMock}
        value=""
        labelText={labelText}
        labelFor={labelFor}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        customClass={customClass}
      />
    );

    // Expectations
    const inputElement = screen.getByLabelText(labelText);
    expect(inputElement).toBeInTheDocument();
})