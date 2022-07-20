import Image from "next/image"
import { useEffect, useState } from "react"
import { Gamblers } from "../../../pages/api/gamblers"
import trophy from "../../../public/trophy.svg"
import MarketingSkeleton from "./skeleton"

export default function Marketing() {
  const [reward, setReward] = useState<number | null>(null)
  const [gamblers, setGamblers] = useState<number | null>(null)
  const [blocksLeft, setBlocksLeft] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const [tokensOwner, setTokensOwner] = useState<number | null>(null)


  useEffect(() => {
    if (!reward) loadReward()
    if (!gamblers) loadGamblers()
    if (!blocksLeft) {
      loadBlocksLeft()
      loadTimeLeft()
    }
    if (!tokensOwner) loadTokensOwner()

  }, [])

  useEffect(() => {
    loadTimeLeft()
  }, [blocksLeft])

  function loadReward() {
    fetch(process.env.WARRIORS_API + "/reward")
      .then(async (value) => {
        setReward(await value.json())
      })
  }

  function loadGamblers() {
    fetch(process.env.WARRIORS_API + "/gamblers")
      .then(async (value) => {
        const data: Gamblers[] = await value.json()
        let gamblers = 0
        data.map((value: Gamblers) => {
          gamblers += value.bets
        })
        setGamblers(gamblers)
      })
  }

  function loadBlocksLeft() {
    fetch(process.env.WARRIORS_API + "/blocks")
      .then(async (value) => {
        setBlocksLeft(await value.json())
      })
  }

  function loadTimeLeft() {
    if (blocksLeft) {
      setTimeLeft(Math.floor(blocksLeft * 30 / 60 / 60))
    } else {
      setTimeLeft(0)
    }
  }

  function loadTokensOwner() {
    fetch(process.env.WARRIORS_API + "/tokens")
      .then(async (value) => {
        setTokensOwner(await value.json())
      })
  }

  return reward && gamblers && blocksLeft && timeLeft && tokensOwner ?
    <div className="w-full text-white">
      <div className="absolute align-top 
        desktop:w-[210px] desktop:h-[190px] desktop:ml-4 
        laptop:w-[180px] laptop:h-[160px] laptop:ml-2
        tablet:w-[160px] tablet:h-[140px] tablet:ml-1
        mobile:w-[80px] mobile:h-[60px] mobile:ml-1">
        <Image
          src={trophy}
          alt=""
        />
      </div>
      <div className="desktop:h-[90px] laptop:h-[75px] tablet:h-[65px] mobile:h-[28px]"></div>
      <div className="flex w-full justify-end bg-paletteThree text-center rounded-t-xl p-1">
        <div className="
          grid grid-cols-4 items-center
          desktop:w-[calc(100%-210px)] laptop:w-[calc(100%-180px)] tablet:w-[calc(100%-160px)] mobile:w-[calc(100%-80px)]
          desktop:min-h-[100px] laptop:min-h-[85px] tablet:min-h-[75px] mobile:min-h-[42px]">
          <div className="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-xs">Blocks left:</div>
          <div className="desktop:text-3xl laptop:text-3xl tablet:text-2xl mobile:text-xs">{blocksLeft && blocksLeft.toString()}</div>
          <div className="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-xs">Estimated time:</div>
          <div className="desktop:text-3xl laptop:text-3xl tablet:text-2xl mobile:text-xs">{timeLeft && timeLeft.toString()}h</div>
        </div>
      </div>
      <div className="
        flex w-full justify-end bg-paletteThree text-center p-1
        rounded-b-xl
        desktop:min-h-[100px] laptop:min-h-[100px] tablet:min-h-[95px] mobile:min-h-[42px]">
        <div className="w-full grid grid-cols-4 items-center">
          <div className="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-xs">Gamblers:</div>
          <div className="desktop:text-3xl laptop:text-3xl tablet:text-2xl mobile:text-xs">{gamblers && gamblers.toString()}</div>
          <div className="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-xs">Reward:</div>
          <div className="desktop:text-3xl laptop:text-3xl tablet:text-2xl mobile:text-xs">{reward && reward.toString()} BETs</div>
        </div>
      </div>
    </div> :
    <MarketingSkeleton />
}