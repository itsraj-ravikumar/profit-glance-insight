
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  const { toast } = useToast();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [marketAlertsEnabled, setMarketAlertsEnabled] = useState(true);
  const [portfolioAlertsEnabled, setPortfolioAlertsEnabled] = useState(true);
  const [aiInsightsEnabled, setAiInsightsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been updated successfully."
    });
  };

  const handleResetSettings = () => {
    toast({
      title: "Settings Reset",
      description: "Your settings have been reset to default."
    });
  };

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your personal details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" defaultValue="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" defaultValue="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" defaultValue="+1 (555) 123-4567" />
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={handleResetSettings}>Cancel</Button>
                  <Button onClick={handleSaveSettings}>Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regional Settings</CardTitle>
                <CardDescription>
                  Configure your regional preferences and time zone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <select id="currency" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="JPY">JPY (¥)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select id="language" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Time Zone</Label>
                  <select id="timezone" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="UTC-8">Pacific Time (UTC-8)</option>
                    <option value="UTC-5">Eastern Time (UTC-5)</option>
                    <option value="UTC">Coordinated Universal Time (UTC)</option>
                    <option value="UTC+1">Central European Time (UTC+1)</option>
                    <option value="UTC+8">China Standard Time (UTC+8)</option>
                  </select>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={handleResetSettings}>Reset</Button>
                  <Button onClick={handleSaveSettings}>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium leading-none">All Notifications</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Enable or disable all notifications
                      </p>
                    </div>
                    <Switch 
                      checked={notificationsEnabled}
                      onCheckedChange={(checked) => {
                        setNotificationsEnabled(checked);
                        setMarketAlertsEnabled(checked);
                        setPortfolioAlertsEnabled(checked);
                        setAiInsightsEnabled(checked);
                      }}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium leading-none">Market Alerts</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Get notified about significant market changes
                        </p>
                      </div>
                      <Switch 
                        checked={marketAlertsEnabled}
                        onCheckedChange={setMarketAlertsEnabled}
                        disabled={!notificationsEnabled}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium leading-none">Portfolio Updates</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Receive alerts about your portfolio performance
                        </p>
                      </div>
                      <Switch 
                        checked={portfolioAlertsEnabled}
                        onCheckedChange={setPortfolioAlertsEnabled}
                        disabled={!notificationsEnabled}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium leading-none">AI Insights</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Receive AI-generated investment insights
                        </p>
                      </div>
                      <Switch 
                        checked={aiInsightsEnabled}
                        onCheckedChange={setAiInsightsEnabled}
                        disabled={!notificationsEnabled}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-6">
                  <Button variant="outline" onClick={handleResetSettings}>Reset</Button>
                  <Button onClick={handleSaveSettings}>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Update your password to keep your account secure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" placeholder="Enter current password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" placeholder="Enter new password" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Password must be at least 8 characters long with at least one uppercase letter, one number, and one special character.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-6">
                  <Button variant="outline">Cancel</Button>
                  <Button onClick={() => toast({
                    title: "Password Updated",
                    description: "Your password has been updated successfully."
                  })}>Update Password</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>
                  Add an extra layer of security to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium leading-none">Enable 2FA</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Enhance your account security with two-factor authentication
                      </p>
                    </div>
                    <Switch onChange={() => toast({
                      title: "2FA Configuration",
                      description: "Two-factor authentication settings would open here."
                    })}/>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Theme Settings</CardTitle>
                <CardDescription>
                  Customize how the application looks and behaves
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium leading-none">Dark Mode</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Toggle between light and dark theme
                      </p>
                    </div>
                    <Switch 
                      checked={darkModeEnabled}
                      onCheckedChange={setDarkModeEnabled}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium leading-none mb-3">Dashboard Layout</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div 
                          className="border rounded-md p-4 cursor-pointer hover:border-primary flex justify-center items-center aspect-video"
                          onClick={() => toast({
                            title: "Layout Selected",
                            description: "Compact layout selected"
                          })}
                        >
                          <span>Compact</span>
                        </div>
                        <div 
                          className="border rounded-md p-4 cursor-pointer border-primary hover:border-primary flex justify-center items-center aspect-video"
                          onClick={() => toast({
                            title: "Layout Selected",
                            description: "Default layout selected"
                          })}
                        >
                          <span>Default</span>
                        </div>
                        <div 
                          className="border rounded-md p-4 cursor-pointer hover:border-primary flex justify-center items-center aspect-video"
                          onClick={() => toast({
                            title: "Layout Selected",
                            description: "Expanded layout selected"
                          })}
                        >
                          <span>Expanded</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-6">
                  <Button variant="outline" onClick={handleResetSettings}>Reset</Button>
                  <Button onClick={handleSaveSettings}>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
