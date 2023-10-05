export function moneyConversion(
  dollar: number,
  stateTax: number,
  dollarValue: number
): number {
  const IOF = 1.1;
  return dollar * (1 + stateTax / 100) * (dollarValue * (1 + IOF / 100));
}

export function cardConversion(
  dollar: number,
  stateTax: number,
  dollarValue: number
): number {
  const IOF = 6.4;
  return dollar * (1 + stateTax / 100) * (1 + IOF / 100) * dollarValue;
}

export function convertToBRL(value: number): string {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  });

  return formatter.format(value);
}
