import Image from "next/image"
import Link from "next/link"
import closeModal from "../../../public/close.png"

interface ModalProps {
  handleModal: (value: boolean) => void
}

export function Modal(props: ModalProps) {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-30">
      <div className="flex justify-center items-center h-full w-full">
        <div className="
          shadow-2xl bg-paletteTwo shadow-gray-900 rounded-3xl h-1/2 overflow-auto
          desktop:w-1/2 laptop:w-1/2 tablet: w-1/2 mobile:w-4/5
        ">
          <div
            className="flex w-full justify-end items-end p-2"
            onClick={() => props.handleModal(value => !value)}
          >
            <Image
              src={closeModal}
              alt=""
              width={15}
              height={15}
            />
          </div>
          <div className="
            flex w-full justify-center items-center text-white p-2 font-bold
            desktop:text-2xl laptop:text-2xl tablet:text-xl mobile:text-lg
          ">
            Hey, warrior!
          </div>
          <div className="
            flex w-full justify-center items-center text-justify text-white p-6
            desktop:text-xl laptop:text-xl tablet:text-lg mobile:text-base
          ">
            The app is under development but I can explain how it will work.
            The white screen will have the game scrolling in real time between a
            bot and an AI. Below you will see information about the game objective and player data.
          </div>
          <div className="
            flex w-full justify-center items-center text-justify text-white p-6
            desktop:text-xl laptop:text-xl tablet:text-lg mobile:text-base
          ">
            The exchange between ethers and BET tokens and bets on teams is already working.
            To swap ethers to BET, just follow the tutorial below:
          </div>
          <div className="
            flex w-full justify-center items-center text-justify text-white p-6
            desktop:text-xl laptop:text-xl tablet:text-lg mobile:text-base
          ">
            <ul className="w-2/3">
              <li>1. Click in Connect wallet and select a account</li>
              <li className="flex gap-2">
                2. Go to
                <Link href="https://goerlifaucet.com/" passHref>
                  <a className="font-bold">fauce Goerli</a>
                </Link>
                to get fake ETHs
              </li>
              <li>3. Allow testnets in your provider (Ex: Metamask) and choose Goerli Testnet</li>
              <li>4. Go to BET Tokens, insert how many ethers you want to swap (bigger than 0.001 eth)</li>
              <li>5. Click in Confirm and Swap</li>
              <li>6. Wait an alert confirm transaction was done</li>
            </ul>
          </div>
          <div className="
            flex w-full justify-center items-center text-justify text-white p-6
            desktop:text-xl laptop:text-xl tablet:text-lg mobile:text-base
          ">
            To bet in a team, just follow the tutorial below:
          </div>
          <div className="
            flex w-full justify-center items-center text-justify text-white p-6
            desktop:text-xl laptop:text-xl tablet:text-lg mobile:text-base
          ">
            <ul className="w-2/3">
              <li>1. Click in Connect wallet and select a account</li>
              <li className="flex gap-2">
                2. Go to
                <Link href="https://goerlifaucet.com/" passHref>
                  <div className="font-bold">fauce Goerli</div>
                </Link>
                to get fake ETHs
              </li>
              <li>3. Allow testnets in your provider (Ex: Metamask) and choose Goerli Testnet</li>
              <li>4. Go to Doing a bet and approve Betting Contract to handle your BET tokens</li>
              <li>5. After Betting Contract was approved, choose a team and insert how many BET tokens you want to bet</li>
              <li>6. Click in Bet</li>
              <li>7. Wait an alert confirm transaction was done</li>
            </ul>
          </div>
          <div className="
            flex w-full justify-center items-center text-white p-2 font-bold
            desktop:text-2xl laptop:text-2xl tablet:text-xl mobile:text-lg
          ">
            Have a good game, great warrior!
          </div>
          <div className="flex justify-center items-center">
            <button
              className="flex justify-center items-center p-2 w-1/3 text-white bg-paletteFour min-h-[30px] rounded-xl m-1 text-center hover:opacity-70 transition-colors"
              type="button"
            >
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}