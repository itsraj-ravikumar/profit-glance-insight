
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DailyOperationsDashboard } from "@/components/dashboard/DailyOperationsDashboard";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();
  
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user?.firstName}
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's an overview of your financial operations and AI insights
          </p>
        </div>
        
        <DailyOperationsDashboard />
      </div>
    </DashboardLayout>
  );
};

export default Index;
