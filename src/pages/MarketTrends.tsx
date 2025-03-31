
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { MetricChart } from "@/components/dashboard/MetricChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const MarketTrends = () => {
  // Sample data
  const marketTrendData = [
    { month: "Jan", industry: 2.4, company: 3.1 },
    { month: "Feb", industry: 2.2, company: 3.3 },
    { month: "Mar", industry: 2.8, company: 3.8 },
    { month: "Apr", industry: 2.5, company: 3.5 },
    { month: "May", industry: 2.3, company: 4.0 },
    { month: "Jun", industry: 2.7, company: 4.2 },
  ];

  const competitorData = [
    { name: "Our Company", value: 42 },
    { name: "Competitor A", value: 28 },
    { name: "Competitor B", value: 20 },
    { name: "Competitor C", value: 10 },
  ];

  const forecastData = [
    { quarter: "Q1", projected: 3.2, actual: 3.4 },
    { quarter: "Q2", projected: 3.8, actual: 4.0 },
    { quarter: "Q3", projected: 4.3, actual: null },
    { quarter: "Q4", projected: 5.0, actual: null },
  ];

  const keyInsights = [
    {
      title: "Market Share Growth",
      value: "+14%",
      change: 8.2,
      description: "Year-over-year market share growth rate",
    },
    {
      title: "Customer Acquisition",
      value: "+22%",
      change: 12.5,
      description: "Increase in new customers this quarter",
    },
    {
      title: "Price Sensitivity",
      value: "-3%",
      change: -2.1,
      description: "Reduction in price sensitivity among target audience",
    },
    {
      title: "Customer Retention",
      value: "87%",
      change: 3.5,
      description: "Current customer retention rate",
    },
  ];

  const trendsData = [
    {
      trend: "E-commerce Integration",
      adoption: "High",
      impact: "Significant",
      description: "Increasing investment in omnichannel capabilities",
    },
    {
      trend: "Sustainability Focus",
      adoption: "Medium",
      impact: "Growing",
      description: "Greater emphasis on sustainable products and practices",
    },
    {
      trend: "AI and Automation",
      adoption: "Medium",
      impact: "High",
      description: "Rising use of AI for inventory and pricing optimization",
    },
    {
      trend: "Supply Chain Innovation",
      adoption: "Low",
      impact: "Moderate",
      description: "New approaches to supply chain resilience post-COVID",
    },
  ];

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Market Trends</h1>
            <p className="text-muted-foreground mt-1">
              Market analysis and competitive positioning
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">Past Reports</Button>
            <Button>Update Data</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {keyInsights.map((insight) => (
            <StatCard
              key={insight.title}
              title={insight.title}
              value={insight.value}
              change={insight.change}
              className="hover:border-primary/50 transition-all"
            />
          ))}
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Market Overview</TabsTrigger>
            <TabsTrigger value="competitors">Competitors</TabsTrigger>
            <TabsTrigger value="forecast">Forecast</TabsTrigger>
            <TabsTrigger value="trends">Emerging Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <MetricChart
                title="Market Growth Rate Comparison"
                data={marketTrendData}
                type="line"
                dataKey="company"
                xAxisKey="month"
              />
              <MetricChart
                title="Market Share Distribution"
                data={competitorData}
                type="pie"
              />
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Market Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The company has consistently outperformed the industry average growth rate over the past 6 months, with a current market growth rate of 4.2% compared to the industry average of 2.7%. This positive trend indicates strong market positioning and effective business strategies.
                </p>
                <p>
                  Our market share has increased to 42%, representing a 5% growth from the previous year. The nearest competitor holds 28% market share, giving us a significant competitive advantage in the current landscape.
                </p>
                <h3 className="text-lg font-semibold mt-4">Key Growth Factors:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Expansion into new geographic regions</li>
                  <li>Introduction of innovative product lines</li>
                  <li>Enhanced digital marketing strategies</li>
                  <li>Improved customer experience initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle>Competitive Landscape</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Company
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Market Share
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Growth Rate
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Strengths
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Weaknesses
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">Our Company</td>
                          <td className="px-4 py-3">42%</td>
                          <td className="px-4 py-3 text-finance-green flex items-center">
                            <ArrowUpRight className="h-4 w-4 mr-1" /> 8.2%
                          </td>
                          <td className="px-4 py-3">Brand recognition, Product quality</td>
                          <td className="px-4 py-3">Supply chain complexity</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">Competitor A</td>
                          <td className="px-4 py-3">28%</td>
                          <td className="px-4 py-3 text-finance-green flex items-center">
                            <ArrowUpRight className="h-4 w-4 mr-1" /> 5.4%
                          </td>
                          <td className="px-4 py-3">Pricing strategy, Digital presence</td>
                          <td className="px-4 py-3">Customer service, Limited range</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">Competitor B</td>
                          <td className="px-4 py-3">20%</td>
                          <td className="px-4 py-3 text-finance-red flex items-center">
                            <ArrowDownRight className="h-4 w-4 mr-1" /> 1.2%
                          </td>
                          <td className="px-4 py-3">Customer loyalty, Market legacy</td>
                          <td className="px-4 py-3">Slow innovation, Aging technology</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">Competitor C</td>
                          <td className="px-4 py-3">10%</td>
                          <td className="px-4 py-3 text-finance-green flex items-center">
                            <ArrowUpRight className="h-4 w-4 mr-1" /> 12.1%
                          </td>
                          <td className="px-4 py-3">Innovation, Agility</td>
                          <td className="px-4 py-3">Scale, Limited resources</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle>Competitive Positioning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our company maintains a leadership position in the market, with a significant advantage over the nearest competitor. However, we should note that Competitor C is showing rapid growth (12.1%) which may indicate disruptive potential in the medium to long term.
                  </p>
                  <h3 className="text-lg font-semibold mt-4">Strategic Recommendations:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Competitor A:</span> Enhance customer service offerings and develop counter-strategies for their aggressive pricing tactics.
                    </li>
                    <li>
                      <span className="font-medium">Competitor B:</span> Continue to highlight our innovation advantage while monitoring for any potential turnaround strategies they may implement.
                    </li>
                    <li>
                      <span className="font-medium">Competitor C:</span> Consider strategic partnership opportunities or targeted competitive responses to limit their growth momentum.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="forecast" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <MetricChart
                title="Growth Projections vs. Actual"
                data={forecastData}
                type="line"
                dataKey="projected"
                xAxisKey="quarter"
                height={350}
              />

              <Card>
                <CardHeader>
                  <CardTitle>Market Forecast</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Based on current market conditions and company performance, we project continued growth through the remainder of the fiscal year. The company has exceeded projections for Q1 and Q2, indicating strong execution of strategic initiatives.
                  </p>
                  <h3 className="text-lg font-semibold mt-4">Forecast Highlights:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Expected annual growth rate of 7.5% compared to industry average of 3.2%
                    </li>
                    <li>
                      Projected market share increase to 45% by year-end
                    </li>
                    <li>
                      Anticipated 15% revenue growth in Q3 due to seasonal factors
                    </li>
                    <li>
                      New product launches in Q4 expected to drive additional 8% growth
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-amber-50 rounded-md border border-amber-200">
                    <h4 className="text-sm font-semibold text-amber-800 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" /> Risk Factors
                    </h4>
                    <p className="mt-2 text-sm text-amber-700">
                      Supply chain disruptions and inflation pressures may impact Q3-Q4 projections. The forecast includes a 2% buffer to account for these uncertainties.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quarterly Forecast Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quarter
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Projected Growth
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actual Growth
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Projected Revenue
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Key Drivers
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3">Q1 2023</td>
                        <td className="px-4 py-3 text-right">3.2%</td>
                        <td className="px-4 py-3 text-right text-finance-green">3.4%</td>
                        <td className="px-4 py-3 text-right">$24.5M</td>
                        <td className="px-4 py-3">New product launch, Expansion</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3">Q2 2023</td>
                        <td className="px-4 py-3 text-right">3.8%</td>
                        <td className="px-4 py-3 text-right text-finance-green">4.0%</td>
                        <td className="px-4 py-3 text-right">$26.2M</td>
                        <td className="px-4 py-3">Summer campaign, Digital initiatives</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3">Q3 2023</td>
                        <td className="px-4 py-3 text-right">4.3%</td>
                        <td className="px-4 py-3 text-right text-muted-foreground">
                          Pending
                        </td>
                        <td className="px-4 py-3 text-right">$29.8M</td>
                        <td className="px-4 py-3">Holiday season, Marketing boost</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3">Q4 2023</td>
                        <td className="px-4 py-3 text-right">5.0%</td>
                        <td className="px-4 py-3 text-right text-muted-foreground">
                          Pending
                        </td>
                        <td className="px-4 py-3 text-right">$32.5M</td>
                        <td className="px-4 py-3">Product expansion, New markets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {trendsData.map((trend) => (
                <Card
                  key={trend.trend}
                  className="hover:shadow-md transition-all duration-200"
                >
                  <CardHeader>
                    <CardTitle>{trend.trend}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-sm text-muted-foreground">Industry Adoption</p>
                          <p className="font-medium">{trend.adoption}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Business Impact</p>
                          <p className="font-medium">{trend.impact}</p>
                        </div>
                      </div>
                      <p>{trend.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Market Disruption Potential</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Based on emerging trends and market signals, we've identified several areas with high potential for market disruption in the next 12-24 months:
                </p>

                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-lg font-semibold">Direct-to-Consumer Expansion</h3>
                    <p className="mt-1">
                      More companies are bypassing traditional retail channels to build direct relationships with customers, potentially reshaping the distribution landscape.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Subscription-Based Models</h3>
                    <p className="mt-1">
                      The shift from one-time purchases to subscription services is accelerating, creating opportunities for recurring revenue streams and deeper customer relationships.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Sustainability Premium</h3>
                    <p className="mt-1">
                      Consumers increasingly demonstrate willingness to pay premium prices for sustainable and environmentally responsible products, creating new market segments.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Blockchain Supply Chain</h3>
                    <p className="mt-1">
                      Emerging blockchain-based supply chain solutions offer unprecedented transparency and verification capabilities that may become industry standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MarketTrends;
