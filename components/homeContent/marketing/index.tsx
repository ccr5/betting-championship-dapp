import Image from "next/image"
import trophy from "../../../public/trophy.svg"

export default function Marketing() {
  return (
    <div className="w-full text-white">
      <div className="absolute align-top w-[210px] h-[190px] m-4">
        <Image
          src={trophy}
          alt=""
        />
      </div>
      <div className="h-[90px]"></div>
      <div className="flex w-full justify-end bg-paletteThree text-center rounded-t-xl">
        <div className="w-[calc(100%-210px)] grid grid-cols-4 min-h-[100px] items-center">
          <div className="text-xl">Blocks left:</div>
          <div className="text-3xl">1500</div>
          <div className="text-xl">Estimated time:</div>
          <div className="text-3xl">60:55:46h</div>
        </div>
      </div>
      <div className="flex w-full justify-end bg-paletteThree text-center rounded-b-xl">
        <div className="w-full grid grid-cols-4 min-h-[100px] items-center">
          <div className="text-xl">Gamblers:</div>
          <div className="text-3xl">15,000</div>
          <div className="text-xl">Reward:</div>
          <div className="text-3xl">$1,000,000.00</div>
        </div>
      </div>
    </div>
  )
}