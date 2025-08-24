
import { useState, useEffect } from 'react';
import { detectUserCurrency, type CurrencyInfo } from '@/lib/currency';

export function useCurrency() {
  const [currencyInfo, setCurrencyInfo] = useState<CurrencyInfo>({
    code: 'USD',
    symbol: '$',
    rate: 1,
    locale: 'en-US',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadCurrency = async () => {
      try {
        const currency = await detectUserCurrency();
        if (mounted) {
          setCurrencyInfo(currency);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to detect currency:', error);
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadCurrency();

    return () => {
      mounted = false;
    };
  }, []);

  return { currencyInfo, isLoading };
}
