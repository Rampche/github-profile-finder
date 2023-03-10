import React, { createContext, useState } from "react";
import { ContextType } from "../models/fetchContext";
import { UserProps } from "../models/user";

export const FetchContext = createContext({} as ContextType);

const ContextProvider = (props: any) => {
  const [userData, setUserData] = useState<UserProps>();
  //TODO Criar tipagem à parte para userData (Passar o mouse por cima). Talvez num ficheiro à parte.

  return (
    <FetchContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </FetchContext.Provider>
  );
};

export default ContextProvider;
