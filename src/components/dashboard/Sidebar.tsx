
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Home,
  PieChart,
  Briefcase,
  Bell,
  User,
  Settings,
  ArrowRightLeft,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem = ({ icon: Icon, label, href, active }: NavItemProps) => {
  return (
    <Link to={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 mb-1",
          active
            ? "bg-sidebar-accent text-sidebar-accent-foreground"
            : "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Button>
    </Link>
  );
};

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  
  return (
    <>
      {/* Mobile sidebar trigger */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 lg:hidden"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <X size={18} /> : <Menu size={18} />}
      </Button>
      
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-sidebar transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          isCollapsed ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center mb-8">
            <BarChart3 className="w-8 h-8 text-finance-blue" />
            <h1 className="ml-2 text-xl font-bold text-white">FinanceView</h1>
          </div>

          <nav className="space-y-1 flex-1">
            <NavItem
              icon={Home}
              label="Dashboard"
              href="/"
              active={location.pathname === "/"}
            />
            <NavItem
              icon={BarChart3}
              label="Financials"
              href="/financials"
              active={location.pathname === "/financials"}
            />
            <NavItem
              icon={PieChart}
              label="Market Trends"
              href="/market-trends"
              active={location.pathname === "/market-trends"}
            />
            <NavItem
              icon={Briefcase}
              label="Portfolio"
              href="/portfolio"
              active={location.pathname === "/portfolio"}
            />
            <NavItem
              icon={ArrowRightLeft}
              label="Transactions"
              href="/transactions"
              active={location.pathname === "/transactions"}
            />
            <NavItem
              icon={Bell}
              label="Notifications"
              href="/notifications"
              active={location.pathname === "/notifications"}
            />
            <NavItem
              icon={User}
              label="Profile"
              href="/profile"
              active={location.pathname === "/profile"}
            />
          </nav>

          <div className="mt-auto">
            <NavItem icon={Settings} label="Settings" href="/settings" />
          </div>
        </div>
      </div>
    </>
  );
};
