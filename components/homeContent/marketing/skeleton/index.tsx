import Image from "next/image"

export default function MarketingSkeleton() {
  return (
    <div className="w-full text-white">
      <div className="absolute align-top 
        desktop:w-[210px] desktop:h-[190px] desktop:ml-4 
        laptop:w-[180px] laptop:h-[160px] laptop:ml-2
        tablet:w-[160px] tablet:h-[140px] tablet:ml-1
        mobile:w-[80px] mobile:h-[60px] mobile:ml-1 bg-gray-500 rounded-full animate-pulse"/>
      <div className="desktop:h-[90px] laptop:h-[75px] tablet:h-[65px] mobile:h-[28px]"></div>
      <div className="flex w-full justify-end bg-paletteThree text-center rounded-t-xl p-1">
        <div className="
          grid grid-cols-4 items-center
          desktop:w-[calc(100%-210px)] laptop:w-[calc(100%-180px)] tablet:w-[calc(100%-160px)] mobile:w-[calc(100%-80px)]
          desktop:min-h-[100px] laptop:min-h-[85px] tablet:min-h-[75px] mobile:min-h-[42px]">
          <div className="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-xs">Blocks left:</div>
          <div className="rounded-3xl bg-gray-500 w-full h-1/2 animate-pulse"></div>
          <div className="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-xs">Estimated time:</div>
          <div className="rounded-3xl bg-gray-500 w-full h-1/2 animate-pulse"></div>
        </div>
      </div>
      <div className="
        flex w-full justify-end bg-paletteThree text-center p-1
        rounded-b-xl
        desktop:min-h-[100px] laptop:min-h-[100px] tablet:min-h-[95px] mobile:min-h-[42px]">
        <div className="w-full grid grid-cols-4 items-center">
          <div className="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-xs">Gamblers:</div>
          <div className="rounded-3xl bg-gray-500 w-full h-1/2 animate-pulse m-1"></div>
          <div className="desktop:text-2xl laptop:text-xl tablet:text-lg mobile:text-xs">Reward:</div>
          <div className="rounded-3xl bg-gray-500 w-full h-1/2 animate-pulse m-1"></div>
        </div>
      </div>
    </div>
  )
}