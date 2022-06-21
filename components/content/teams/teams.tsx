import { ethers } from 'ethers'
import { NextComponentType } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import { ConnectedAccount } from '../../../context/account'
import { AppProvider } from '../../../context/provider'
import Team from './team'
import styles from './Teams.module.css'
import BettingContract from "../../../contracts/BettingContract.sol/Betting.json"
import TeamDetails from './team'

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
    <div className={styles.teams}>
      <div className={styles.teamsTable}>
        {
          teams?.map((value: Team) => {
            return <TeamDetails key={`${value.id}`} {...value} />
          })
        }
      </div>
    </div>
  )
}

export default Teams
