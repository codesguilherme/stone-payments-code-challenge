import React, { useContext, useCallback } from 'react';
import * as S from './styles';
import RadioGroupContext from 'contexts/RadioGroupContext';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  /**
   * An optional label for the radio input. When provided, this label is
   * displayed alongside the radio button.
   */
  readonly label?: string;

  /**
   * The value associated with the radio input. This value can be of type number or string.
   * It represents the value that will be used when the radio input is selected.
   */
  readonly value?: number | string;
}

const Radio: React.FC<RadioProps> = ({
  label,
  checked: checkedProp,
  name: nameProp,
  value: valueProp,
  ...rest
}) => {
  const radioGroup = useContext(RadioGroupContext);
  const name = nameProp ?? radioGroup?.name;

  const value = String(valueProp);

  const radioGroupChange = radioGroup?.onChange;
  const radioChecked =
    typeof checkedProp === 'undefined'
      ? radioGroup?.value === value
      : checkedProp;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (radioGroupChange) {
        radioGroupChange(e);
      }
    },
    [radioGroupChange]
  );

  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        name={name}
        checked={radioChecked}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <S.Control data-checked={radioChecked} />
      {!!label && <S.Label>{label}</S.Label>}
    </S.Wrapper>
  );
};

export default Radio;
