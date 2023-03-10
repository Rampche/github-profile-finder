import { UserProps } from "./user";
import { useState } from "react";

export interface ContextType {
  userData: UserProps | undefined;
  setUserData: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
}

