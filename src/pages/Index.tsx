
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DailyOperationsDashboard } from "@/components/dashboard/DailyOperationsDashboard";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Index = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Here you would implement the actual search functionality
  };
  
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome back, {user?.firstName}
            </h1>
            <p className="text-muted-foreground mt-1">
              Here's an overview of your financial operations and AI insights
            </p>
          </div>
          
          <form onSubmit={handleSearch} className="relative mt-4 md:mt-0 w-full md:w-auto">
            <div className="flex w-full md:w-96">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transactions, reports, insights..."
                  className="pl-9 pr-20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" className="ml-2">
                Search
              </Button>
            </div>
          </form>
        </div>
        
        <DailyOperationsDashboard />
      </div>
    </DashboardLayout>
  );
};

export default Index;
