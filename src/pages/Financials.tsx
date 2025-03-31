
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { MetricChart } from "@/components/dashboard/MetricChart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, AlertTriangle } from "lucide-react";

const Financials = () => {
  // Sample data
  const quarterlyData = [
    { month: "Jan", revenue: 20000, cogs: 12000, grossProfit: 8000, netProfit: 5000 },
    { month: "Feb", revenue: 22000, cogs: 13000, grossProfit: 9000, netProfit: 5500 },
    { month: "Mar", revenue: 25000, cogs: 14000, grossProfit: 11000, netProfit: 7000 },
    { month: "Apr", revenue: 27000, cogs: 15000, grossProfit: 12000, netProfit: 8000 },
    { month: "May", revenue: 30000, cogs: 17000, grossProfit: 13000, netProfit: 8500 },
    { month: "Jun", revenue: 32000, cogs: 18000, grossProfit: 14000, netProfit: 9000 },
  ];
  
  const balanceSheetData = [
    { category: "Assets", value: 5200000 },
    { category: "Liabilities", value: 2800000 },
    { category: "Equity", value: 2400000 },
  ];
  
  const cashFlowData = [
    { month: "Jan", operating: 45000, investing: -25000, financing: -5000 },
    { month: "Feb", operating: 48000, investing: -20000, financing: -5000 },
    { month: "Mar", operating: 52000, investing: -30000, financing: -5000 },
    { month: "Apr", operating: 55000, investing: -15000, financing: -5000 },
    { month: "May", operating: 60000, investing: -35000, financing: -5000 },
    { month: "Jun", operating: 65000, investing: -25000, financing: -5000 },
  ];
  
  const keyMetricsData = [
    { metric: "Current Ratio", value: 2.1, benchmark: 2.0, alert: false },
    { metric: "Debt to Equity", value: 1.2, benchmark: 1.0, alert: true },
    { metric: "Gross Margin", value: "42%", benchmark: "40%", alert: false },
    { metric: "Net Profit Margin", value: "18%", benchmark: "20%", alert: true },
    { metric: "Return on Assets", value: "12%", benchmark: "10%", alert: false },
    { metric: "Return on Equity", value: "22%", benchmark: "20%", alert: false },
  ];
  
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Financial Statements</h1>
            <p className="text-muted-foreground mt-1">
              Analyze detailed financial performance
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">Download Reports</Button>
            <Button>Export Data</Button>
          </div>
        </div>

        <Tabs defaultValue="income">
          <TabsList className="mb-6">
            <TabsTrigger value="income">Income Statement</TabsTrigger>
            <TabsTrigger value="balance">Balance Sheet</TabsTrigger>
            <TabsTrigger value="cash">Cash Flow</TabsTrigger>
            <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="income" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-finance-teal mr-2" />
                    <span className="text-2xl font-bold">$192,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Last 6 months</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    COGS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-finance-purple mr-2" />
                    <span className="text-2xl font-bold">$89,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Last 6 months</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Gross Profit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-finance-blue mr-2" />
                    <span className="text-2xl font-bold">$67,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Last 6 months</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Net Profit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-finance-green mr-2" />
                    <span className="text-2xl font-bold">$43,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Last 6 months</p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-6">
              <MetricChart
                title="Income Statement Overview"
                data={quarterlyData}
                type="bar"
                dataKey="revenue"
                xAxisKey="month"
              />
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Income Statement Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Month
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Revenue
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          COGS
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Gross Profit
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Net Profit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {quarterlyData.map((item) => (
                        <tr key={item.month} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap">{item.month}</td>
                          <td className="px-4 py-3 text-right whitespace-nowrap">
                            ${item.revenue.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap">
                            ${item.cogs.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap">
                            ${item.grossProfit.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap">
                            ${item.netProfit.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="balance" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <MetricChart
                title="Balance Sheet Overview"
                data={balanceSheetData}
                type="pie"
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Balance Sheet Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Assets</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Current Assets</span>
                          <span className="font-medium">$2,200,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fixed Assets</span>
                          <span className="font-medium">$2,800,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Other Assets</span>
                          <span className="font-medium">$200,000</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t">
                          <span className="font-semibold">Total Assets</span>
                          <span className="font-semibold">$5,200,000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Liabilities</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Current Liabilities</span>
                          <span className="font-medium">$1,050,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Long-term Liabilities</span>
                          <span className="font-medium">$1,750,000</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t">
                          <span className="font-semibold">Total Liabilities</span>
                          <span className="font-semibold">$2,800,000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Equity</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Share Capital</span>
                          <span className="font-medium">$1,000,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Retained Earnings</span>
                          <span className="font-medium">$1,400,000</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t">
                          <span className="font-semibold">Total Equity</span>
                          <span className="font-semibold">$2,400,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="cash" className="mt-0">
            <div className="mb-6">
              <MetricChart
                title="Cash Flow Statement"
                data={cashFlowData}
                type="line"
                dataKey="operating"
                xAxisKey="month"
              />
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Cash Flow Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Month
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Operating
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Investing
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Financing
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Net Cash Flow
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cashFlowData.map((item) => (
                        <tr key={item.month} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap">{item.month}</td>
                          <td className="px-4 py-3 text-right whitespace-nowrap">
                            ${item.operating.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap">
                            ${item.investing.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap">
                            ${item.financing.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap">
                            ${(item.operating + item.investing + item.financing).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="metrics" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {keyMetricsData.map((metric) => (
                <Card key={metric.metric} className={metric.alert ? "border-finance-red/30" : ""}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {metric.metric}
                      </CardTitle>
                      {metric.alert && (
                        <AlertTriangle className="h-4 w-4 text-finance-red" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">{metric.value}</span>
                      <span className="text-xs text-muted-foreground mt-1">
                        Benchmark: {metric.benchmark}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Financial Health Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Based on the current financial metrics, the company is showing strong performance in several areas but requires attention in some key metrics:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Strengths:</span> Current ratio, return on assets, and return on equity are all above industry benchmarks, indicating good liquidity and effective use of assets.
                    </li>
                    <li>
                      <span className="font-medium text-finance-red">Concerns:</span> The debt-to-equity ratio is above the recommended benchmark, suggesting higher financial risk. Net profit margin is also slightly below the industry standard.
                    </li>
                    <li>
                      <span className="font-medium">Recommendations:</span> Consider strategies to reduce debt or increase equity to improve the debt-to-equity ratio. Focus on cost optimization to improve the net profit margin.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Financials;
