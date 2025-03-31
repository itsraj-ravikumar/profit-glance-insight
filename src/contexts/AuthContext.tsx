
import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  profileImageUrl?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user data");
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  // Mock login function (would be replaced with actual API call)
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simple validation
      if (!email || !password) {
        throw new Error("Email and password are required");
      }
      
      // For demo purposes, accept any email that looks valid with any password
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        throw new Error("Invalid email format");
      }
      
      // In a real app, you would make an API call here
      // For now, we'll create a mock user based on the email
      const [firstName, domain] = email.split('@');
      const mockUser: User = {
        id: `user-${Date.now()}`,
        email,
        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        lastName: "Thompson",
        title: "Investment Manager",
        company: "Global Financial Partners",
      };
      
      // Add a small delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
