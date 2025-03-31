import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Settings,
  Shield,
  CreditCard,
  Briefcase,
  BarChart3,
  Lock,
  AlertTriangle,
  ChevronRight,
  AtSign,
  Smartphone,
  Edit,
  Check,
  LogOut
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: user?.firstName || "Alex",
    lastName: user?.lastName || "Thompson",
    email: user?.email || "alex.thompson@example.com",
    phone: "+1 (555) 123-4567",
    title: user?.title || "Investment Manager",
    company: user?.company || "Global Financial Partners",
    bio: "Financial professional with over 10 years of experience in portfolio management and investment analysis. Specialized in growth strategy and risk assessment for high-net-worth clients.",
  });

  const [riskProfile, setRiskProfile] = useState({
    riskTolerance: "Moderate",
    investmentHorizon: "5-10 years",
    primaryGoals: ["Retirement", "Capital Growth"],
    preferredSectors: ["Technology", "Healthcare", "Financials"],
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    loginNotifications: true,
    transactionAlerts: true,
    sessionTimeout: "30 minutes",
  });

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleSavePreferences = () => {
    toast({
      title: "Preferences updated",
      description: "Your investment preferences have been updated.",
    });
  };

  const handleSaveSecuritySettings = () => {
    toast({
      title: "Security settings updated",
      description: "Your security preferences have been saved.",
    });
  };

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-muted-foreground mt-1">
              Manage your account settings and preferences
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 flex items-center gap-2" 
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card className="md:col-span-4">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full bg-finance-blue flex items-center justify-center text-white text-2xl font-semibold">
                    {userData.firstName[0]}{userData.lastName[0]}
                  </div>
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full w-8 h-8"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold">
                    {userData.firstName} {userData.lastName}
                  </h2>
                  <p className="text-muted-foreground">{userData.title}</p>
                  <p className="text-muted-foreground">{userData.company}</p>
                  
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      <AtSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{userData.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{userData.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="profile" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="profile" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="investment" className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>Investment Preferences</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-1">
              <CreditCard className="h-4 w-4" />
              <span>Billing</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-0 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={userData.firstName}
                      onChange={(e) =>
                        setUserData({ ...userData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={userData.lastName}
                      onChange={(e) =>
                        setUserData({ ...userData, lastName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={userData.phone}
                      onChange={(e) =>
                        setUserData({ ...userData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input
                      id="title"
                      value={userData.title}
                      onChange={(e) =>
                        setUserData({ ...userData, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={userData.company}
                      onChange={(e) =>
                        setUserData({ ...userData, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    rows={5}
                    value={userData.bio}
                    onChange={(e) =>
                      setUserData({ ...userData, bio: e.target.value })
                    }
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button onClick={handleSaveProfile}>Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive communications, updates and alerts via email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Portfolio Reports</p>
                    <p className="text-sm text-muted-foreground">
                      Receive weekly summaries of your portfolio performance
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">
                      Enable dark mode for the application interface
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Data Sharing</p>
                    <p className="text-sm text-muted-foreground">
                      Allow sharing anonymized data for service improvement
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Connected Accounts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      G
                    </div>
                    <div>
                      <p className="font-medium">Google</p>
                      <p className="text-sm text-muted-foreground">
                        Connected
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Disconnect</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center">
                      A
                    </div>
                    <div>
                      <p className="font-medium">Apple</p>
                      <p className="text-sm text-muted-foreground">
                        Not connected
                      </p>
                    </div>
                  </div>
                  <Button>Connect</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                      L
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">
                        Not connected
                      </p>
                    </div>
                  </div>
                  <Button>Connect</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between p-4 border border-red-200 rounded-md bg-red-50">
                  <div>
                    <p className="font-medium">Delete Account</p>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data.
                      This action cannot be undone.
                    </p>
                  </div>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investment" className="mt-0 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Investment Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="riskTolerance">Risk Tolerance</Label>
                    <select
                      id="riskTolerance"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={riskProfile.riskTolerance}
                      onChange={(e) =>
                        setRiskProfile({
                          ...riskProfile,
                          riskTolerance: e.target.value,
                        })
                      }
                    >
                      <option value="Conservative">Conservative</option>
                      <option value="Moderately Conservative">
                        Moderately Conservative
                      </option>
                      <option value="Moderate">Moderate</option>
                      <option value="Moderately Aggressive">
                        Moderately Aggressive
                      </option>
                      <option value="Aggressive">Aggressive</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investmentHorizon">Investment Horizon</Label>
                    <select
                      id="investmentHorizon"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={riskProfile.investmentHorizon}
                      onChange={(e) =>
                        setRiskProfile({
                          ...riskProfile,
                          investmentHorizon: e.target.value,
                        })
                      }
                    >
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="More than 10 years">
                        More than 10 years
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">Primary Investment Goals</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Capital Preservation",
                        "Income Generation",
                        "Capital Growth",
                        "Retirement",
                        "Education Funding",
                        "Tax Optimization",
                      ].map((goal) => (
                        <div
                          key={goal}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            id={goal}
                            className="rounded border-gray-300 text-finance-blue focus:ring-finance-blue"
                            checked={riskProfile.primaryGoals.includes(goal)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setRiskProfile({
                                  ...riskProfile,
                                  primaryGoals: [...riskProfile.primaryGoals, goal],
                                });
                              } else {
                                setRiskProfile({
                                  ...riskProfile,
                                  primaryGoals: riskProfile.primaryGoals.filter(
                                    (g) => g !== goal
                                  ),
                                });
                              }
                            }}
                          />
                          <Label htmlFor={goal}>{goal}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block">Preferred Sectors</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        "Technology",
                        "Healthcare",
                        "Financials",
                        "Consumer Discretionary",
                        "Energy",
                        "Real Estate",
                        "Industrials",
                        "Materials",
                        "Utilities",
                      ].map((sector) => (
                        <div
                          key={sector}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            id={sector}
                            className="rounded border-gray-300 text-finance-blue focus:ring-finance-blue"
                            checked={riskProfile.preferredSectors.includes(sector)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setRiskProfile({
                                  ...riskProfile,
                                  preferredSectors: [
                                    ...riskProfile.preferredSectors,
                                    sector,
                                  ],
                                });
                              } else {
                                setRiskProfile({
                                  ...riskProfile,
                                  preferredSectors:
                                    riskProfile.preferredSectors.filter(
                                      (s) => s !== sector
                                    ),
                                });
                              }
                            }}
                          />
                          <Label htmlFor={sector}>{sector}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button onClick={handleSavePreferences}>Save Preferences</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Your Risk Score: 65/100</h3>
                  <p className="mb-4">
                    Based on your investment profile and preferences, your risk tolerance is
                    classified as <span className="font-medium">Moderate</span>.
                  </p>

                  <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                    <div
                      className="h-2 bg-finance-blue rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-xs text-muted-foreground mb-6">
                    <span>Conservative</span>
                    <span>Moderate</span>
                    <span>Aggressive</span>
                  </div>

                  <p className="text-sm">
                    This risk profile suggests a balanced approach to investing, with a mix of
                    growth-oriented and conservative investments. Your portfolio should aim for
                    moderate growth while maintaining some stability during market fluctuations.
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Last assessment: June 15, 2023</span>
                  <Button variant="outline">Retake Assessment</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="mt-0 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">
                        Add an additional layer of security to your account
                      </p>
                    </div>
                    <Switch
                      checked={securitySettings.twoFactorAuth}
                      onCheckedChange={(checked) =>
                        setSecuritySettings({
                          ...securitySettings,
                          twoFactorAuth: checked,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Login Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts when there's a new login to your account
                      </p>
                    </div>
                    <Switch
                      checked={securitySettings.loginNotifications}
                      onCheckedChange={(checked) =>
                        setSecuritySettings({
                          ...securitySettings,
                          loginNotifications: checked,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Transaction Alerts</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified for each transaction or investment activity
                      </p>
                    </div>
                    <Switch
                      checked={securitySettings.transactionAlerts}
                      onCheckedChange={(checked) =>
                        setSecuritySettings({
                          ...securitySettings,
                          transactionAlerts: checked,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout</Label>
                    <select
                      id="sessionTimeout"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={securitySettings.sessionTimeout}
                      onChange={(e) =>
                        setSecuritySettings({
                          ...securitySettings,
                          sessionTimeout: e.target.value,
                        })
                      }
                    >
                      <option value="15 minutes">15 minutes</option>
                      <option value="30 minutes">30 minutes</option>
                      <option value="1 hour">1 hour</option>
                      <option value="4 hours">4 hours</option>
                      <option value="Always on">Always on</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button onClick={handleSaveSecuritySettings}>Save Settings</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Password Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>

                <div className="pt-2">
                  <p className="text-sm font-medium mb-2">Password Requirements:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-500" />
                      <span>At least 8 characters</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-500" />
                      <span>At least one uppercase letter</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-500" />
                      <span>At least one number</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-500" />
                      <span>At least one special character</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-end pt-4">
                  <Button>Change Password</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Account Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Login from New York, USA</p>
                        <p className="text-sm text-muted-foreground">
                          Chrome on Windows 10
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Today, 10:35 AM
                      </span>
                    </div>
                  </div>
                  <div className="border-b pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Login from New York, USA</p>
                        <p className="text-sm text-muted-foreground">
                          Safari on iPhone
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Yesterday, 2:42 PM
                      </span>
                    </div>
                  </div>
                  <div className="border-b pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Password Changed</p>
                        <p className="text-sm text-muted-foreground">
                          From New York, USA
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Jun 12, 2023, 11:20 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="mt-0 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 border rounded-md">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Professional Plan
                      </h3>
                      <p className="text-muted-foreground">
                        $29.99/month, billed annually
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0">Current Plan</Badge>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm mb-2">Your plan includes:</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Advanced analytics and reporting</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Portfolio optimization tools</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Real-time market data</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Custom reports and exports</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <p className="text-sm">
                      Next billing date: <strong>July 15, 2023</strong>
                    </p>
                    <Button variant="outline" size="sm">
                      Change Plan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">
                        Expires 04/2025
                      </p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>

                <div className="flex justify-between items-center p-4 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">Mastercard ending in 5555</p>
                      <p className="text-sm text-muted-foreground">
                        Expires 12/2024
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Set Default
                  </Button>
                </div>

                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Invoice
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          Jun 15, 2023
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          Professional Plan - Annual
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          $359.88
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge variant="outline" className="border-green-500 text-green-700">
                            Paid
                          </Badge>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          Jun 15, 2022
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          Professional Plan - Annual
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          $359.88
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge variant="outline" className="border-green-500 text-green-700">
                            Paid
                          </Badge>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          Jun 15, 2021
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          Standard Plan - Annual
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          $239.88
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge variant="outline" className="border-green-500 text-green-700">
                            Paid
                          </Badge>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
