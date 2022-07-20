import { ethers } from "ethers"
import { useContext } from "react"
import { ConnectedAccount } from "../../../../context/account"
import { AppProvider } from "../../../../context/provider"

interface BuyButtonProps {
  disable: boolean
  from: string
  fromValue: Number
  to: string
  toValue: Number
}

export default function BuyButton(props: BuyButtonProps) {
  const connectedAccount = useContext(ConnectedAccount)
  const appProvider = useContext(AppProvider)
  const reloadPage = () => {
    window.location.reload()
  }

  function buyToken() {
    if (props.from == "ethers" && connectedAccount.account) {
      const signer = appProvider.provider?.getSigner()
      const tx = {
        from: connectedAccount.account,
        to: process.env.BETTING_ADDRESS,
        value: ethers.utils.parseEther(`${props.fromValue}`)
      }
      signer?.sendTransaction(tx).then((value: ethers.providers.TransactionResponse) => {
        value.wait().then(() => {
          alert("Transaction Complete")
          reloadPage()
        })
      })
    }
  }

  return (
    <div className="flex justify-center items-center">
      {
        props.disable ?
          <button
            className="flex justify-center items-center p-2 text-white bg-paletteTwo rounded-xl m-1 text-center opacity-50"
            disabled
          >
            Confirm and Swap
          </button>
          :
          <button
            className="flex justify-center items-center p-2 text-white bg-paletteTwo rounded-xl m-1 text-center hover:opacity-70 transition-colors"
            onClick={() => { buyToken() }}
          >
            Confirm and Swap
          </button>
      }
    </div >
  )
}
