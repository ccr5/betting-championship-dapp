import { createContext } from "react"

export interface IConnectedAccount {
  account: string | null
  handleAccount: (value: string | null) => void
}

export const ConnectedAccount = createContext<IConnectedAccount>({
  account: null,
  handleAccount: () => { }
})
