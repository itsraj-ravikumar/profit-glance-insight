
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { MetricChart } from "@/components/dashboard/MetricChart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DollarSign,
  PieChart,
  BarChart3,
  ShoppingCart,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const Index = () => {
  // Sample data
  const revenueData = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 5000 },
    { name: "Apr", value: 2780 },
    { name: "May", value: 1890 },
    { name: "Jun", value: 2390 },
    { name: "Jul", value: 3490 },
    { name: "Aug", value: 4000 },
    { name: "Sep", value: 4500 },
    { name: "Oct", value: 5200 },
    { name: "Nov", value: 6000 },
    { name: "Dec", value: 7000 },
  ];

  const categoryData = [
    { name: "Electronics", value: 35 },
    { name: "Clothing", value: 25 },
    { name: "Food", value: 20 },
    { name: "Home", value: 15 },
    { name: "Other", value: 5 },
  ];

  const locationData = [
    { name: "North America", value: 55 },
    { name: "Europe", value: 25 },
    { name: "Asia", value: 15 },
    { name: "Other", value: 5 },
  ];

  const profitMetrics = [
    { name: "Q1", ebita: 4000, gross: 3000, net: 2000 },
    { name: "Q2", ebita: 4500, gross: 3500, net: 2200 },
    { name: "Q3", ebita: 5000, gross: 4000, net: 2800 },
    { name: "Q4", ebita: 6000, gross: 4800, net: 3500 },
  ];

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Financial Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              View key financial metrics and insights
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">Export</Button>
            <Button>View Reports</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Total Revenue"
            value="$2.4M"
            change={7.2}
            icon={<DollarSign className="h-5 w-5" />}
          />
          <StatCard
            title="Total SKUs"
            value="1,432"
            change={3.8}
            icon={<ShoppingCart className="h-5 w-5" />}
          />
          <StatCard
            title="Net Profit"
            value="$840K"
            change={-2.5}
            icon={<BarChart3 className="h-5 w-5" />}
          />
          <StatCard
            title="EBITA"
            value="$1.2M"
            change={5.1}
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <MetricChart
            title="Revenue Over Time"
            data={revenueData}
            type="area"
            dataKey="value"
            className="lg:col-span-2"
          />
          <MetricChart
            title="Revenue by Category"
            data={categoryData}
            type="pie"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <MetricChart
            title="Profit Metrics"
            data={profitMetrics}
            type="bar"
            dataKey="ebita"
          />
          <MetricChart
            title="Revenue by Location"
            data={locationData}
            type="pie"
          />
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            <Button variant="ghost" size="sm" className="gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    Product Inventory Purchase
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jun 15, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                    $32,500
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    Marketing Campaign
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jun 10, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                    $12,750
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      Processing
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    Equipment Maintenance
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jun 5, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                    $4,200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
