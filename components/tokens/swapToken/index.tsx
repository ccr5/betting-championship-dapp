import { NextComponentType } from "next";
import ethers from "../../../public/ethers.png"
import betting from "../../../public/betting.png"
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
      <div className="bg-whitePink w-[90%] text-white rounded-xl m-1 min-h-[50px] flex items-center justify-center text-center">
        {
          props.fromValue > 0 ? props.token == "ethers" ?
            (parseFloat(props.fromValue.toString()) / 2000).toString() :
            (parseFloat(props.fromValue.toString()) * 2000).toString() :
            "0"
        }
      </div>
    </div>
  )
}

export default SwapToken
