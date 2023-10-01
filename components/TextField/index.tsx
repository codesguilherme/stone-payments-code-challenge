import React, { useId } from 'react';
import * as S from './styles';

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The label text to display above the input field. */
  readonly label?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const { label, id: idProp, ...rest } = props;

    const uuid = useId();
    const id = idProp ?? `field-${uuid}`;

    return (
      <S.Wrapper>
        {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
        <S.Input id={id} type="text" ref={ref} {...rest} />
      </S.Wrapper>
    );
  }
);

export default TextField;
