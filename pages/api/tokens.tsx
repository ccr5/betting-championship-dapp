import { NextApiResponse, NextApiRequest } from 'next'
import BettingContract from "../../contracts/BettingContract.sol/Betting.json"
import BettingToken from "../../contracts/BettingToken.sol/BettingToken.json"
import { ethers } from 'ethers';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.ETHERSCAN_API_KEY && process.env.BETTING_TOKEN_ADDRESS) {
    let provider = new ethers.providers.EtherscanProvider("goerli");
    const network = ethers.providers.getNetwork("goerli");
    provider = new ethers.providers.EtherscanProvider(network, process.env.ETHERSCAN_API_KEY);
    const betToken = new ethers.Contract(process.env.BETTING_TOKEN_ADDRESS, BettingToken.abi, provider)

    betToken.balanceOf("0x0E2E8Fbeaed6CA5AC29D9C7D4a66be288165558e").then((value) => {
      res.status(200).send(parseInt(value))
    })

  } else {
    res.status(404).send("Error")
  }
}