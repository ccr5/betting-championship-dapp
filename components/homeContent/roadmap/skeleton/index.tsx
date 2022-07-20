import Image from "next/image"

export default function RoadMapSkeleton() {
  return (
    <div className="w-full text-white">
      <div className="flex w-full justify-center items-center text-center rounded-xl">
        <div className="w-full min-h-[100px] items-center bg-gray-500 animate-pulse" />
      </div>
    </div>
  )
}