import { createContext } from 'react';

export interface RadioGroupContextProps {
  readonly name: string;
  readonly value?: string | number;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroupContext = createContext<RadioGroupContextProps | undefined>(
  undefined
);

if (process.env.NODE_ENV !== 'production') {
  RadioGroupContext.displayName = 'RadioGroupContext';
}

export default RadioGroupContext;
