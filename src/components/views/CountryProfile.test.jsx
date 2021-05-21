import React from 'react';
import { screen, render } from '@testing-library/react';
import CountryProfile from './CountryProfile';

it('renders CountryProfile component', () => {
  render(<CountryProfile />);
  
  expect(screen.getByText('Population of Country')).toBeTruthy();
});
