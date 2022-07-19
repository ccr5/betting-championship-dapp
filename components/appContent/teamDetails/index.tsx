import Image from "next/image"
import teamLogo from "../../../public/teamLogo.svg"

export default function TeamDetails() {
  return (
    <div className="border-2 border-gray-400 text-white w-full">
      <div className="flex items-center justify-center gap-4 h-2/6 m-3">
        <Image
          src={teamLogo}
          alt=""
          width={50}
          height={50}
        />
        <div className="text-xl">Khnum Amon</div>
      </div>
      <div className="flex justify-center items-center w-full m-3">
        <div className="grid grid-cols-2 w-full m-3">
          <div>Position:</div>
          <div>7,000 BETs</div>
          <div>Kills:</div>
          <div>100</div>
        </div>
      </div>
    </div>
  )
}