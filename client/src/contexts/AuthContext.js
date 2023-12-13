import React, { createContext, useContext, useState, useEffect } from "react";
import Auth from "../services/auth"; // Adjust the import path as needed

// Create the context
const AuthContext = createContext({});

// Custom hook for easy access to the context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");

  useEffect(() => {
    // Check if the user is already logged in
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuthStatus === "true");
  }, []);

  const login = async (RE_email, password) => {
    try {
      await Auth.authenticate(RE_email, password);
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true"); // Store auth status
    } catch (error) {
      console.error("Login error:", error);
      setFlashMessage("Login failed. Please try again.");
    }
  };

  const logout = async () => {
    try {
      await Auth.signout();
      setIsAuthenticated(false);
      localStorage.removeItem("isAuthenticated"); // Clear auth status
    } catch (error) {
      console.error("Logout error:", error);
      setFlashMessage("Logout failed. Please try again.");
    }
  };

  // Provide the authentication state and actions to the rest of the app
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, flashMessage, setFlashMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
};
