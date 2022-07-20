import { ethers } from 'ethers'
import React, { useContext, useEffect, useState } from 'react'
import { ConnectedAccount } from '../../../context/account'
import { AppProvider } from '../../../context/provider'
import BettingContract from "../../../contracts/BettingContract.sol/Betting.json"
import BettingToken from "../../../contracts/BettingToken.sol/BettingToken.json"

export interface Team {
  id: Number
  name: string
  bets: Number
  tokens: Number
}

export default function Teams() {
  const connectedAccount = useContext(ConnectedAccount)
  const appProvider = useContext(AppProvider)
  const [isApproval, setIsApproval] = useState(false)
  const [teams, setTeams] = useState<Team[] | null>()
  const reloadPage = () => {
    window.location.reload()
  }

  useEffect(() => {
    if (!teams) loadTeams()
    checkApproval()
  })

  async function checkApproval() {
    const signer = appProvider.provider?.getSigner()

    if (process.env.BETTING_ADDRESS && process.env.BETTING_TOKEN_ADDRESS && signer) {
      const bettingToken = new ethers.Contract(process.env.BETTING_TOKEN_ADDRESS, BettingToken.abi, signer)
      const value = await bettingToken.allowance(await signer.getAddress(), process.env.BETTING_ADDRESS)
      setIsApproval(parseInt(value) > 0)
    }
  }

  async function handleApprove() {
    const signer = appProvider.provider?.getSigner()

    if (process.env.BETTING_ADDRESS && process.env.BETTING_TOKEN_ADDRESS && signer) {
      const bettingToken = new ethers.Contract(process.env.BETTING_TOKEN_ADDRESS, BettingToken.abi, signer)
      const balance = bettingToken.balanceOf(await signer.getAddress())
      bettingToken.connect(signer).approve(process.env.BETTING_ADDRESS, balance)
        .then(async (tx: any) => {
          tx.wait().then(async (value: any) => {
            await checkApproval()
            alert("Transaction complete!")
            reloadPage()
          })
        })
    }
  }

  async function handleBet(e: any) {
    e.preventDefault()
    const id = parseInt(e.target[0].value)
    const amount = parseInt(e.target[1].value)

    if (!amount || amount <= 0) alert("Error")

    const signer = appProvider.provider?.getSigner()

    if (process.env.BETTING_ADDRESS && process.env.BETTING_TOKEN_ADDRESS && signer) {
      const betting = new ethers.Contract(process.env.BETTING_ADDRESS, BettingContract.abi, signer)
      const isBetter = await betting.teamBetted(await signer.getAddress())
      if (isBetter > 0) {

        if (id == isBetter) {
          betting.raise(amount).then((value: any) => {
            value.wait().then((value: any) => {
              alert("Transaction complete!")
              reloadPage()
            })
          })
        } else {
          alert("You MUST to bet in the same team")
        }

      } else {
        betting.bet(id, amount).then((value: any) => {
          value.wait().then((value: any) => {
            alert("Transaction complete!")
            reloadPage()
          })
        })
      }
    }
  }

  async function loadTeams() {
    const signer = appProvider.provider?.getSigner()

    if (process.env.BETTING_ADDRESS && signer) {
      let result: Team[] = []
      const betting = new ethers.Contract(process.env.BETTING_ADDRESS, BettingContract.abi, signer)
      const teamsLenght = parseInt(await betting.teamsCount())
      for (let index = 0; index < teamsLenght; index++) {
        const team = await betting.teams(index + 1)
        result.push({
          id: parseInt(team.id),
          name: team.name,
          bets: parseInt(team.bets),
          tokens: parseInt(team.tokens)
        })
      }
      setTeams(result)
    }
  }

  return connectedAccount ?
    <div className="flex justify-center items-center">
      <div
        className="h-1/3 min-h-[250px] w-full text-white rounded-3xl bg-paletteTwo items-center justify-center"
        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
      >
        <div className="h-1/3 p-2 text-center justify-center">
          <h4>Doing a BET</h4>
        </div>
        <form
          className="h-2/3 block items-center justify-center w-full"
          onSubmit={async (e) => { await handleBet(e) }}
        >
          <div className="flex h-1/4 w-full items-center p-2 text-center justify-center">
            <select className="bg-gray-200 h-full min-h-[30px] w-full text-gray-600 rounded-xl m-1 text-center">
              {
                teams && teams.map((value: Team) => {
                  return <option key={`${value.id}`} value={`${value.id}`}> {value.name} </option>
                })
              }
            </select>
          </div>
          <div className="flex h-1/4 w-full items-center p-2 text-center justify-center">
            <input
              className="bg-gray-200 h-full min-h-[30px] w-2/3 text-gray-600 rounded-xl m-1 text-center"
              type="number"
              placeholder="0.0"
              aria-label="0.0"
            />
            {
              isApproval ?
                <button
                  className="flex justify-center items-center p-2 w-1/3 text-white bg-paletteThree min-h-[30px] rounded-xl m-1 text-center hover:opacity-70 transition-colors"
                  type="submit"
                >
                  Bet
                </button> :
                <button
                  className="flex justify-center items-center p-2 w-1/3 text-white bg-paletteThree min-h-[30px] rounded-xl m-1 text-center hover:opacity-70 transition-colors"
                  type="button"
                  onClick={async () => await handleApprove()}
                >
                  Approve
                </button>
            }
          </div>
        </form>
      </div>
    </div> :
    <div className="flex justify-center items-center">
      <div
        className="h-1/3 min-h-[250px] w-full text-white rounded-3xl bg-paletteTwo items-center justify-center"
        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
      >
        <div className="h-1/3 p-2 text-center justify-center">
          <h4>Doing a BET</h4>
        </div>
        <form className="h-2/3 block items-center justify-center w-full">
          <div className="flex h-1/4 w-full items-center p-2 text-center justify-center">
            <select className="bg-gray-200 h-full min-h-[30px] w-full text-gray-600 rounded-xl m-1 text-center">
              {
                teams && teams.map((value: Team) => {
                  return <option key={`${value.id}`} value={`${value.id}`}> {value.name} </option>
                })
              }
            </select>
          </div>
          <div className="flex h-1/4 w-full items-center p-2 text-center justify-center">
            <input
              className="bg-gray-200 h-full min-h-[30px] w-2/3 text-gray-600 rounded-xl m-1 text-center"
              type="number"
              placeholder="0.0"
              aria-label="0.0"
            />
            <button
              className="flex justify-center items-center p-2 w-1/3 text-white bg-paletteThree min-h-[30px] rounded-xl m-1 text-center"
              type="submit"
              disabled
            >
              Swap
            </button>
          </div>
        </form>
      </div>
    </div>
}
