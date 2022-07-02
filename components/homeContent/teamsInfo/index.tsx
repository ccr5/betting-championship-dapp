import Image from "next/image"
import teamLogo from "../../../public/teamLogo.svg"
import right from "../../../public/right.svg"

export default function TeamInfo() {
  return (
    <div className="w-full bg-paletteFour text-white rounded-2xl p-2 m-2">
      <div className="flex items-center justify-center m-3">
        <div className="desktop:w-16 laptop:w-16 tablet:w-12 mobile:w-10">
          <Image
            src={teamLogo}
            alt=""
          />
        </div>
      </div>
      <div className="text-center desktop:text-2xl laptop:text-2xl tablet:text-xl mobile:text-lg">
        Khnum Amon
      </div>
      <div
        className="
          text-center m-3
          desktop:text-base laptop:text-base tablet:text-base mobile:text-sm
        "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      </div>
      <div className="flex justify-center items-center w-full m-3">
        <div
          className="
            grid grid-cols-2 items-center justify-center w-2/3 text-center m-3
            desktop:text-base laptop:text-base tablet:text-base mobile:text-sm
          "
        >
          <div>Gamblers:</div>
          <div>7,000 BETs</div>
          <div>Gamblers:</div>
          <div>$350,000,000.00</div>
        </div>
        <button className="flex justify-center items-center p-2 w-1/3 min-h-[30px] rounded-xl text-center hover:opacity-70 transition-colors">
          <div className="desktop:w-12 laptop:w-12 tablet:w-10 mobile:w-8">
            <Image
              src={right}
              alt=""
              width={50}
              height={50}
            />
          </div>
        </button>
      </div>
    </div>
  )
}