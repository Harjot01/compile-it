import { createContext, useState } from "react";

export const OutputContext = createContext();

export const OutputProvider = ({ children }) => {
  const [output, setOutput] = useState(null);
  const [isError, setIsError] = useState(false);

  return (
    <OutputContext.Provider value={{ output, setOutput, isError, setIsError }}>
      {children}
    </OutputContext.Provider>
  );
};
