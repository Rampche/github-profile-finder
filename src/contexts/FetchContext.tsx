import React, { createContext, ReactNode, useState } from 'react';
import { ContextType } from '../models/fetchContext';
//import { ThemeContextType } from '../models/theme';
import { UserProps } from '../models/user';

export const FetchContext = createContext<ContextType>({} as ContextType);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserProps>();

  return (
    <FetchContext.Provider value={{ userData, setUserData }}>
      {children}
    </FetchContext.Provider>
  );
};

export default ContextProvider;
