import styled, { css } from 'styled-components';
import { FlexProps } from '.';

export const Wrapper = styled('div').withConfig({
  shouldForwardProp: (prop) =>
    ![
      'orientation',
      'alignItems',
      'spacing',
      'justifyContent',
      'alignSelf'
    ].includes(prop)
})<FlexProps>`
  ${({
    orientation,
    alignItems,
    justifyContent,
    spacing,
    theme,
    alignSelf
  }) => css`
    display: flex;
    flex-direction: ${orientation === 'vertical' ? 'column' : 'row'};
    align-items: ${alignItems};
    align-self: ${alignSelf};
    justify-content: ${justifyContent};
    gap: ${spacing && theme.spacing[spacing]};
  `}
`;
