import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from './Home';

it('renders Home component', () => {
  render(<Home />);
  
  expect(screen.getByText('Welcome')).toBeTruthy();
});
