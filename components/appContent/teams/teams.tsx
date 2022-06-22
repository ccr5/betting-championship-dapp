import { ethers } from 'ethers'
import { NextComponentType } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import { ConnectedAccount } from '../../../context/account'
import { AppProvider } from '../../../context/provider'
import Team from './teamDetails'
import BettingContract from "../../../contracts/BettingContract.sol/Betting.json"

export interface Team {
  id: Number
  name: string
  bets: Number
  tokens: Number
}

const Teams: NextComponentType = () => {
  const connectedAccount = useContext(ConnectedAccount)
  const appProvider = useContext(AppProvider)
  const [teams, setTeams] = useState<Team[] | null>()

  useEffect(() => {
    if (!teams) loadTeams()
  })

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

  return (
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
            <input
              className="bg-gray-200 h-full min-h-[30px] w-full text-gray-600 rounded-xl m-1 text-center"
              type="number"
              placeholder="0.0"
              aria-label="0.0"
            // onChange={(e) => { handleValue(e) }}
            />
          </div>
          <div className="flex h-1/4 w-full items-center p-2 text-center justify-center">
            <input
              className="bg-gray-200 h-full min-h-[30px] w-2/3 text-gray-600 rounded-xl m-1 text-center"
              type="number"
              placeholder="0.0"
              aria-label="0.0"
            // onChange={(e) => { handleValue(e) }}
            />
            <button
              className="flex justify-center items-center p-2 w-1/3 text-white bg-paletteThree min-h-[30px] rounded-xl m-1 text-center hover:opacity-70 transition-colors"
              type="submit"
            >
              Swap
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Teams
