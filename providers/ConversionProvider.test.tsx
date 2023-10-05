import axiosImpl from 'lib/http-client';
import ConversionProvider, { useCurrency } from './ConversionProvider';
import { act, render, waitFor } from '@testing-library/react';

jest.mock('lib/http-client');

const axios = axiosImpl as jest.Mocked<typeof axiosImpl>;

const mockResponse = {
  USDBRL: {
    bid: 4.98
  }
};

describe('<ConversionProvider />', () => {
  axios.get.mockResolvedValue({ data: mockResponse });

  it('renders children and initializes state', async () => {
    const { getByText } = await act(async () =>
      render(
        <ConversionProvider>
          <div>Child Component</div>
        </ConversionProvider>
      )
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });

  it('fetch dollar rate from API and updates state', async () => {
    function TestComponent() {
      const { dollarRate } = useCurrency();

      return (
        <ConversionProvider>
          <div>{dollarRate}</div>
        </ConversionProvider>
      );
    }

    const { getByText } = await act(async () =>
      render(
        <ConversionProvider>
          <TestComponent />
        </ConversionProvider>
      )
    );

    await waitFor(() => {
      expect(getByText('4.98')).toBeInTheDocument();
    });
  });
});
