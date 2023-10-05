import React from 'react';
import {
  NumericFormat,
  NumericFormatProps,
  InputAttributes
} from 'react-number-format';

import TextField, { TextFieldProps } from './TextField';

const PercentageInput: React.FC<
  Omit<TextFieldProps, keyof NumericFormatProps<InputAttributes>> &
    NumericFormatProps<InputAttributes>
> = ({ ...rest }) => {
  return (
    <NumericFormat
      suffix=" %"
      allowNegative={false}
      customInput={TextField}
      autoComplete="off"
      allowLeadingZeros={false}
      thousandSeparator={false}
      decimalSeparator="."
      decimalScale={2}
      isAllowed={({ floatValue }) =>
        floatValue === undefined || floatValue <= 100
      }
      {...rest}
    />
  );
};

export default PercentageInput;
