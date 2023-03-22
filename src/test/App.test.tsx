import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from '../App';

describe('render pages', () => {
  it('App page', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
