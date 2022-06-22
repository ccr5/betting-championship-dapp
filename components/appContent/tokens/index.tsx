import { useContext, useEffect, useState } from "react";
import { ConnectedAccount } from "../../../context/account";
import BuyButton from "./buyButton";
import SelectToken from "./selectToken";
import SwapButton from "./swapButton";
import SwapToken from "./swapToken";

export default function Tokens() {
  const connectedAccount = useContext(ConnectedAccount)
  const [isDisable, setIsDisable] = useState(true)
  const [from, setFrom] = useState<"ethers" | "betting">("ethers")
  const [fromValue, setFromValue] = useState<Number>(0)
  const [to, setTo] = useState<"ethers" | "betting">("betting")
  const [toValue, setToValue] = useState<Number>(0)

  useEffect(() => {
    connectedAccount.account == null ? setIsDisable(true) : setIsDisable(false)
  }, [connectedAccount.account])

  function toggle() {
    const newFrom = to
    const newTo = from
    setFrom(newFrom)
    setTo(newTo)
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className="h-1/3 w-96 text-white rounded-3xl bg-paletteThree"
        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
      >
        <div className="h-1/4 p-2 text-center justify-center">
          <h4>BET Tokens</h4>
        </div>
        <div className="h-1/4 p-2">
          <SelectToken token={from} onSetValue={setFromValue} />
        </div>
        <div className="h-1/4 p-2">
          <SwapToken token={to} onSetValue={setToValue} fromValue={fromValue} />
        </div>
        <div className="h-1/4 p-2">
          <BuyButton
            disable={isDisable}
            from={from}
            fromValue={fromValue}
            to={to}
            toValue={toValue} />
        </div>
      </div>
    </div>
  )
}
