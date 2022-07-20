import Image from "next/image"
import teamOneLogo from "../../../public/teamLogo.svg"
import teamTwoLogo from "../../../public/teamLogoTwo.png"
import right from "../../../public/right.svg"
import { useState, useEffect } from "react"
import { Gamblers } from "../../../pages/api/gamblers"
import MarketingSkeleton from "../marketing/skeleton"

interface Teams {
  name: string
  image: any,
  description: string
  gamblers: number
  bets: number
}

export default function TeamInfoSkeleton() {
  return (
    <div className="w-full bg-paletteFour text-white rounded-2xl p-2 m-2">
      <div className="flex items-center justify-center m-3">
        <div className="desktop:w-16 laptop:w-16 tablet:w-12 mobile:w-10 desktop:h-16 laptop:h-16 tablet:h-12 mobile:h-10 bg-gray-500 animate-pulse"></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex desktop:h-6 laptop:h-6 tablet:h-5 mobile:h-4 justify-center items-center w-1/3 bg-gray-500 animate-pulse" />
      </div>
      <div className="flex justify-center items-center m-3">
        <div className="flex desktop:h-12 laptop:h-12 tablet:h-10 mobile:h-8 justify-center items-center w-2/3 bg-gray-500 animate-pulse" />
      </div>
      <div className="flex justify-center items-center w-full m-3">
        <div
          className="
            grid grid-cols-2 items-center justify-center w-2/3 text-center m-3
            desktop:text-base laptop:text-base tablet:text-base mobile:text-sm
          "
        >
          <div>Gamblers:</div>
          <div className="desktop:h-6 laptop:h-6 tablet:h-5 mobile:h-4 bg-gray-500 animate-pulse w-full rounded-3xl m-1"></div>
          <div>Total Betted:</div>
          <div className="desktop:h-6 laptop:h-6 tablet:h-5 mobile:h-4 bg-gray-500 animate-pulse w-full rounded-3xl m-1"></div>
        </div>
        <button className="flex justify-center items-center p-2 w-1/3 min-h-[30px] rounded-xl text-center hover:opacity-70 transition-colors">
          <div className="desktop:w-12 laptop:w-12 tablet:w-10 mobile:w-8 desktop:h-12 laptop:h-12 tablet:h-10 mobile:h-8 bg-gray-500 animate-pulse" />
        </button>
      </div>
    </div>
  )
}