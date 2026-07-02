import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("findback_user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const register = ({ name, email, phone, password }) => {
    const savedUsers = JSON.parse(
      localStorage.getItem("findback_registered_users") || "[]"
    );

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      password,
      role: "USER",
    };

    const updatedUsers = [...savedUsers, newUser];

    localStorage.setItem(
      "findback_registered_users",
      JSON.stringify(updatedUsers)
    );

    return newUser;
  };

  const login = ({ email, password }) => {
    const role = email.toLowerCase().includes("admin") ? "ADMIN" : "USER";

    const loggedInUser = {
      id: 1,
      name: role === "ADMIN" ? "Admin User" : "Normal User",
      email,
      role,
      token: "fake-jwt-token",
    };

    localStorage.setItem("findback_user", JSON.stringify(loggedInUser));
    localStorage.setItem("findback_token", loggedInUser.token);

    setUser(loggedInUser);

    return loggedInUser;
  };

  const logout = () => {
    localStorage.removeItem("findback_user");
    localStorage.removeItem("findback_token");
    setUser(null);
  };

  const isAuthenticated = Boolean(user);
  const isAdmin = user?.role === "ADMIN";

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}