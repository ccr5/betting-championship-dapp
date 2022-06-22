import ethers from "../../../../public/ethers.png"
import betting from "../../../../public/betting.png"
import Image from "next/image"
import { ChangeEvent } from "react";

interface SelectTokenProps {
  token: "ethers" | "betting"
  onSetValue: (value: Number) => void
}

const SelectToken = (props: SelectTokenProps) => {

  function handleValue(e: ChangeEvent<HTMLInputElement>) {
    props.onSetValue(parseFloat(e.target.value))
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex w-1/4 items-center justify-center">
        <div className="m-1">
          <Image
            src={props.token == "ethers" ? ethers : betting}
            alt=""
            height={30}
            width={30}
          />
        </div>
        <div className="m-1">
          {props.token}
        </div>
      </div>
      <input
        className="bg-gray-200 h-full min-h-[30px] w-3/4 text-gray-600 rounded-xl m-1 text-center"
        type="number"
        placeholder="0.0"
        aria-label="0.0"
        onChange={(e) => { handleValue(e) }}
      />
    </div>
  )
}

export default SelectToken
