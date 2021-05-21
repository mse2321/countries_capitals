import React from 'react';
import { screen, render } from '@testing-library/react';
import CountryList from './CountryList';

it('renders CountryList component', () => {
  render(<CountryList />);
  
  expect(screen.getByText('Capital')).toBeTruthy();
});
