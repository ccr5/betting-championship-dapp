import { useState, useEffect } from "react"

export default function ProgressBetICO() {
  const [tokensOwner, setTokensOwner] = useState<number | null>(null)
  const [subsCount, setSubsCount] = useState<number | null>(null)
  const [goal, setGoal] = useState<number>(1000000)
  const [pendent, setPendent] = useState<String | null>(null)


  useEffect(() => {
    if (!tokensOwner) loadTokensOwner()
  }, [])

  useEffect(() => {
    calculateSubsCount()
  }, [tokensOwner])

  useEffect(() => {
    calculatePendent()
  }, [subsCount])

  function loadTokensOwner() {
    fetch("http://localhost:3000/api/tokens")
      .then(async (value) => {
        setTokensOwner(await value.json())
      })
  }

  function calculateSubsCount() {
    if (goal && tokensOwner) {
      setSubsCount(goal - tokensOwner)
    }
  }

  function calculatePendent() {
    if (subsCount) {
      if (subsCount < 1000) {
        setPendent(subsCount.toString())
      } else if (subsCount == 1000000) {
        setPendent("1MM")
      } else {
        setPendent(`${subsCount / 1000}M`)
      }
    }
  }

  return (
    <div
      className="w-4/5 bg-gray-600 rounded-full p-1 h-8"
    >
      <span
        className="bg-pink-600 overflow-hidden p-1 text-white text-center rounded-full h-full mobile:text-xs"
        style={{ width: `${subsCount && (subsCount / goal) * 100}%` }}
      >
        {`${subsCount} BET`}
      </span>
      <div
        className="
          text-right m-2 mobile:text-xs
        "
      >
        {pendent} of 1MM
      </div>
    </div>
  )
}