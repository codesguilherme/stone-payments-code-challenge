import React from 'react';
import styled, {
  CSSProperties,
  DefaultTheme,
  ExecutionProps
} from 'styled-components';

export interface StackProps
  extends React.HTMLAttributes<HTMLElement>,
    ExecutionProps {
  /**
   * The orientation of the stack layout. It can be either 'vertical' or 'horizontal'.
   * @default vertical
   */
  readonly orientation?: 'vertical' | 'horizontal';

  /**
   * Specifies how child elements are aligned along the cross-axis of the stack.
   */
  readonly alignItems?: CSSProperties['alignItems'];

  /**
   * Specifies how child elements are aligned along the main axis of the stack.
   */
  readonly justifyContent?: CSSProperties['justifyContent'];

  /**
   * Determines the spacing between child elements within the stack.
   * It uses spacing values defined in the project's theme,
   * such as 'small', 'medium', etc.
   */
  readonly spacing?: keyof DefaultTheme['spacing'];
}

const StackRoot = styled('div').withConfig({
  shouldForwardProp: (prop) =>
    !['orientation', 'alignItems', 'spacing', 'justifyContent'].includes(prop)
})<StackProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === 'vertical' ? 'column' : 'row'};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.spacing && props.theme.spacing[props.spacing]};
`;

/**
 * The `Stack` component is a versatile layout container that allows you to
 * create vertical and horizontal stacks of elements with customizable
 * spacing and alignment.
 *
 * Usage example:
 *
 * ```js
 * <Stack orientation="horizontal" alignItems="center" spacing={2}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Stack>
 * ```
 */
const Stack: React.FC<StackProps> = ({ orientation = 'vertical', ...rest }) => {
  return <StackRoot orientation={orientation} {...rest} />;
};

export default Stack;
