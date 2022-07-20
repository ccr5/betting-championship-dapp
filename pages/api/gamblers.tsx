import { NextApiResponse, NextApiRequest } from 'next'
import BettingContract from "../../contracts/BettingContract.sol/Betting.json"
import BettingToken from "../../contracts/BettingToken.sol/BettingToken.json"
import { ethers } from 'ethers';

export interface Gamblers {
  id: number,
  name: string,
  bets: number,
  tokens: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Gamblers[]>
) {
  if (process.env.ETHERSCAN_API_KEY && process.env.BETTING_ADDRESS) {
    let provider = new ethers.providers.EtherscanProvider("goerli");
    const network = ethers.providers.getNetwork("goerli");
    provider = new ethers.providers.EtherscanProvider(network, process.env.ETHERSCAN_API_KEY);
    const betting = new ethers.Contract(process.env.BETTING_ADDRESS, BettingContract.abi, provider)
    let total: Gamblers[] = []

    betting.teamsCount().then(async (value: any) => {
      for (let index = 0; index < parseInt(value); index++) {
        const result = await betting.teams(index + 1)
        total.push({
          id: parseInt(result.id),
          name: result.name,
          bets: parseInt(result.bets),
          tokens: parseInt(result.tokens)
        })
      }

      res.status(200).send(total)
    })

  } else {
    res.status(404)
  }
}