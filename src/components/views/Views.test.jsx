import React from 'react';
import { screen, render } from '@testing-library/react';
import Views from './Views';

it('renders Views component', () => {
  render(<Views />);
  
  expect(screen.getByText('Welcome')).toBeTruthy();
});
