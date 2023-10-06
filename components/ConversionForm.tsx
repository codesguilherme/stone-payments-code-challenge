import React, { useCallback } from 'react';

import Button from './Button';
import Radio from './Radio';
import Flex from './Flex';
import Text from './Text';
import TransferIcon from './TransferIcon';
import RadioGroup from './RadioGroup/RadioGroup';
import PercentageInput from './PercentageInput';
import CurrencyTextField from './CurrencyInput';

import { useCurrency } from 'providers/ConversionProvider';

import { cardConversion, moneyConversion } from 'utils/currency';
import { PurchaseType } from 'utils/enums';

const ConversionForm: React.FC = () => {
  const {
    dollarRate: dollarRate,
    purchaseType,
    taxRate,
    dollarAmount,
    setDollarAmount,
    setTaxRate,
    setPurchaseType,
    setResultAmount,
    setCurrentPage
  } = useCurrency();

  const isReadyToConvert = !dollarAmount && taxRate !== undefined;

  const handleConversion = useCallback(() => {
    const conversionFunction =
      purchaseType === PurchaseType.CASH ? moneyConversion : cardConversion;
    const result = conversionFunction(dollarAmount, taxRate, dollarRate);
    setResultAmount(result);
    setCurrentPage(1);
  }, [
    dollarAmount,
    taxRate,
    dollarRate,
    purchaseType,
    setResultAmount,
    setCurrentPage
  ]);

  return (
    <Flex alignItems="flex-start" alignSelf="start" spacing={5}>
      <Flex orientation="horizontal" spacing="large" style={{ maxWidth: 360 }}>
        <CurrencyTextField
          label="Dólar"
          value={dollarAmount}
          onValueChange={({ floatValue }) => setDollarAmount(floatValue ?? 0)}
        />
        <PercentageInput
          label="Taxa do Estado"
          placeholder="0 %"
          value={taxRate}
          onValueChange={({ floatValue }) => setTaxRate(floatValue ?? 0)}
        />
      </Flex>
      <Flex spacing={2}>
        <Text size="large" weight="medium">
          Tipo de compra
        </Text>
        <RadioGroup
          value={purchaseType}
          onChange={(e) => setPurchaseType(Number(e.target.value))}
        >
          <Radio label="Dinheiro" value={0} />
          <Radio label="Cartão" value={1} />
        </RadioGroup>
      </Flex>
      <Button
        startIcon={<TransferIcon />}
        disabled={isReadyToConvert}
        onClick={handleConversion}
      >
        Converter
      </Button>
    </Flex>
  );
};

export default ConversionForm;
