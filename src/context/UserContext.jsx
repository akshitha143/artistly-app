"use client";
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [role, setRole] = useState(null); 
  const [requests, setRequests] = useState([]);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (user, newRole) => {
    setRole(newRole);
    setUsername(user);
    localStorage.setItem("role", newRole);
    localStorage.setItem("username", user);
  };

  const logout = () => {
    setRole(null);
    setUsername(null);
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    setLoading(false);
  };

  React.useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const storedUser = localStorage.getItem("username");
    if (storedRole) setRole(storedRole);
    if (storedUser) setUsername(storedUser);
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ role, username, login, logout,loading,requests,setRequests }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
