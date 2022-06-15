import { useContext, useEffect, useState } from "react";
import { ConnectedAccount } from "../../context/account";
import BuyButton from "./buyButton";
import SelectToken from "./selectToken";
import SwapButton from "./swapButton";
import SwapToken from "./swapToken";

export default function Tokens() {
  const connectedAccount = useContext(ConnectedAccount)
  const [isDisable, setIsDisable] = useState(true)
  const [isApproval, setIsApproval] = useState(false)
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
        className="min-h-[450px] w-96 m-4 text-white rounded-3xl bg-[#B5838D]"
        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
      >
        <div className="mt-2 min-h-[50px] p-2 text-center justify-center mb-2">
          <h4>BET Tokens</h4>
          <p>Buy BET tokens in an instant using ethers</p>
          <hr />
        </div>
        <SelectToken token={from} onSetValue={setFromValue} />
        <SwapButton toggle={toggle} />
        <SwapToken token={to} onSetValue={setToValue} fromValue={fromValue} />
        <BuyButton disable={isDisable} approval={isApproval} />
      </div>
    </div>
  )
}
