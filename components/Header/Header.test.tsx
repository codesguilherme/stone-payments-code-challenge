import axiosImpl from 'lib/http-client';

import { renderWithTheme } from 'test/utils/renderWithTheme';
import { act, waitFor } from '@testing-library/react';

import Header from '.';

// Mock axios.get to avoid real network calls
jest.mock('lib/http-client');

const axios = axiosImpl as jest.Mocked<typeof axiosImpl>;

const mockResponseData = {
  USDBRL: {
    timestamp: 1696450020
  }
};

describe('<Header />', () => {
  it('renders the component and displays last data update time correctly', async () => {
    axios.get.mockResolvedValue({ data: mockResponseData });

    const { getByText } = await act(async () => renderWithTheme(<Header />));

    await waitFor(() => {
      expect(
        getByText('4 de outubro de 2023 às 20:07 UTC')
      ).toBeInTheDocument();
    });
  });
});
