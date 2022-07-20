import Link from "next/link"

export default function BetTokenICOSkeleton() {
  return (
    <div className="w-full bg-paletteTwo text-white rounded-2xl p-2 m-2">
      <div className="flex items-center justify-center gap-4 m-3">
        <div className="desktop:w-16 laptop:w-16 tablet:w-12 mobile:w-10 desktop:h-16 laptop:h-16 tablet:h-12 mobile:h-10 bg-gray-500 animate-pulse" />
        <div className="rounded-2xl bg-gray-500 animate-pulse" />
      </div>
      <div className="flex justify-center items-center">
        <div className="desktop:h-12 laptop:h-12 tablet:h-10 mobile:h-8 w-2/3 bg-gray-500 animate-pulse" />
      </div>
      <div
        className="
          grid grid-cols-2 items-center justify-center text-center m-3
          desktop:text-lg laptop:text-lg tablet:text-lg mobile:text-base
        "
      >
        <div>ETH / BET:</div>
        <div className="desktop:h-6 laptop:h-6 tablet:h-5 mobile:h-4 bg-gray-500 animate-pulse w-full rounded-3xl m-1" />
      </div>
      <div className="flex justify-center items-center w-full m-3">
        <div className="w-4/5 bg-gray-500 rounded-full p-1 h-8 animate-pulse" />
      </div>
      <div className="flex justify-center items-center w-full m-3">
        <button className="bg-gray-500 rounded-xl animate-pulse w-14 h-8" />
      </div>
    </div>
  )
}