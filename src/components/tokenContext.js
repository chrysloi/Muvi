import { createContext } from "react";

export const TokenContext = createContext({
  userToken: {},
  setUserToken: () => {},
});
