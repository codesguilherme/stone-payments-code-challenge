import styled, { DefaultTheme, css } from 'styled-components';
import { TextProps } from '.';

const getSize = (
  theme: DefaultTheme,
  size: keyof DefaultTheme['fontSizes']
) => {
  return css`
    font-size: ${theme.fontSizes[size].fontSize};
    line-height: ${theme.fontSizes[size].lineHeight};
  `;
};

export const Wrapper = styled('span').withConfig({
  shouldForwardProp: (prop) =>
    !['weight', 'font', 'color', 'size'].includes(prop)
})<TextProps>`
  ${({ theme, weight, color, font, size }) => css`
    padding: 0;
    margin: 0;

    font-weight: ${weight && theme.fontWeights[weight]};
    color: ${color && theme.colors[color]};
    font-family: ${font && theme.fonts[font]};

    ${size && getSize(theme, size)}
  `}
`;
