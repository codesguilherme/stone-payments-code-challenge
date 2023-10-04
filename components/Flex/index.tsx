import React from 'react';
import { CSSProperties, DefaultTheme, ExecutionProps } from 'styled-components';

import * as S from './styles';

export interface FlexProps
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

  /** Determines the alignment of the component within its container. */
  readonly alignSelf?: CSSProperties['alignSelf'];
}

/**
 * The `Flex` component is a versatile layout container that allows you to
 * create vertical and horizontal stacks of elements with customizable
 * spacing and alignment.
 *
 * Usage example:
 *
 * ```js
 * <Flex orientation="horizontal" alignItems="center" spacing={2}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Flex>
 * ```
 */
const Flex: React.FC<FlexProps> = ({ orientation = 'vertical', ...rest }) => {
  return <S.Wrapper orientation={orientation} {...rest} />;
};

export default Flex;
