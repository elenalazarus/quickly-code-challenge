import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom';

test('Should render header correctly', async () => {
  
  // Setup
  const heading = 'Welcome to My App';
  const paragraph = 'This is a sample header.';
  const linkName = 'Learn More';
  const linkUrl = '/about';
  
  render(
    <MemoryRouter>
      <Header
          heading={heading}
          paragraph={paragraph}
          linkName={linkName}
          linkUrl={linkUrl}
        />
    </MemoryRouter>
  );
  const headerHeading = screen.getByText(heading);

  // Expectations
  expect(headerHeading).toBeInTheDocument();
});