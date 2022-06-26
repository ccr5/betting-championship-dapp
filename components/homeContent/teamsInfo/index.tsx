import Image from "next/image"
import teamLogo from "../../../public/teamLogo.svg"
import right from "../../../public/right.svg"

export default function TeamInfo() {
  return (
    <div className="w-full min-h-[350px] bg-paletteFour text-white rounded-2xl p-2 m-2">
      <div className="flex items-center justify-center m-3">
        <Image
          src={teamLogo}
          alt=""
          width={70}
          height={70}
          className="absolute align-top w-[210px] h-[190px] m-4"
        />
      </div>
      <div className="text-center text-2xl">Khnum Amon</div>
      <div className="text-center m-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </div>
      <div className="flex justify-center items-center w-full m-3">
        <div className="grid grid-cols-2 items-center justify-center w-2/3 text-center m-3">
          <div>Gamblers:</div>
          <div>7,000 BETs</div>
          <div>Gamblers:</div>
          <div>$350,000,000.00</div>
        </div>
        <button className="flex justify-center items-center p-2 w-1/3 min-h-[30px] rounded-xl text-center hover:opacity-70 transition-colors">
          <Image
            src={right}
            alt=""
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  )
}