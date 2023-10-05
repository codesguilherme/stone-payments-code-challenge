import React from 'react';
import {
  NumericFormat,
  NumericFormatProps,
  InputAttributes
} from 'react-number-format';

import TextField, { TextFieldProps } from './TextField';

const CurrencyTextField: React.FC<
  Omit<TextFieldProps, keyof NumericFormatProps<InputAttributes>> &
    NumericFormatProps<InputAttributes>
> = ({ ...rest }) => {
  return (
    <NumericFormat
      thousandSeparator="."
      decimalSeparator=","
      prefix="$ "
      decimalScale={2}
      allowNegative={false}
      customInput={TextField}
      autoComplete="off"
      {...rest}
    />
  );
};

export default CurrencyTextField;
