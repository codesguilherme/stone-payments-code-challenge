import React from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Theme from 'styles/theme';

export function renderWithTheme(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) {
  return render(<ThemeProvider theme={Theme}>{ui}</ThemeProvider>, options);
}
