import React, { useMemo, useId, useState } from 'react';
import RadioGroupContext, {
  RadioGroupContextProps
} from 'contexts/RadioGroupContext';

import * as S from './styles';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The currently selected value of the radio group. This should correspond
   * to the `value` prop of one of the child `Radio` components.
   */
  readonly value?: string | number;

  /**
   * The default value for the radio group. This value is used when no
   * value is explicitly set. It should correspond to the `value` prop of one
   * of the child `Radio` components.
   */
  readonly defaultValue?: RadioGroupProps['value'];

  /**
   * A callback function that is triggered when the selected value in
   * the radio group changes.
   */
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * RadioGroup is a component that wraps a group of radio input elements.
 * It provides a context for its child radio inputs to manage their state.
 *
 * Basic usage example:
 *
 * ```js
 * <RadioGroup defaultValue="one">
 *   <Radio value="one" />
 *   <Radio value="two" />
 * </RadioGroup>
 * ```
 */
const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  value: valueProp,
  defaultValue,
  onChange: onChangeProp
}) => {
  const [valueState, setValueState] = useState<string>(String(defaultValue));

  // Check if the RadioGroup is controlled or uncontrolled.
  const isControlled = typeof valueProp !== 'undefined';
  const value = isControlled ? valueProp : valueState;

  // Generate a unique ID for the radio group.
  const uuid = useId();
  const name = `radio-${uuid}`;

  const contextValue = useMemo<RadioGroupContextProps>(
    () => ({
      name,
      value: String(value),
      onChange: (e) => {
        if (!isControlled) {
          setValueState(e.target.value);
        }

        if (onChangeProp) {
          onChangeProp(e);
        }
      }
    }),
    [name, value, isControlled, onChangeProp]
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <S.Wrapper role="group">{children}</S.Wrapper>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
