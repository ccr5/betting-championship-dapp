import Image from "next/image"
import trophy from "../../../public/betting.png"
import ProgressBetICO from "./progressBetICO"

export default function BetTokenICO() {
  return (
    <div className="w-full bg-paletteTwo text-white rounded-2xl p-2 m-2">
      <div className="flex items-center justify-center gap-4 m-3">
        <div className="desktop:w-16 laptop:w-16 tablet:w-12 mobile:w-10">
          <Image
            src={trophy}
            alt=""
          />
        </div>
        <div className="desktop:text-2xl laptop:text-2xl tablet:text-xl mobile:text-lg">
          BET Token ICO
        </div>
      </div>
      <div
        className="
          text-center m-3
          desktop:text-base laptop:text-base tablet:text-base mobile:text-sm
        "
      >
        Buy BET tokens and participate in the biggest web3 tournament in the universe
      </div>
      <div
        className="
          grid grid-cols-2 items-center justify-center text-center m-3
          desktop:text-lg laptop:text-lg tablet:text-lg mobile:text-base
        "
      >
        <div>ETH / BET:</div>
        <div>2000 BETs</div>
      </div>
      <div className="flex justify-center items-center w-full m-3">
        <ProgressBetICO />
      </div>
      <div className="flex justify-center items-center w-full m-3">
        <button
          className="flex justify-center items-center p-2 mobile:p-1 text-black bg-gray-200 rounded-xl text-center hover:opacity-70 transition-colors"
        >
          Buy BETs
        </button>
      </div>
    </div>
  )
}