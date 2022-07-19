import Image from "next/image"
import roadmap from "../../../public/ROADMAP.png"

export default function RoadMap() {
  return (
    <div className="w-full text-white">
      <div className="flex w-full justify-center items-center text-center rounded-xl">
        <div className="w-full min-h-[100px] items-center">
          <Image
            src={roadmap}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}