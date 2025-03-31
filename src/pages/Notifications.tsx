
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Bell,
  Check,
  ChevronRight,
  Clock,
  FileText,
  Settings,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  RefreshCw,
  MoreVertical
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Market Alert: Tech Sector Decline",
      message: "The technology sector has declined by 2.5% today. Your portfolio exposure is 25%.",
      time: "10 minutes ago",
      type: "alert",
      read: false,
    },
    {
      id: 2,
      title: "Portfolio Rebalancing Recommended",
      message: "Your portfolio has drifted from target allocations. Consider rebalancing to maintain your risk profile.",
      time: "2 hours ago",
      type: "recommendation",
      read: false,
    },
    {
      id: 3,
      title: "Transaction Complete: Tech Growth Fund",
      message: "Your purchase of Tech Growth Fund shares has been completed successfully.",
      time: "3 hours ago",
      type: "transaction",
      read: true,
    },
    {
      id: 4,
      title: "Dividend Payment Received",
      message: "You have received a dividend payment of $12,500 from your equity holdings.",
      time: "1 day ago",
      type: "transaction",
      read: true,
    },
    {
      id: 5,
      title: "Bond Portfolio: Interest Rate Alert",
      message: "The Federal Reserve has increased interest rates by 0.25%. This may impact your bond portfolio.",
      time: "2 days ago",
      type: "alert",
      read: true,
    },
    {
      id: 6,
      title: "New Investment Opportunity: Healthcare ETF",
      message: "Based on your investment preferences, you might be interested in the new Healthcare Innovation ETF.",
      time: "3 days ago",
      type: "recommendation",
      read: true,
    },
    {
      id: 7,
      title: "Q2 Portfolio Performance Report",
      message: "Your Q2 portfolio performance report is now available for review.",
      time: "5 days ago",
      type: "report",
      read: true,
    },
  ]);

  const [preferences, setPreferences] = useState({
    marketAlerts: true,
    portfolioRecommendations: true,
    transactionConfirmations: true,
    reportAvailability: true,
    emailNotifications: true,
    pushNotifications: false,
    frequencyDaily: false,
    frequencyWeekly: true,
  });

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    toast({
      title: "Notification marked as read",
    });
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
    toast({
      title: "All notifications marked as read",
    });
  };

  const clearAll = () => {
    setNotifications([]);
    toast({
      title: "All notifications cleared",
    });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-finance-red" />;
      case "recommendation":
        return <TrendingUp className="h-5 w-5 text-finance-blue" />;
      case "transaction":
        return <RefreshCw className="h-5 w-5 text-finance-green" />;
      case "report":
        return <FileText className="h-5 w-5 text-finance-purple" />;
      default:
        return <Bell className="h-5 w-5 text-finance-gray" />;
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground mt-1">
              Stay updated on important events and alerts
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" onClick={markAllAsRead}>
              Mark All Read
            </Button>
            <Button onClick={clearAll}>Clear All</Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="all">
              All{" "}
              {unreadCount > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0 space-y-4">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`transition-all hover:shadow-md ${
                    !notification.read ? "border-l-4 border-l-finance-blue" : ""
                  }`}
                >
                  <CardContent className="p-5">
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-lg mb-1">
                            {notification.title}
                          </h3>
                          <div className="flex items-center gap-1">
                            <Badge
                              variant="outline"
                              className="text-xs font-normal h-6"
                            >
                              <Clock className="h-3 w-3 mr-1" />
                              {notification.time}
                            </Badge>
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => markAsRead(notification.id)}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <Bell className="h-10 w-10 text-muted-foreground opacity-50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No notifications</h3>
                  <p className="text-muted-foreground text-center">
                    You're all caught up! There are no notifications to display.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="unread" className="mt-0 space-y-4">
            {notifications.filter((n) => !n.read).length > 0 ? (
              notifications
                .filter((n) => !n.read)
                .map((notification) => (
                  <Card
                    key={notification.id}
                    className="border-l-4 border-l-finance-blue transition-all hover:shadow-md"
                  >
                    <CardContent className="p-5">
                      <div className="flex">
                        <div className="mr-4 mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-lg mb-1">
                              {notification.title}
                            </h3>
                            <div className="flex items-center gap-1">
                              <Badge
                                variant="outline"
                                className="text-xs font-normal h-6"
                              >
                                <Clock className="h-3 w-3 mr-1" />
                                {notification.time}
                              </Badge>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => markAsRead(notification.id)}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            {notification.message}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <Check className="h-10 w-10 text-muted-foreground opacity-50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">All caught up!</h3>
                  <p className="text-muted-foreground text-center">
                    You have no unread notifications at the moment.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="alerts" className="mt-0 space-y-4">
            {notifications.filter((n) => n.type === "alert").length > 0 ? (
              notifications
                .filter((n) => n.type === "alert")
                .map((notification) => (
                  <Card
                    key={notification.id}
                    className={`transition-all hover:shadow-md ${
                      !notification.read ? "border-l-4 border-l-finance-red" : ""
                    }`}
                  >
                    <CardContent className="p-5">
                      <div className="flex">
                        <div className="mr-4 mt-1">
                          <AlertTriangle className="h-5 w-5 text-finance-red" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-lg mb-1">
                              {notification.title}
                            </h3>
                            <div className="flex items-center gap-1">
                              <Badge
                                variant="outline"
                                className="text-xs font-normal h-6"
                              >
                                <Clock className="h-3 w-3 mr-1" />
                                {notification.time}
                              </Badge>
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            {notification.message}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <AlertTriangle className="h-10 w-10 text-muted-foreground opacity-50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No alerts</h3>
                  <p className="text-muted-foreground text-center">
                    There are currently no market or portfolio alerts to display.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="settings" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Notification Types</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-finance-red mr-3" />
                        <div>
                          <p className="font-medium">Market Alerts</p>
                          <p className="text-sm text-muted-foreground">
                            Notifications about market movements and impacts
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={preferences.marketAlerts}
                        onCheckedChange={(checked) =>
                          setPreferences({ ...preferences, marketAlerts: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 text-finance-blue mr-3" />
                        <div>
                          <p className="font-medium">Portfolio Recommendations</p>
                          <p className="text-sm text-muted-foreground">
                            Investment suggestions and portfolio adjustments
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={preferences.portfolioRecommendations}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            portfolioRecommendations: checked,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <RefreshCw className="h-5 w-5 text-finance-green mr-3" />
                        <div>
                          <p className="font-medium">Transaction Confirmations</p>
                          <p className="text-sm text-muted-foreground">
                            Updates about transaction status and confirmations
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={preferences.transactionConfirmations}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            transactionConfirmations: checked,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-finance-purple mr-3" />
                        <div>
                          <p className="font-medium">Report Availability</p>
                          <p className="text-sm text-muted-foreground">
                            Alerts when new reports and statements are available
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={preferences.reportAvailability}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            reportAvailability: checked,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Delivery Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications via email
                        </p>
                      </div>
                      <Switch
                        checked={preferences.emailNotifications}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            emailNotifications: checked,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications on your device
                        </p>
                      </div>
                      <Switch
                        checked={preferences.pushNotifications}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            pushNotifications: checked,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Notification Frequency</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Daily Summary</p>
                        <p className="text-sm text-muted-foreground">
                          Consolidate notifications into daily digest
                        </p>
                      </div>
                      <Switch
                        checked={preferences.frequencyDaily}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            frequencyDaily: checked,
                            frequencyWeekly: checked ? false : preferences.frequencyWeekly,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Weekly Summary</p>
                        <p className="text-sm text-muted-foreground">
                          Consolidate notifications into weekly digest
                        </p>
                      </div>
                      <Switch
                        checked={preferences.frequencyWeekly}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            frequencyWeekly: checked,
                            frequencyDaily: checked ? false : preferences.frequencyDaily,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button className="w-full sm:w-auto">Save Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
