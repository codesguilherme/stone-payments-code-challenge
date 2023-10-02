import { renderWithTheme } from 'test/utils/renderWithTheme';
import RadioGroup from './RadioGroup';
import Radio from 'components/Radio';
import { fireEvent } from '@testing-library/react';

describe('<RadioGroup />', () => {
  it('should render without errors', () => {
    const { container } = renderWithTheme(<RadioGroup />);
    expect(container).toBeTruthy();
  });

  it('should support uncontrolled mode', () => {
    const { getByRole } = renderWithTheme(
      <RadioGroup>
        <Radio value="one" />
      </RadioGroup>
    );

    const radio = getByRole('radio') as HTMLInputElement;
    fireEvent.click(radio);

    expect(radio.checked).toEqual(true);
  });

  it('should support default value in uncontrolled mode', () => {
    const { getAllByRole } = renderWithTheme(
      <RadioGroup defaultValue="one">
        <Radio value="one" />
        <Radio value="two" />
      </RadioGroup>
    );

    const radios = getAllByRole('radio') as HTMLInputElement[];

    expect(radios[0].checked).toEqual(true);

    fireEvent.click(radios[1]);
    expect(radios[1].checked).toEqual(true);
  });

  it('should support number value', () => {
    const { getAllByRole } = renderWithTheme(
      <RadioGroup defaultValue={1}>
        <Radio value={1} />
        <Radio value={2} />
      </RadioGroup>
    );

    const radios = getAllByRole('radio') as HTMLInputElement[];

    expect(radios[0]).toHaveAttribute('value', '1');
    expect(radios[0].checked).toEqual(true);
    expect(radios[1].checked).toEqual(false);

    fireEvent.click(radios[1]);

    expect(radios[0].checked).toEqual(false);
    expect(radios[1].checked).toEqual(true);
  });
});
