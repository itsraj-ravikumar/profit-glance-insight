
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/dashboard/StatCard";
import { Calendar, TrendingUp, Clock, AlertCircle } from "lucide-react";
import { format } from "date-fns";

export function DailyOperationsDashboard() {
  const [currentDate] = useState(new Date());
  
  // Mock daily operations data
  const dailyTasks = [
    { id: 1, title: "Review portfolio performance", priority: "high", status: "pending" },
    { id: 2, title: "Analyze latest market trends", priority: "medium", status: "completed" },
    { id: 3, title: "Rebalance client portfolios", priority: "high", status: "in-progress" },
    { id: 4, title: "Prepare quarterly reports", priority: "medium", status: "pending" },
    { id: 5, title: "Review AI predictions for market sectors", priority: "high", status: "pending" },
  ];
  
  const aiInsights = [
    { 
      id: 1, 
      title: "Portfolio Rebalancing Recommendation", 
      description: "AI analysis suggests rebalancing overweight technology sector (3% above target).",
      impact: "medium" 
    },
    { 
      id: 2, 
      title: "Market Volatility Alert", 
      description: "Increased volatility expected in next 48 hours based on economic indicators.",
      impact: "high" 
    },
    { 
      id: 3, 
      title: "Investment Opportunity", 
      description: "Healthcare sector shows potential for 5.2% growth in next quarter.",
      impact: "medium" 
    },
  ];
  
  const marketAlerts = [
    { 
      id: 1, 
      title: "Fed Interest Rate Decision", 
      description: "Federal Reserve meeting scheduled tomorrow at 2:00 PM ET.",
      type: "upcoming" 
    },
    { 
      id: 2, 
      title: "Tech Sector Volatility", 
      description: "Unusual trading volume detected in technology stocks.",
      type: "warning" 
    },
    { 
      id: 3, 
      title: "Q1 Earnings Season", 
      description: "Major companies reporting earnings this week.",
      type: "info" 
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold">Daily Operations Dashboard</h2>
        <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{format(currentDate, 'EEEE, MMMM d, yyyy')}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="AI Predictions Generated"
          value="24"
          change={8}
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <StatCard
          title="Pending Actions"
          value="7"
          icon={<Clock className="h-5 w-5" />}
        />
        <StatCard
          title="Market Alerts"
          value="3"
          change={2}
          icon={<AlertCircle className="h-5 w-5" />}
        />
      </div>
      
      <Tabs defaultValue="tasks">
        <TabsList>
          <TabsTrigger value="tasks">Daily Tasks</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="alerts">Market Alerts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tasks" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Tasks for Today</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {dailyTasks.map(task => (
                  <li key={task.id} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={
                          task.priority === "high" 
                          ? "bg-red-50 text-red-700 border-red-300" 
                          : "bg-amber-50 text-amber-700 border-amber-300"
                        }
                      >
                        {task.priority}
                      </Badge>
                      <span>{task.title}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        task.status === "completed" 
                        ? "bg-green-50 text-green-700 border-green-300" 
                        : task.status === "in-progress"
                        ? "bg-blue-50 text-blue-700 border-blue-300"
                        : "bg-gray-50 text-gray-700 border-gray-300"
                      }
                    >
                      {task.status}
                    </Badge>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-4">Add New Task</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="insights" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">AI-Generated Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map(insight => (
                  <div key={insight.id} className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{insight.title}</h3>
                      <Badge
                        variant="outline"
                        className={
                          insight.impact === "high" 
                          ? "bg-red-50 text-red-700 border-red-300" 
                          : "bg-amber-50 text-amber-700 border-amber-300"
                        }
                      >
                        {insight.impact} impact
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">View All AI Insights</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alerts" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Market Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketAlerts.map(alert => (
                  <div key={alert.id} className="border rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{alert.title}</h3>
                      <Badge
                        variant="outline"
                        className={
                          alert.type === "warning" 
                          ? "bg-red-50 text-red-700 border-red-300" 
                          : alert.type === "upcoming"
                          ? "bg-blue-50 text-blue-700 border-blue-300"
                          : "bg-gray-50 text-gray-700 border-gray-300"
                        }
                      >
                        {alert.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">Configure Alert Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
