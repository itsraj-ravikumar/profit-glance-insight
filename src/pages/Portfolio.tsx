import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { MetricChart } from "@/components/dashboard/MetricChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Filter, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AIPredictionCard } from "@/components/ai/AIPredictionCard";

const Portfolio = () => {
  // Sample portfolio data
  const portfolioItems = [
    {
      id: 1,
      name: "Tech Growth Fund",
      category: "Investment Fund",
      allocation: 25,
      performance: 12.4,
      risk: "Medium",
      value: 675000,
    },
    {
      id: 2,
      name: "Healthcare Innovation ETF",
      category: "ETF",
      allocation: 15,
      performance: 8.7,
      risk: "Medium-High",
      value: 405000,
    },
    {
      id: 3,
      name: "Corporate Bond Portfolio",
      category: "Bonds",
      allocation: 20,
      performance: 4.2,
      risk: "Low",
      value: 540000,
    },
    {
      id: 4,
      name: "Real Estate Holdings",
      category: "Real Estate",
      allocation: 18,
      performance: 7.5,
      risk: "Medium",
      value: 486000,
    },
    {
      id: 5,
      name: "Cash Reserves",
      category: "Cash",
      allocation: 7,
      performance: 1.2,
      risk: "Very Low",
      value: 189000,
    },
    {
      id: 6,
      name: "International Equity Fund",
      category: "Investment Fund",
      allocation: 15,
      performance: -2.3,
      risk: "High",
      value: 405000,
    },
  ];

  const allocationData = [
    { name: "Investment Fund", value: 40 },
    { name: "ETF", value: 15 },
    { name: "Bonds", value: 20 },
    { name: "Real Estate", value: 18 },
    { name: "Cash", value: 7 },
  ];

  const performanceData = [
    { month: "Jan", return: 2.1 },
    { month: "Feb", return: 1.8 },
    { month: "Mar", return: -0.7 },
    { month: "Apr", return: 1.2 },
    { month: "May", return: 2.8 },
    { month: "Jun", return: 1.5 },
    { month: "Jul", return: 2.3 },
    { month: "Aug", return: 0.9 },
    { month: "Sep", return: -0.4 },
    { month: "Oct", return: 1.7 },
    { month: "Nov", return: 3.2 },
    { month: "Dec", return: 2.5 },
  ];

  const riskExposureData = [
    { category: "Market Risk", value: 65 },
    { category: "Credit Risk", value: 45 },
    { category: "Liquidity Risk", value: 30 },
    { category: "Operational Risk", value: 25 },
    { category: "Regulatory Risk", value: 20 },
  ];

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Portfolio Management</h1>
            <p className="text-muted-foreground mt-1">
              Analyze and manage investment portfolio
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">Export Data</Button>
            <Button>Add Investment</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Portfolio Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$2,700,000</div>
              <div className="flex items-center mt-2 text-sm">
                <ArrowUpRight className="h-4 w-4 text-finance-green mr-1" />
                <span className="text-finance-green font-medium">+8.5%</span>
                <span className="text-muted-foreground ml-2">YTD</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Annual Return
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">7.8%</div>
              <div className="flex items-center mt-2 text-sm">
                <ArrowUpRight className="h-4 w-4 text-finance-green mr-1" />
                <span className="text-finance-green font-medium">+1.2%</span>
                <span className="text-muted-foreground ml-2">vs. Benchmark</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Risk Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">38/100</div>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-amber-600 font-medium">Moderate</span>
                <span className="text-muted-foreground ml-2">Risk Profile</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <MetricChart
            title="Portfolio Allocation"
            data={allocationData}
            type="pie"
            className="lg:col-span-1"
          />
          <MetricChart
            title="Monthly Performance"
            data={performanceData}
            type="line"
            dataKey="return"
            xAxisKey="month"
            className="lg:col-span-2"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <AIPredictionCard className="lg:col-span-1" />
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">AI-Powered Investment Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our AI analyzes market trends, portfolio performance, and economic indicators 
                to provide personalized investment recommendations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-sm">Portfolio Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on AI analysis, consider reallocating 5% from Cash Reserves to Tech Growth Fund 
                    to potentially increase annual returns by 0.3%.
                  </p>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-sm">Risk Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Current portfolio risk score (38/100) is within your target range. 
                    International exposure could be reduced by 2% to further minimize volatility.
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-2">
                View Detailed AI Analysis
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="investments" className="mb-6">
          <TabsList>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="investments" className="mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
              <div className="relative w-full md:w-72">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search investments..."
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Button variant="outline" className="gap-1">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
                <Button className="gap-1">
                  <Plus className="h-4 w-4" /> Add Investment
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Allocation
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Performance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Risk
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {portfolioItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        ${item.value.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center">
                          <span className="mr-2">{item.allocation}%</span>
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div
                              className="h-2 bg-finance-blue rounded-full"
                              style={{ width: `${item.allocation}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center">
                          {item.performance >= 0 ? (
                            <ArrowUpRight className="h-4 w-4 text-finance-green mr-1" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 text-finance-red mr-1" />
                          )}
                          <span
                            className={
                              item.performance >= 0
                                ? "text-finance-green"
                                : "text-finance-red"
                            }
                          >
                            {item.performance > 0 && "+"}
                            {item.performance}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Badge
                          variant="outline"
                          className={
                            item.risk === "Low" || item.risk === "Very Low"
                              ? "border-green-500 text-green-700"
                              : item.risk === "Medium"
                              ? "border-amber-500 text-amber-700"
                              : "border-red-500 text-red-700"
                          }
                        >
                          {item.risk}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="performance" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Annual Return</p>
                        <p className="text-2xl font-medium">7.8%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">3-Year Return</p>
                        <p className="text-2xl font-medium">23.5%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">5-Year Return</p>
                        <p className="text-2xl font-medium">42.3%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Sharpe Ratio</p>
                        <p className="text-2xl font-medium">1.32</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm font-medium mb-2">Performance vs Benchmark</p>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Portfolio</span>
                            <span className="font-medium">7.8%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full">
                            <div className="h-2 bg-finance-blue rounded-full" style={{ width: "78%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Benchmark (S&P 500)</span>
                            <span className="font-medium">6.6%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full">
                            <div className="h-2 bg-gray-400 rounded-full" style={{ width: "66%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Best & Worst Performers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Top Performers</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Tech Growth Fund</span>
                          <span className="text-finance-green font-medium flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            +12.4%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Healthcare Innovation ETF</span>
                          <span className="text-finance-green font-medium flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            +8.7%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Real Estate Holdings</span>
                          <span className="text-finance-green font-medium flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            +7.5%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="text-sm font-medium mb-3">Worst Performers</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">International Equity Fund</span>
                          <span className="text-finance-red font-medium flex items-center">
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                            -2.3%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Cash Reserves</span>
                          <span className="text-amber-600 font-medium flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            +1.2%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Performance Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The portfolio has outperformed the benchmark by 1.2 percentage points over the past year, with particularly strong performance in the technology and healthcare sectors. The underperformance of international equities reflects broader market trends in those regions.
                  </p>
                  
                  <h3 className="text-lg font-semibold mt-4 mb-2">Performance Drivers</h3>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Strong growth in technology sector investments (+12.4%)</li>
                    <li>Strategic allocation to healthcare innovation companies (+8.7%)</li>
                    <li>Stable returns from real estate holdings (+7.5%)</li>
                    <li>Underperformance in international markets (-2.3%)</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-4 mb-2">Recommendations</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Consider rebalancing international exposure given current market conditions</li>
                    <li>Maintain allocation to high-performing tech and healthcare sectors</li>
                    <li>Evaluate cash reserves for potential redeployment to higher-yielding assets</li>
                    <li>Review bond portfolio for interest rate risk given current economic outlook</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="risk" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <MetricChart
                title="Risk Exposure"
                data={riskExposureData}
                type="bar"
                dataKey="value"
                xAxisKey="category"
              />
              
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Portfolio Risk Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Risk Metrics</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Beta</p>
                        <p className="text-xl font-medium">0.85</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Standard Deviation</p>
                        <p className="text-xl font-medium">8.7%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Max Drawdown</p>
                        <p className="text-xl font-medium">-12.4%</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    The portfolio maintains a moderate risk profile with a beta of 0.85, indicating slightly lower volatility than the broader market. The current risk score of 38/100 places the portfolio in the moderate risk category, aligning with the stated investment objectives.
                  </p>
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-medium mb-2">Key Risk Factors</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><span className="font-medium">Market Risk:</span> Exposure to broad market movements, particularly in technology sector</li>
                      <li><span className="font-medium">Interest Rate Risk:</span> Bond portfolio sensitivity to potential rate increases</li>
                      <li><span className="font-medium">Currency Risk:</span> International investments exposed to exchange rate fluctuations</li>
                      <li><span className="font-medium">Sector Concentration:</span> Relatively high allocation to technology and healthcare sectors</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Risk Management Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Diversification</h3>
                      <p>
                        The portfolio maintains diversification across asset classes, with allocations to equities, bonds, real estate, and cash. Further geographical diversification could help mitigate regional market risks.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Strategic Asset Allocation</h3>
                      <p>
                        Current allocation aligns with a moderate risk profile suitable for long-term growth with some income generation. Regular rebalancing maintains the target risk profile and prevents drift.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Risk Mitigation Techniques</h3>
                      <p>
                        Consider implementing hedging strategies for international exposure and increasing allocation to defensive sectors to protect against potential market downturns in the coming quarters.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Portfolio;
