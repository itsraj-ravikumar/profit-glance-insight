
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  predictStockPerformance, 
  predictMarketTrend, 
  StockPrediction, 
  MarketPrediction,
  PredictionTimeframe 
} from "@/services/aiPredictionService";
import { useToast } from "@/hooks/use-toast";

interface AIPredictionCardProps {
  symbol?: string;
  className?: string;
}

export function AIPredictionCard({ symbol, className }: AIPredictionCardProps) {
  const [stockPrediction, setStockPrediction] = useState<StockPrediction | null>(null);
  const [marketPrediction, setMarketPrediction] = useState<MarketPrediction | null>(null);
  const [timeframe, setTimeframe] = useState<PredictionTimeframe>('month');
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const runPrediction = async () => {
    setLoading(true);
    try {
      if (symbol) {
        const prediction = await predictStockPerformance(symbol, timeframe);
        setStockPrediction(prediction);
      } else {
        const prediction = await predictMarketTrend(timeframe);
        setMarketPrediction(prediction);
      }
    } catch (error) {
      console.error("Error fetching AI predictions:", error);
      toast({
        title: "Prediction Failed",
        description: "There was an error generating AI predictions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-finance-blue" />
          AI Market Predictions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Get AI-powered predictions for {symbol ? `${symbol} stock` : "market trends"} over different timeframes
          </p>
        </div>
        
        <div className="flex gap-2 mb-4">
          <Button 
            variant={timeframe === 'week' ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeframe('week')}
          >
            Week
          </Button>
          <Button 
            variant={timeframe === 'month' ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeframe('month')}
          >
            Month
          </Button>
          <Button 
            variant={timeframe === '3months' ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeframe('3months')}
          >
            Quarter
          </Button>
          <Button 
            variant={timeframe === '6months' ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeframe('6months')}
          >
            6 Months
          </Button>
          <Button 
            variant={timeframe === 'year' ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeframe('year')}
          >
            Year
          </Button>
        </div>

        <Button 
          onClick={runPrediction} 
          className="w-full mb-4"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing data...
            </>
          ) : (
            "Generate AI Prediction"
          )}
        </Button>

        {stockPrediction && (
          <div className="space-y-4 mt-4 border-t pt-4">
            <div>
              <span className="text-sm font-medium">Current Price:</span>
              <span className="text-lg font-semibold ml-2">${stockPrediction.currentPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Predicted Price:</span>
              <span className="text-lg font-semibold">${stockPrediction.predictedPrice.toFixed(2)}</span>
              
              {stockPrediction.predictedChangePercent > 0 ? (
                <span className="text-finance-green flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +{stockPrediction.predictedChangePercent.toFixed(2)}%
                </span>
              ) : (
                <span className="text-finance-red flex items-center">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  {stockPrediction.predictedChangePercent.toFixed(2)}%
                </span>
              )}
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium">Risk Level:</span>
                <Badge variant="outline" className={
                  stockPrediction.riskLevel === 'low' ? 'bg-green-50 text-green-700 border-green-300' :
                  stockPrediction.riskLevel === 'medium' ? 'bg-amber-50 text-amber-700 border-amber-300' :
                  'bg-red-50 text-red-700 border-red-300'
                }>
                  {stockPrediction.riskLevel.charAt(0).toUpperCase() + stockPrediction.riskLevel.slice(1)}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Prediction Confidence:</span>
                <div className="w-full flex-1 bg-gray-100 h-2 rounded-full">
                  <div 
                    className="bg-finance-blue h-2 rounded-full" 
                    style={{ width: `${stockPrediction.confidence * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {(stockPrediction.confidence * 100).toFixed(0)}%
                </span>
              </div>
            </div>
            
            <div className="flex items-center text-amber-600 text-xs mt-2">
              <AlertTriangle className="h-3 w-3 mr-1" />
              AI predictions are based on historical data and market patterns
            </div>
          </div>
        )}

        {marketPrediction && (
          <div className="space-y-4 mt-4 border-t pt-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Market Trend:</span>
              <Badge variant="outline" className={
                marketPrediction.trend === 'bullish' ? 'bg-green-50 text-green-700 border-green-300' :
                marketPrediction.trend === 'bearish' ? 'bg-red-50 text-red-700 border-red-300' :
                'bg-blue-50 text-blue-700 border-blue-300'
              }>
                {marketPrediction.trend.charAt(0).toUpperCase() + marketPrediction.trend.slice(1)}
              </Badge>
              
              {marketPrediction.trend === 'bullish' ? (
                <TrendingUp className="h-4 w-4 text-finance-green" />
              ) : marketPrediction.trend === 'bearish' ? (
                <TrendingDown className="h-4 w-4 text-finance-red" />
              ) : null}
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Confidence:</span>
              <div className="w-full flex-1 bg-gray-100 h-2 rounded-full">
                <div 
                  className="bg-finance-blue h-2 rounded-full" 
                  style={{ width: `${marketPrediction.confidence * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-muted-foreground">
                {(marketPrediction.confidence * 100).toFixed(0)}%
              </span>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Key Insights:</h4>
              <ul className="space-y-1">
                {marketPrediction.insights.map((insight, index) => (
                  <li key={index} className="text-xs text-muted-foreground">
                    • {insight}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center text-amber-600 text-xs mt-2">
              <AlertTriangle className="h-3 w-3 mr-1" />
              AI predictions are based on historical data and market patterns
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
