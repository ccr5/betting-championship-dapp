import { useState, useEffect } from "react"

interface ProgressBetICOProps {
  tokensOwner: number
  subsCount: number
  goal: number
  pendent: string
}

export default function ProgressBetICO(props: ProgressBetICOProps) {
  return (
    <div
      className="w-4/5 bg-gray-600 rounded-full p-1 h-8"
    >
      <span
        className="bg-pink-600 overflow-hidden p-1 text-white text-center rounded-full h-full mobile:text-xs"
        style={{ width: `${props.subsCount && (props.subsCount / props.goal) * 100}%` }}
      >
        {`${props.subsCount} BET`}
      </span>
      <div
        className="
          text-right m-2 mobile:text-xs
        "
      >
        {props.pendent} of 1MM
      </div>
    </div>
  )
}