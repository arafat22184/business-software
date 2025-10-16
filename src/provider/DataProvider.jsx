import { createContext, useState } from "react";

export const AuthContext = createContext();

const DataProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("null");

  const data = { activeSection, setActiveSection };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default DataProvider;
