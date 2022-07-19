export default function ProgressBetICO() {
  const subsCount = 500000
  const goal = 1000000
  const subsPercent = (subsCount / goal)


  return (
    <div
      className="w-4/5 bg-gray-600 rounded-full p-1 h-8"
    >
      <span
        className="bg-pink-600 overflow-hidden p-1 text-white text-center rounded-full h-full mobile:text-xs"
        style={{ width: `${subsPercent * 100}%` }}
      >
        {`${subsCount} BET`}
      </span>
      <p
        className="
          text-right m-2 mobile:text-xs
        "
      >
        500M of 1MM
      </p>
    </div>
  )
}