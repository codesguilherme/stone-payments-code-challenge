import React from 'react';
import { fireEvent } from '@testing-library/react';

import Button from '.';
import { renderWithTheme } from 'test/utils/renderWithTheme';
import Theme from 'styles/theme';

describe('Button Component', () => {
  it('should render without errors', () => {
    const { container } = renderWithTheme(<Button />);
    expect(container).toBeTruthy();
  });

  it('should render children text', () => {
    const { getByText } = renderWithTheme(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('should render startIcon', () => {
    const { container } = renderWithTheme(
      <Button startIcon={<span data-testid="icon">Icon</span>}>Click Me</Button>
    );
    const icon = container.querySelector('[data-testid="icon"]');
    expect(icon).toBeTruthy();
  });

  it('should render with primary styles by default', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button-test">Button Test</Button>
    );

    expect(getByTestId('button-test')).toHaveStyleRule(
      'background-color',
      Theme.colors.stoneGreen
    );
  });

  it('should render with secondary styles', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button-test" variant="secondary">
        Button Test
      </Button>
    );

    expect(getByTestId('button-test')).toHaveStyleRule(
      'border-color',
      Theme.colors.mediumGray3
    );
  });

  it('should handle click event', () => {
    const handleClick = jest.fn();
    const { getByText } = renderWithTheme(
      <Button onClick={handleClick}>Click Me</Button>
    );
    const buttonElement = getByText('Click Me');

    // Simulate a click on the button
    fireEvent.click(buttonElement);

    // Ensure that the click handler is called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
