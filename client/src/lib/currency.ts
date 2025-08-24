
// Currency conversion rates (you can replace this with a real API)
const EXCHANGE_RATES: Record<string, number> = {
  USD: 1,      // Base currency
  GBP: 0.79,   // British Pound
  EUR: 0.92,   // Euro
  CAD: 1.35,   // Canadian Dollar
  AUD: 1.50,   // Australian Dollar
  JPY: 149,    // Japanese Yen
  INR: 83,     // Indian Rupee
  CNY: 7.2,    // Chinese Yuan
  BRL: 5.0,    // Brazilian Real
  MXN: 17,     // Mexican Peso
};

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  GBP: '£',
  EUR: '€',
  CAD: 'C$',
  AUD: 'A$',
  JPY: '¥',
  INR: '₹',
  CNY: '¥',
  BRL: 'R$',
  MXN: '$',
};

const CURRENCY_FORMATS: Record<string, Intl.NumberFormatOptions> = {
  USD: { style: 'currency', currency: 'USD' },
  GBP: { style: 'currency', currency: 'GBP' },
  EUR: { style: 'currency', currency: 'EUR' },
  CAD: { style: 'currency', currency: 'CAD' },
  AUD: { style: 'currency', currency: 'AUD' },
  JPY: { style: 'currency', currency: 'JPY', minimumFractionDigits: 0 },
  INR: { style: 'currency', currency: 'INR' },
  CNY: { style: 'currency', currency: 'CNY' },
  BRL: { style: 'currency', currency: 'BRL' },
  MXN: { style: 'currency', currency: 'MXN' },
};

const COUNTRY_TO_CURRENCY: Record<string, string> = {
  US: 'USD', GB: 'GBP', UK: 'GBP', DE: 'EUR', FR: 'EUR', IT: 'EUR', ES: 'EUR',
  NL: 'EUR', BE: 'EUR', AT: 'EUR', FI: 'EUR', IE: 'EUR', PT: 'EUR', GR: 'EUR',
  CA: 'CAD', AU: 'AUD', JP: 'JPY', IN: 'INR', CN: 'CNY', BR: 'BRL', MX: 'MXN',
};

export interface CurrencyInfo {
  code: string;
  symbol: string;
  rate: number;
  locale: string;
}

export async function detectUserCurrency(): Promise<CurrencyInfo> {
  try {
    // Try to get user's location from browser API
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let countryCode = 'US'; // Default to US
    
    // Extract country from timezone (basic approach)
    if (timezone.includes('Europe/')) {
      countryCode = 'DE'; // Default to EUR for Europe
    } else if (timezone.includes('Asia/Tokyo')) {
      countryCode = 'JP';
    } else if (timezone.includes('Asia/Shanghai') || timezone.includes('Asia/Beijing')) {
      countryCode = 'CN';
    } else if (timezone.includes('Asia/Kolkata')) {
      countryCode = 'IN';
    } else if (timezone.includes('Australia/')) {
      countryCode = 'AU';
    } else if (timezone.includes('America/Toronto') || timezone.includes('America/Vancouver')) {
      countryCode = 'CA';
    } else if (timezone.includes('America/Sao_Paulo')) {
      countryCode = 'BR';
    } else if (timezone.includes('America/Mexico_City')) {
      countryCode = 'MX';
    }

    // Try to get more accurate location info
    try {
      const response = await fetch('https://ipapi.co/json/', { 
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      });
      const data = await response.json();
      if (data.country_code) {
        countryCode = data.country_code;
      }
    } catch (error) {
      console.log('IP geolocation fallback failed, using timezone-based detection');
    }

    const currencyCode = COUNTRY_TO_CURRENCY[countryCode] || 'USD';
    const locale = `en-${countryCode}`;

    return {
      code: currencyCode,
      symbol: CURRENCY_SYMBOLS[currencyCode] || '$',
      rate: EXCHANGE_RATES[currencyCode] || 1,
      locale: locale,
    };
  } catch (error) {
    console.error('Error detecting currency:', error);
    // Fallback to USD
    return {
      code: 'USD',
      symbol: '$',
      rate: 1,
      locale: 'en-US',
    };
  }
}

export function convertPrice(usdPrice: number, currencyInfo: CurrencyInfo): number {
  return Math.round(usdPrice * currencyInfo.rate);
}

export function formatCurrency(amount: number, currencyInfo: CurrencyInfo): string {
  try {
    const formatter = new Intl.NumberFormat(currencyInfo.locale, CURRENCY_FORMATS[currencyInfo.code]);
    return formatter.format(amount);
  } catch (error) {
    // Fallback formatting
    return `${currencyInfo.symbol}${amount.toLocaleString()}`;
  }
}

export function getPeriodText(currencyInfo: CurrencyInfo): Record<string, string> {
  const isJPY = currencyInfo.code === 'JPY';
  const isINR = currencyInfo.code === 'INR';
  
  return {
    foundation: 'one-time',
    acceleration: isJPY ? '/mo · 12 months' : isINR ? '/mo · 12 months' : '/mo · 12 months'
  };
}
