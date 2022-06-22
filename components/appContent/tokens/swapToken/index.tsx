import { NextComponentType } from "next";
import ethers from "../../../../public/ethers.png"
import betting from "../../../../public/betting.png"
import Image from "next/image"
import { ChangeEvent, useEffect } from "react";

interface SwapTokenProps {
  token: "ethers" | "betting"
  fromValue: Number
  onSetValue: (value: Number) => void
}

const SwapToken = (props: SwapTokenProps) => {

  useEffect(() => {
    if (props.fromValue > 0) {
      if (props.token == "ethers") {
        props.onSetValue(parseFloat(props.fromValue.toString()) / 2000)
      } else {
        props.onSetValue(parseFloat(props.fromValue.toString()) * 2000)
      }
    } else {
      props.onSetValue(0)
    }
  }, [props.fromValue])

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
      <div className="bg-gray-200 h-full min-h-[30px] w-3/4 text-gray-600 text-opacity-60 rounded-xl m-1 text-center">
        {
          props.fromValue > 0 ? props.token == "ethers" ?
            (parseFloat(props.fromValue.toString()) / 2000).toString() :
            (parseFloat(props.fromValue.toString()) * 2000).toString() :
            "0.0"
        }
      </div>
    </div>
  )
}

export default SwapToken
