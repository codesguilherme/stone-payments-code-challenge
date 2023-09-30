import React from 'react';
import { DefaultTheme, ExecutionProps } from 'styled-components';
import * as S from './styles';

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    ExecutionProps {
  /** Specifies the font weight of the text. */
  readonly weight?: keyof DefaultTheme['fontWeights'];

  /** Specifies the text color. */
  readonly color?: keyof DefaultTheme['colors'];

  /** Specifies the font family for the text. */
  readonly font?: keyof DefaultTheme['fonts'];

  /** Specifies the font size of the text. */
  readonly size?: keyof DefaultTheme['fontSizes'];
}

/**
 * Text component for displaying text with specified styles.
 *
 * This component allows you to display text with various style options such as
 * font family, color, font weight, and font size predefined in the global theme.
 */
const Text: React.FC<TextProps> = ({
  font = 'Roboto',
  color = 'darkGray',
  weight = 'regular',
  size = 'medium',
  ...rest
}) => {
  return (
    <S.Wrapper
      font={font}
      color={color}
      weight={weight}
      size={size}
      {...rest}
    />
  );
};

export default Text;
