import { NextComponentType } from "next";
import ethers from "../../../public/ethers.png"
import betting from "../../../public/betting.png"
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
    <div className="justify-center items-center ml-5">
      <div className="flex">
        <div className="m-1">
          <Image
            src={props.token == "ethers" ? ethers : betting}
            alt=""
            height={20}
            width={20}
          />
        </div>
        <div className="m-1">
          {props.token}
        </div>
      </div>
      <input
        className="bg-whitePink w-[90%] text-white rounded-xl m-1 min-h-[50px] text-center"
        type="number"
        placeholder="0.0"
        aria-label="0.0"
        onChange={(e) => { handleValue(e) }}
      />
    </div>
  )
}

export default SelectToken
