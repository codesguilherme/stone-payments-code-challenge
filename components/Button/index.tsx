import React from 'react';
import * as S from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An optional React element to be displayed as the starting icon
   * within the button.
   */
  readonly startIcon?: React.ReactElement;

  /**
   * The variant of the button, which can be one of the following values:
   * - 'primary': Represents the primary style of the button.
   * - 'secondary': Represents the secondary style of the button.
   */
  readonly variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  startIcon,
  variant = 'primary',
  ...rest
}) => {
  return (
    <S.Wrapper variant={variant} {...rest}>
      {!!startIcon && <S.Icon>{React.cloneElement(startIcon)}</S.Icon>}
      {children}
    </S.Wrapper>
  );
};

export default Button;
