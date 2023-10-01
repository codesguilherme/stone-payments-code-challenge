import { renderWithTheme } from 'test/utils/renderWithTheme';
import { fireEvent } from '@testing-library/react';

import TextField from '.';

describe('<TextField />', () => {
  it('should render without errors', () => {
    const { container } = renderWithTheme(<TextField />);
    expect(container).toBeTruthy();
  });

  it('should render with label', () => {
    const { getByLabelText } = renderWithTheme(
      <TextField label="Label" name="Label" />
    );

    expect(getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render without label', () => {
    const { container } = renderWithTheme(<TextField />);

    expect(container.querySelector('label')).not.toBeInTheDocument();
  });

  it('should handle input correctly', () => {
    const { getByLabelText } = renderWithTheme(
      <TextField label="Test Input" />
    );
    const inputElement = getByLabelText('Test Input') as HTMLInputElement;

    // Simulate user input
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    // Ensure that the input value is updated
    expect(inputElement.value).toBe('Hello');
  });

  it('should use provided id', () => {
    const { getByLabelText } = renderWithTheme(
      <TextField label="Test Input" id="customId" />
    );
    const inputElement = getByLabelText('Test Input') as HTMLInputElement;

    // Ensure that the id attribute is set to 'customId'
    expect(inputElement.getAttribute('id')).toBe('customId');
  });
});
