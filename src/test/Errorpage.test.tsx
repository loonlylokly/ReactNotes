import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Errorpage from '../pages/Errorpage';

describe('render pages', () => {
  it('Error page', () => {
    render(
      <BrowserRouter>
        <Errorpage />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404 Not Found');
  });
});
