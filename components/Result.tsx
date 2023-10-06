import React, { useContext } from 'react';

import Button from 'components/Button';
import Flex from 'components/Flex';
import Text from 'components/Text';
import LeftArrowIcon from 'components/LeftArrowIcon';

import ConversionContext from 'contexts/ConversionContext';

import { convertToBRL } from 'utils/currency';
import { PurchaseType } from 'utils/enums';

const getPurchaseTypeLabel = (purchaseType: PurchaseType) =>
  purchaseType === PurchaseType.CASH ? 'dinheiro' : 'cartão';

const Result: React.FC = () => {
  const {
    dollarRate: dollarRate,
    resultAmount,
    taxRate,
    purchaseType,
    setCurrentPage
  } = useContext(ConversionContext)!;

  const formattedResultAmount = convertToBRL(resultAmount);
  const formattedDollarRate = convertToBRL(dollarRate);
  const purchaseTypeLabel = getPurchaseTypeLabel(purchaseType);

  return (
    <div>
      <div>
        <Flex spacing={5} alignItems="flex-start">
          <Button
            variant="secondary"
            startIcon={<LeftArrowIcon />}
            onClick={() => setCurrentPage(0)}
          >
            Voltar
          </Button>
          <div>
            <Text
              as="p"
              font="SharonSans"
              size="xLarge"
              weight="semibold"
              color="darkGray2"
            >
              O resultado do cálculo é
            </Text>
            <Text
              as="p"
              font="SharonSans"
              size="xxxLarge"
              weight="semibold"
              color="stoneGreen"
            >
              {formattedResultAmount}
            </Text>
          </div>
          <Flex spacing={3}>
            <Text as={'p'} color="mediumGray" size="small">
              <Text weight="medium" color="mediumGray" size="small">
                Compra no {purchaseTypeLabel} e taxa de
              </Text>{' '}
              {taxRate} %
            </Text>
            <Text as={'p'} color="mediumGray" size="small">
              <Text weight="medium" color="mediumGray" size="small">
                Cotação do Dólar:
              </Text>{' '}
              $1,00 = {formattedDollarRate}
            </Text>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Result;
