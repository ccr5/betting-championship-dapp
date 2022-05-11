import Image from "next/image"
import swap from "../../../public/swap.png"

interface SwapButtonProps {
  toggle: () => void
}

const SwapButton = (props: SwapButtonProps) => {
  return (
    <div className="flex items-center justify-center mt-8">
      <button onClick={() => props.toggle()}>
        <Image
          src={swap}
          alt=""
          height={20}
          width={20}
        />
      </button>
    </div>
  )
}

export default SwapButton
