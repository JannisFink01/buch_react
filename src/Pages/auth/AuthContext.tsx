import React, { ReactNode, createContext, useState } from "react";

// Erstelle den Authentifizierungs-Kontext
type AuthContextType = {
  token: string;
  role: string;
  updateToken: (newToken: string) => void;
  updateRole: (newRole: string) => void;
};

type Props = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  token: "",
  role: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateToken: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateRole: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  // Funktionen zum Aktualisieren des Tokens und der Rolle
  const updateToken = (newToken: string) => {
    setToken(newToken);
  };

  const updateRole = (newRole: string) => {
    setRole(newRole);
  };

  // Werte, die im Kontext zur Verfügung stehen
  const authContextValues: AuthContextType = {
    token,
    role,
    updateToken,
    updateRole,
  };

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
