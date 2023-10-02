import { renderWithTheme } from 'test/utils/renderWithTheme';
import { fireEvent } from '@testing-library/react';

import Radio from '.';

describe('<Radio />', () => {
  it('should render without errors', () => {
    const { container } = renderWithTheme(<Radio />);
    expect(container).toBeTruthy();
  });

  it('should render with a label', () => {
    const { getByText } = renderWithTheme(<Radio label="Label Test" />);
    expect(getByText('Label Test')).toBeTruthy();
  });

  it('should render without label', () => {
    const { queryByLabelText } = renderWithTheme(<Radio />);
    expect(queryByLabelText('Label Test')).not.toBeInTheDocument();
  });

  it('should call onChange callback when checked', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = renderWithTheme(
      <Radio label="Test Radio" value="A" onChange={handleChange} />
    );
    const radioInput = getByLabelText('Test Radio') as HTMLInputElement;

    // Simulate a click to check the radio
    fireEvent.click(radioInput);

    // After clicking, the onChange callback should be called
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should use provided name', () => {
    const { getByLabelText } = renderWithTheme(
      <Radio label="Test Radio" value={0} name="customName" />
    );

    const radioInput = getByLabelText('Test Radio') as HTMLInputElement;

    // Ensure that the name attribute is set to 'customName'
    expect(radioInput.getAttribute('name')).toBe('customName');
  });
});
