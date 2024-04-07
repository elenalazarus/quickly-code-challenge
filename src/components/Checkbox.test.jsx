import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Checkbox from './Checkbox'

test('Should render checkbox correctly', async () => {
    // Setup
    render(
      <Checkbox />
    );
    const checkboxInput = screen.queryByRole('checkbox');

    // Expectations
    expect(checkboxInput).toBeInTheDocument();
});