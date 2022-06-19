import styles from "./Team.module.css";
import Image from "next/image";
import downArrow from "../../../../public/down-arrow.png"
import { useState } from "react";
import { Team } from "../teams"

export default function TeamDetails(props: Team) {
  const [isOpen, setIsOpen] = useState(false)

  return props &&
    <>
      <button
        className="inline-flex items-center h-20 w-full p-5 mt-2 border-b-2 border-solid border-[#E5989B] bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="inline-flex items-center h-full w-full p-5 mt-2">
          <div className="flex items-center justify-center h-full w-1/5">
            {`${props.id}`}
          </div>
          <div className="flex items-center justify-center h-full w-1/5">
            {props.name}
          </div>
          <div className="flex items-center justify-center h-full w-1/5">
            {`${props.bets}`}
          </div>
          <div className="flex items-center justify-center h-full w-1/5">
            {`${props.tokens}`}
          </div>
          <div className="flex items-center justify-center h-full w-1/5">
            <Image
              src={downArrow}
              alt=""
              width={24}
              height={24}
              className="d-inline-block align-text-top"
            />
          </div>
        </div>
      </button>
      {isOpen &&
        <div className="inline-flex items-center h-20 w-full p-5 bg-[#6D6875]">
          <div className="flex items-center justify-center h-12 w-full text-white m-2 p-2">
            <input
              className="bg-[#a39dac] opacity-80 rounded-lg m-1 min-h-[50px] w-2/3 text-center"
              style={{ width: "90%" }}
              type="text"
              placeholder="0.0"
              aria-label="0.0"
            />
            <button className="bg-[#b95f71] rounded-lg m-1 min-h-[50px] min-w-[80px] text-center">Bet</button>
          </div>
        </div>
      }
    </>
}
