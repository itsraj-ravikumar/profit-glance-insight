
// Financial data service to fetch market data, portfolio info, etc.

// Types for financial data
export type StockQuote = {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  companyName: string;
};

export type PortfolioItem = {
  symbol: string;
  shares: number;
  purchasePrice: number;
  currentPrice: number;
  value: number;
  gain: number;
  gainPercent: number;
};

export type FinancialMetric = {
  name: string;
  value: number;
  previousValue: number;
  change: number;
  trend: "up" | "down" | "neutral";
};

// This simulates fetching market data from API
export const fetchMarketData = async (symbols: string[]): Promise<StockQuote[]> => {
  try {
    // In real app, you would call an actual API like:
    // const response = await fetch(`https://api.example.com/quotes?symbols=${symbols.join(',')}`);
    // const data = await response.json();
    
    // For demo we'll generate random data
    return symbols.map(symbol => {
      const basePrice = Math.random() * 1000 + 10;
      const change = Math.random() * 20 - 10;
      const changePercent = (change / basePrice) * 100;
      
      return {
        symbol,
        price: parseFloat(basePrice.toFixed(2)),
        change: parseFloat(change.toFixed(2)),
        changePercent: parseFloat(changePercent.toFixed(2)),
        companyName: getCompanyName(symbol),
      };
    });
  } catch (error) {
    console.error("Error fetching market data:", error);
    throw error;
  }
};

// Get a list of financial metrics
export const fetchFinancialMetrics = async (companyId: string): Promise<FinancialMetric[]> => {
  try {
    // In real app, call an actual financial API
    // For demo we'll return mock data
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
    
    return [
      {
        name: "Revenue",
        value: 2850000,
        previousValue: 2450000,
        change: 16.3,
        trend: "up"
      },
      {
        name: "EBITDA",
        value: 980000,
        previousValue: 850000,
        change: 15.3,
        trend: "up"
      },
      {
        name: "Net Profit",
        value: 560000,
        previousValue: 490000,
        change: 14.3,
        trend: "up"
      },
      {
        name: "Gross Margin",
        value: 42.5,
        previousValue: 40.2,
        change: 5.7,
        trend: "up"
      },
      {
        name: "Cash on Hand",
        value: 1250000,
        previousValue: 980000,
        change: 27.6,
        trend: "up"
      },
    ];
  } catch (error) {
    console.error("Error fetching financial metrics:", error);
    throw error;
  }
};

// Fetch user portfolio
export const fetchUserPortfolio = async (userId: string): Promise<PortfolioItem[]> => {
  try {
    // In real app, call an API
    await new Promise(resolve => setTimeout(resolve, 600)); // Simulate network delay
    
    // Mock portfolio data
    const symbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'TSLA'];
    const portfolio: PortfolioItem[] = [];
    
    for (const symbol of symbols) {
      const shares = Math.floor(Math.random() * 100) + 1;
      const purchasePrice = Math.random() * 500 + 50;
      const currentPrice = purchasePrice * (1 + (Math.random() * 0.4 - 0.2));
      const value = shares * currentPrice;
      const gain = value - (shares * purchasePrice);
      const gainPercent = (gain / (shares * purchasePrice)) * 100;
      
      portfolio.push({
        symbol,
        shares,
        purchasePrice: parseFloat(purchasePrice.toFixed(2)),
        currentPrice: parseFloat(currentPrice.toFixed(2)),
        value: parseFloat(value.toFixed(2)),
        gain: parseFloat(gain.toFixed(2)),
        gainPercent: parseFloat(gainPercent.toFixed(2)),
      });
    }
    
    return portfolio;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw error;
  }
};

// Helper function to get company names
function getCompanyName(symbol: string): string {
  const companies: Record<string, string> = {
    'AAPL': 'Apple Inc.',
    'MSFT': 'Microsoft Corporation',
    'GOOGL': 'Alphabet Inc.',
    'AMZN': 'Amazon.com Inc.',
    'FB': 'Meta Platforms Inc.',
    'TSLA': 'Tesla, Inc.',
    'NVDA': 'NVIDIA Corporation',
    'JPM': 'JPMorgan Chase & Co.',
    'V': 'Visa Inc.',
    'JNJ': 'Johnson & Johnson'
  };
  
  return companies[symbol] || `${symbol} Corp.`;
}
