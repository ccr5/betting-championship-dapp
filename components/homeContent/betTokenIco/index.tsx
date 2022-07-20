import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import betting from "../../../public/betting.png"
import ProgressBetICO from "./progressBetICO"
import BetTokenICOSkeleton from "./skeleton"

export default function BetTokenICO() {
  const [tokensOwner, setTokensOwner] = useState<number | null>(null)
  const [subsCount, setSubsCount] = useState<number | null>(null)
  const [goal, setGoal] = useState<number>(1000000)
  const [pendent, setPendent] = useState<string | null>(null)

  useEffect(() => {
    let interval: any

    loadTokensOwner()

    interval = setInterval(() => {
      loadTokensOwner()
    }, 60000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    calculateSubsCount()
  }, [tokensOwner])

  useEffect(() => {
    calculatePendent()
  }, [subsCount])

  function loadTokensOwner() {
    fetch(process.env.WARRIORS_API + "/tokens")
      .then(async (value) => {
        setTokensOwner(await value.json())
      })
  }

  function calculateSubsCount() {
    if (goal && tokensOwner) {
      setSubsCount(goal - tokensOwner)
    }
  }

  function calculatePendent() {
    if (subsCount) {
      if (subsCount < 1000) {
        setPendent(subsCount.toString())
      } else if (subsCount == 1000000) {
        setPendent("1MM")
      } else {
        setPendent(`${subsCount / 1000}M`)
      }
    }
  }

  return tokensOwner && subsCount && goal && pendent ?
    <div className="w-full bg-paletteTwo text-white rounded-2xl p-2 m-2">
      <div className="flex items-center justify-center gap-4 m-3">
        <div className="desktop:w-16 laptop:w-16 tablet:w-12 mobile:w-10">
          <Image
            src={betting}
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
        <ProgressBetICO tokensOwner={tokensOwner} subsCount={subsCount} goal={goal} pendent={pendent} />
      </div>
      <div className="flex justify-center items-center w-full m-3">
        <Link href="/app" passHref>
          <button
            className="flex justify-center items-center p-2 mobile:p-1 text-black bg-gray-200 rounded-xl text-center hover:opacity-70 transition-colors"
          >
            Buy BETs
          </button>
        </Link>
      </div>
    </div> :
    <BetTokenICOSkeleton />
}