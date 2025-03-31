
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { MetricChart } from "@/components/dashboard/MetricChart";

const Transactions = () => {
  const [filter, setFilter] = useState("all");

  // Sample transactions data
  const transactions = [
    {
      id: "TX12345",
      date: "2023-06-15",
      description: "Tech Growth Fund Purchase",
      category: "Investment",
      amount: 50000,
      type: "expense",
      status: "completed",
    },
    {
      id: "TX12346",
      date: "2023-06-10",
      description: "Quarterly Dividend Payment",
      category: "Income",
      amount: 12500,
      type: "income",
      status: "completed",
    },
    {
      id: "TX12347",
      date: "2023-06-05",
      description: "Bond Sale",
      category: "Investment",
      amount: 35000,
      type: "income",
      status: "completed",
    },
    {
      id: "TX12348",
      date: "2023-06-01",
      description: "Market Research Subscription",
      category: "Operational",
      amount: 2500,
      type: "expense",
      status: "completed",
    },
    {
      id: "TX12349",
      date: "2023-05-28",
      description: "Healthcare ETF Purchase",
      category: "Investment",
      amount: 75000,
      type: "expense",
      status: "processing",
    },
    {
      id: "TX12350",
      date: "2023-05-25",
      description: "International Fund Withdrawal",
      category: "Investment",
      amount: 45000,
      type: "income",
      status: "completed",
    },
    {
      id: "TX12351",
      date: "2023-05-20",
      description: "Advisory Fees",
      category: "Fee",
      amount: 7500,
      type: "expense",
      status: "completed",
    },
    {
      id: "TX12352",
      date: "2023-05-15",
      description: "Real Estate Fund Investment",
      category: "Investment",
      amount: 100000,
      type: "expense",
      status: "completed",
    },
  ];

  const cashFlowData = [
    { month: "Jan", inflow: 120000, outflow: 85000 },
    { month: "Feb", inflow: 95000, outflow: 110000 },
    { month: "Mar", inflow: 115000, outflow: 92000 },
    { month: "Apr", inflow: 135000, outflow: 105000 },
    { month: "May", inflow: 140000, outflow: 125000 },
    { month: "Jun", inflow: 155000, outflow: 130000 },
  ];

  const investmentTransactionsData = [
    { month: "Jan", purchases: 85000, sales: 45000 },
    { month: "Feb", purchases: 110000, sales: 25000 },
    { month: "Mar", purchases: 75000, sales: 65000 },
    { month: "Apr", purchases: 95000, sales: 55000 },
    { month: "May", purchases: 125000, sales: 60000 },
    { month: "Jun", purchases: 130000, sales: 70000 },
  ];

  const categorySummary = [
    { name: "Investment", value: 325000 },
    { name: "Income", value: 57500 },
    { name: "Fee", value: 7500 },
    { name: "Operational", value: 2500 },
  ];

  // Filter transactions based on selected type
  const filteredTransactions = transactions.filter((tx) => {
    if (filter === "all") return true;
    return tx.type === filter;
  });

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Transactions & Investments
            </h1>
            <p className="text-muted-foreground mt-1">
              Track and analyze financial activities
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" className="gap-1">
              <Download className="h-4 w-4" /> Export
            </Button>
            <Button>New Transaction</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Cash Inflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$760,000</div>
              <div className="flex items-center mt-2 text-xs">
                <ArrowUpRight className="h-3 w-3 text-finance-green mr-1" />
                <span className="text-finance-green font-medium">+12.4%</span>
                <span className="text-muted-foreground ml-1">vs last period</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Cash Outflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$647,000</div>
              <div className="flex items-center mt-2 text-xs">
                <ArrowUpRight className="h-3 w-3 text-finance-red mr-1" />
                <span className="text-finance-red font-medium">+8.7%</span>
                <span className="text-muted-foreground ml-1">vs last period</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Net Cash Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$113,000</div>
              <div className="flex items-center mt-2 text-xs">
                <ArrowUpRight className="h-3 w-3 text-finance-green mr-1" />
                <span className="text-finance-green font-medium">+42.3%</span>
                <span className="text-muted-foreground ml-1">vs last period</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">214</div>
              <div className="flex items-center mt-2 text-xs">
                <ArrowDownRight className="h-3 w-3 text-finance-red mr-1" />
                <span className="text-finance-red font-medium">-3.2%</span>
                <span className="text-muted-foreground ml-1">vs last period</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <MetricChart
            title="Cash Flow Analysis"
            data={cashFlowData}
            type="bar"
            dataKey="inflow"
            xAxisKey="month"
          />
          <MetricChart
            title="Transaction Categories"
            data={categorySummary}
            type="pie"
          />
        </div>

        <Tabs defaultValue="all">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="cash-flow">Cash Flow</TabsTrigger>
              <TabsTrigger value="investments">Investments</TabsTrigger>
            </TabsList>
            
            <div className="mt-2 md:mt-0 flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transactions..."
                  className="pl-9 w-[200px]"
                />
              </div>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Transactions</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant={filter === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("all")}
                    >
                      All
                    </Button>
                    <Button
                      variant={filter === "income" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("income")}
                    >
                      Income
                    </Button>
                    <Button
                      variant={filter === "expense" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("expense")}
                    >
                      Expense
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="rounded-md border overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredTransactions.length > 0 ? (
                        filteredTransactions.map((tx) => (
                          <tr key={tx.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              {tx.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(tx.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {tx.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {tx.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <span
                                className={
                                  tx.type === "income"
                                    ? "text-finance-green flex items-center"
                                    : "text-finance-red flex items-center"
                                }
                              >
                                {tx.type === "income" ? (
                                  <ChevronUp className="h-4 w-4 mr-1" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 mr-1" />
                                )}
                                ${tx.amount.toLocaleString()}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <Badge
                                variant="outline"
                                className={
                                  tx.status === "completed"
                                    ? "border-green-500 text-green-700"
                                    : "border-amber-500 text-amber-700"
                                }
                              >
                                {tx.status}
                              </Badge>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={6}
                            className="px-6 py-4 text-center text-sm text-gray-500"
                          >
                            No transactions found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="cash-flow" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <MetricChart
                title="Monthly Cash Flow"
                data={cashFlowData}
                type="line"
                dataKey="inflow"
                xAxisKey="month"
                className="lg:col-span-2"
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Cash Flow Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Inflow</p>
                      <p className="text-2xl font-semibold">$760,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Outflow</p>
                      <p className="text-2xl font-semibold">$647,000</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">Net Cash Flow</p>
                      <p className="text-2xl font-semibold text-finance-green">$113,000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Cash Flow Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The cash flow trend shows a positive trajectory over the past six months, with a notable increase in both inflows and outflows in recent months. The net cash flow remains positive, indicating strong financial health.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Key Cash Inflows</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Dividend payments from equity investments ($57,500)</li>
                        <li>Bond interest payments ($35,000)</li>
                        <li>Real estate investment income ($45,000)</li>
                        <li>Sale of securities ($148,000)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Key Cash Outflows</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Investment purchases ($325,000)</li>
                        <li>Operational expenses ($22,500)</li>
                        <li>Advisory and management fees ($18,000)</li>
                        <li>Tax payments ($42,000)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="investments" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MetricChart
                title="Investment Transactions"
                data={investmentTransactionsData}
                type="bar"
                dataKey="purchases"
                xAxisKey="month"
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Investment Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Purchases</p>
                      <p className="text-2xl font-semibold">$620,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Sales</p>
                      <p className="text-2xl font-semibold">$320,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Net Investment</p>
                      <p className="text-2xl font-semibold">$300,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Transactions</p>
                      <p className="text-2xl font-semibold">42</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium mb-2">Top Investments</h3>
                    <div className="flex justify-between">
                      <span>Tech Growth Fund</span>
                      <span className="font-medium">$125,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Real Estate Fund</span>
                      <span className="font-medium">$100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Healthcare ETF</span>
                      <span className="font-medium">$75,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Investment Transactions</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-md border overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Investment
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Type
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Quantity
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Jun 15, 2023
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            Tech Growth Fund
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <Badge className="bg-finance-blue">Purchase</Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            2,500 shares
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">$20.00</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            $50,000
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Jun 5, 2023
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            Corporate Bonds
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <Badge className="bg-finance-green">Sale</Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            35 bonds
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">$1,000.00</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            $35,000
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            May 28, 2023
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            Healthcare Innovation ETF
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <Badge className="bg-finance-blue">Purchase</Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            1,500 shares
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">$50.00</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            $75,000
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            May 25, 2023
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            International Equity Fund
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <Badge className="bg-finance-green">Withdrawal</Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            3,000 shares
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">$15.00</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            $45,000
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            May 15, 2023
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            Real Estate Fund
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <Badge className="bg-finance-blue">Purchase</Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            10,000 shares
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">$10.00</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            $100,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default Transactions;
