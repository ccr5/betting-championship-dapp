import Image from "next/image";
import downArrow from "../../../../public/down-arrow.png"
import { FormEvent, useContext, useEffect, useState } from "react";
import { Team } from "../teams"
import { ConnectedAccount } from "../../../../context/account";
import { AppProvider } from "../../../../context/provider";
import { ethers } from "ethers";
import BettingContract from "../../../../contracts/BettingContract.sol/Betting.json"
import BettingToken from "../../../../contracts/BettingToken.sol/BettingToken.json"

export default function TeamDetails(props: Team) {
  const connectedAccount = useContext(ConnectedAccount)
  const appProvider = useContext(AppProvider)
  const [isOpen, setIsOpen] = useState(false)
  const [isApproval, setIsApproval] = useState(false)

  useEffect(() => {
    checkApproval().then((value) => {
      setIsApproval(parseInt(value) > 0)
    })
  })

  async function checkApproval() {
    const signer = appProvider.provider?.getSigner()

    if (process.env.BETTING_ADDRESS && process.env.BETTING_TOKEN_ADDRESS && signer) {
      const bettingToken = new ethers.Contract(process.env.BETTING_TOKEN_ADDRESS, BettingToken.abi, signer)
      return bettingToken.allowance(await signer.getAddress(), process.env.BETTING_ADDRESS)
    }
  }

  async function handleApprove() {
    const signer = appProvider.provider?.getSigner()

    if (process.env.BETTING_ADDRESS && process.env.BETTING_TOKEN_ADDRESS && signer) {
      const bettingToken = new ethers.Contract(process.env.BETTING_TOKEN_ADDRESS, BettingToken.abi, signer)
      const balance = bettingToken.balanceOf(await signer.getAddress())
      await bettingToken.connect(signer).approve(process.env.BETTING_ADDRESS, balance)
      return await checkApproval()
    }
  }

  async function handleBet(e: any) {
    e.preventDefault()
    const amount = parseInt(e.target[0].value)

    if (amount <= 0) alert("Erro ao apostar")

    const signer = appProvider.provider?.getSigner()

    if (process.env.BETTING_ADDRESS && process.env.BETTING_TOKEN_ADDRESS && signer) {
      const betting = new ethers.Contract(process.env.BETTING_ADDRESS, BettingContract.abi, signer)
      const isBetter = await betting.teamBetted(await signer.getAddress())
      if (isBetter > 0) {
        await betting.raise(amount)
      } else {
        await betting.bet(props.id, amount)
      }
    }
  }

  return props &&
    <>
      <button
        className="inline-flex items-center h-20 w-full p-5 mt-2 border-b-2 border-solid border-[#E5989B] bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="inline-flex items-center h-full w-full p-5 mt-2">
          <div className="flex items-center justify-center h-full w-1/5">
            {`${props.id}`}
          </div>
          <div className="flex items-center justify-center h-full w-1/5">
            {props.name}
          </div>
          <div className="flex items-center justify-center h-full w-1/5">
            {`${props.bets}`}
          </div>
          <div className="flex items-center justify-center h-full w-1/5">
            {`${props.tokens}`}
          </div>
          <div className="flex items-center justify-center h-full w-1/5">
            <Image
              src={downArrow}
              alt=""
              width={24}
              height={24}
              className="d-inline-block align-text-top"
            />
          </div>
        </div>
      </button>
      {isOpen &&
        <div className="inline-flex items-center h-20 w-full p-5 bg-[#6D6875]">
          <form
            className="flex items-center justify-center h-12 w-full text-white m-2 p-2"
            onSubmit={async (e) => { await handleBet(e) }}
          >
            <input
              className="bg-[#a39dac] opacity-80 rounded-lg m-1 min-h-[50px] w-2/3 text-center"
              style={{ width: "90%" }}
              type="text"
              placeholder="0.0"
              aria-label="0.0"
            />
            {
              isApproval ?
                <button
                  className="bg-[#b95f71] rounded-lg m-1 min-h-[50px] min-w-[80px] text-center hover:bg-red-500"
                  type="submit"
                >
                  Bet
                </button> :
                <button
                  className="bg-[#b95f71] rounded-lg m-1 min-h-[50px] min-w-[80px] text-center hover:bg-red-500"
                  onClick={async () => await handleApprove()}
                >
                  Approve
                </button>
            }

          </form>
        </div>
      }
    </>
}
