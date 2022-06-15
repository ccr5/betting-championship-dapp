import { providers } from "ethers";
import { createContext } from "react";

export interface IAppProvider {
  provider: providers.Web3Provider | null
  handleProvider: (value: providers.Web3Provider | null) => void
}

export const AppProvider = createContext<IAppProvider>({
  provider: null,
  handleProvider: () => { }
})
