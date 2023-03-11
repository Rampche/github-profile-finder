import React, { createContext, useState } from 'react';
import { ContextType } from '../models/fetchContext';
import { UserProps } from '../models/user';

export const FetchContext = createContext<{
  userData:
    | {
        avatar_url: string;
        login: string;
        name: string;
        followers: number;
        following: number;
        public_repos: number;
        bio: string;
        location: string;
      }
    | undefined;
  setUserData: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
}>({} as ContextType);

const ContextProvider = (props: any) => {
  const [userData, setUserData] = useState<UserProps>();

  return (
    <FetchContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </FetchContext.Provider>
  );
};

export default ContextProvider;
