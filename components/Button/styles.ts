import styled, { DefaultTheme, css } from 'styled-components';
import { ButtonProps } from '.';

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.stoneGreen};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.primary};
    }

    &:disabled {
      background-color: ${theme.colors.mediumGray2};
    }
  `,

  secondary: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.mediumGray3};
    color: ${theme.colors.darkGray};

    * {
      color: ${theme.colors.mediumGray2};
    }
  `
};

export const Wrapper = styled('button').withConfig({
  shouldForwardProp: (prop) => prop !== 'variant'
})<ButtonProps>`
  ${({ theme, variant }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.medium};

    padding-inline: ${theme.spacing.medium};
    padding-block: ${theme.spacing.medium};
    border-radius: ${theme.spacing[2]};

    border-width: 1px;
    border-style: solid;

    box-shadow: ${theme.shadows.small};

    font-size: ${theme.fontSizes.medium.fontSize};
    line-height: ${theme.fontSizes.medium.lineHeight};
    font-weight: ${theme.fontWeights.semibold};
    font-family: ${theme.fonts.SharonSans};

    outline: none;
    cursor: pointer;
    user-select: none;
    background: none;

    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
    }

    &:disabled {
      cursor: not-allowed;
      box-shadow: none !important;
    }

    ${!!variant && wrapperModifiers[variant](theme)}
  `}
`;

export const Icon = styled.span`
  width: 24px;
  height: 24px;
`;
