import { useEffect, useState } from 'react';

import Flex from '../Flex';
import MainLogo from '../MainLogo';
import Text from '../Text';

import axios from 'lib/http-client';
import { formatTimestamp } from 'utils/format-timestamp';

export default function Header() {
  const [lastDataUpdate, setLastDataUpdate] = useState('');

  const fetchLastDataUpdateTime = async () => {
    await axios
      .get('/USD-BRL')
      .then((response) => setLastDataUpdate(response.data['USDBRL'].timestamp));
  };

  useEffect(() => {
    fetchLastDataUpdateTime();
  }, []);

  return (
    <Flex
      orientation="horizontal"
      alignItems="center"
      alignSelf="start"
      spacing={6}
    >
      <MainLogo />
      <Flex spacing={1}>
        <Text as="p" color="darkGray2" size="large" weight="medium">
          {formatTimestamp(Number(lastDataUpdate))}
        </Text>
        <Text as="p" color="mediumGray2" size="small">
          Dados de câmbio disponibilizados pela Morningstar.
        </Text>
      </Flex>
    </Flex>
  );
}
