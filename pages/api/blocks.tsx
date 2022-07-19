import { NextApiResponse, NextApiRequest } from 'next'
import BettingContract from "../../contracts/BettingContract.sol/Betting.json"
import BettingToken from "../../contracts/BettingToken.sol/BettingToken.json"
import { ethers } from 'ethers';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.ETHERSCAN_API_KEY && process.env.BETTING_ADDRESS) {
    let provider = new ethers.providers.EtherscanProvider("goerli");
    const network = ethers.providers.getNetwork("goerli");
    provider = new ethers.providers.EtherscanProvider(network, process.env.ETHERSCAN_API_KEY);
    const betting = new ethers.Contract(process.env.BETTING_ADDRESS, BettingContract.abi, provider)
    let total = 0

    betting.timer().then((value: any) => {
      res.status(200).send(parseInt(value))
    })

  } else {
    res.status(404).send("Error")
  }
}