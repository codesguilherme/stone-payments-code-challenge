import { PurchaseType } from 'utils/enums';
import { createContext } from 'react';

export interface ConversionContextProps {
  /** The current page number in the conversion process. */
  readonly currentPage: number;

  /** The result amount of currency conversion. */
  readonly resultAmount: number;

  /** The current dollar exchange rate used for the conversion. */
  readonly dollarRate: number;

  /** The type of purchase being made (e.g., 'Cash' or 'Credit'). */
  readonly purchaseType: PurchaseType;

  /** The tax rate applied to the conversion. */
  readonly taxRate: number;

  /** The dollar amount to be converted. */
  readonly dollarAmount: number;

  /**
   * A function to set the result amount of the conversion.
   * @param value - The new result amount to set.
   */
  readonly setResultAmount: (value: number) => void;

  /**
   * A function to set the current page of the conversion feature.
   * @param value - The new page number to set.
   */
  readonly setCurrentPage: (value: number) => void;

  /**
   * A function to set the purchase type for the conversion.
   * @param value - The new purchase type to set (e.g., 'Cash' or 'Credit').
   */
  readonly setPurchaseType: (value: PurchaseType) => void;

  /**
   * A function to set the tax rate for the conversion.
   * @param value - The new tax rate to set.
   */
  readonly setTaxRate: (value: number) => void;

  /**
   * A function to set the dollar amount to be converted.
   * @param value - The new dollar amount to set.
   */
  readonly setDollarAmount: (value: number) => void;
}

/**
 * A React context that provides access to the currency conversion
 * context properties. Consumers of this context can access and modify currency
 * conversion-related data and functions.
 */
const ConversionContext = createContext<ConversionContextProps | undefined>(
  undefined
);

if (process.env.NODE_ENV !== 'production') {
  ConversionContext.displayName = 'ConversionContext';
}

export default ConversionContext;
