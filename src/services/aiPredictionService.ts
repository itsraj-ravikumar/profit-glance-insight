
// AI Prediction Service - This is a mock service that would normally connect to an AI API

export type PredictionTimeframe = 'week' | 'month' | '3months' | '6months' | 'year';

export type StockPrediction = {
  symbol: string;
  currentPrice: number;
  predictedPrice: number;
  predictedChange: number;
  predictedChangePercent: number;
  confidence: number;
  timeframe: PredictionTimeframe;
  riskLevel: 'low' | 'medium' | 'high';
};

export type MarketPrediction = {
  trend: 'bullish' | 'bearish' | 'neutral';
  confidence: number;
  timeframe: PredictionTimeframe;
  insights: string[];
};

// Mock function to generate predictions for stocks
export const predictStockPerformance = async (
  symbol: string,
  timeframe: PredictionTimeframe = 'month'
): Promise<StockPrediction> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Get a random base price
  const currentPrice = Math.random() * 1000 + 50;
  
  // Generate prediction variables
  let multiplier: number;
  switch (timeframe) {
    case 'week': multiplier = 0.05; break;
    case 'month': multiplier = 0.1; break;
    case '3months': multiplier = 0.2; break;
    case '6months': multiplier = 0.3; break;
    case 'year': multiplier = 0.5; break;
  }
  
  // Add some randomness to predictions
  const direction = Math.random() > 0.5 ? 1 : -1;
  const changePercent = (Math.random() * multiplier * 100) * direction;
  const predictedChange = currentPrice * (changePercent / 100);
  const predictedPrice = currentPrice + predictedChange;
  
  // Determine risk level
  let riskLevel: 'low' | 'medium' | 'high';
  const volatility = Math.abs(changePercent);
  if (volatility < 5) riskLevel = 'low';
  else if (volatility < 15) riskLevel = 'medium';
  else riskLevel = 'high';
  
  // Determine confidence based on timeframe (longer = less confident)
  let confidence: number;
  switch (timeframe) {
    case 'week': confidence = 0.7 + Math.random() * 0.2; break;
    case 'month': confidence = 0.6 + Math.random() * 0.2; break;
    case '3months': confidence = 0.5 + Math.random() * 0.2; break;
    case '6months': confidence = 0.4 + Math.random() * 0.2; break;
    case 'year': confidence = 0.3 + Math.random() * 0.2; break;
  }
  
  return {
    symbol,
    currentPrice: parseFloat(currentPrice.toFixed(2)),
    predictedPrice: parseFloat(predictedPrice.toFixed(2)),
    predictedChange: parseFloat(predictedChange.toFixed(2)),
    predictedChangePercent: parseFloat(changePercent.toFixed(2)),
    confidence: parseFloat(confidence.toFixed(2)),
    timeframe,
    riskLevel
  };
};

// Mock market prediction
export const predictMarketTrend = async (
  timeframe: PredictionTimeframe = 'month'
): Promise<MarketPrediction> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Random trend
  const trendValue = Math.random();
  let trend: 'bullish' | 'bearish' | 'neutral';
  if (trendValue > 0.6) trend = 'bullish';
  else if (trendValue < 0.3) trend = 'bearish';
  else trend = 'neutral';
  
  // Confidence decreases with longer timeframes
  const baseConfidence = Math.random() * 0.3 + 0.5;
  const timeframeMultiplier = timeframe === 'week' ? 1 :
    timeframe === 'month' ? 0.9 :
    timeframe === '3months' ? 0.75 :
    timeframe === '6months' ? 0.6 : 0.5;
  
  const confidence = baseConfidence * timeframeMultiplier;
  
  // Generate insights based on trend
  const insights = generateInsights(trend, timeframe);
  
  return {
    trend,
    confidence: parseFloat(confidence.toFixed(2)),
    timeframe,
    insights
  };
};

// Helper to generate insights
function generateInsights(trend: 'bullish' | 'bearish' | 'neutral', timeframe: PredictionTimeframe): string[] {
  const insights: string[] = [];
  
  // Common insights
  insights.push(`Market volatility is expected to ${Math.random() > 0.5 ? 'increase' : 'decrease'} in the ${timeframeToString(timeframe)}.`);
  
  // Trend-specific insights
  if (trend === 'bullish') {
    insights.push(`Growth stocks are likely to outperform value stocks in the next ${timeframeToString(timeframe)}.`);
    insights.push(`Technology and healthcare sectors show strong potential for upward movement.`);
    insights.push(`Consider increasing positions in high-quality growth companies with strong fundamentals.`);
  } 
  else if (trend === 'bearish') {
    insights.push(`Defensive sectors like utilities and consumer staples may offer better protection.`);
    insights.push(`Consider implementing hedging strategies to protect your portfolio.`);
    insights.push(`Cash positions and fixed income may outperform equities in this environment.`);
  } 
  else {
    insights.push(`Markets appear to be consolidating, suggesting a wait-and-see approach.`);
    insights.push(`Focus on companies with strong balance sheets and consistent cash flow.`);
    insights.push(`Diversification across sectors is particularly important in this environment.`);
  }
  
  return insights;
}

// Helper to convert timeframe enum to readable string
function timeframeToString(timeframe: PredictionTimeframe): string {
  switch (timeframe) {
    case 'week': return 'coming week';
    case 'month': return 'next month';
    case '3months': return 'next quarter';
    case '6months': return 'next 6 months';
    case 'year': return 'coming year';
  }
}
