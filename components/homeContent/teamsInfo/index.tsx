import Image from "next/image"
import teamOneLogo from "../../../public/teamLogo.svg"
import teamTwoLogo from "../../../public/teamLogoTwo.png"
import right from "../../../public/right.svg"
import { useState, useEffect } from "react"
import { Gamblers } from "../../../pages/api/gamblers"
import TeamInfoSkeleton from "./skeleton"

interface Teams {
  name: string
  image: any,
  description: string
  gamblers: number
  bets: number
}

export default function TeamInfo() {
  const [teamId, setTeamId] = useState<number>(0)
  const [gamblers, setGamblers] = useState<number | null>(null)
  const [teams, setTeams] = useState<Teams[] | null>(null)

  useEffect(() => {
    if (!gamblers) loadGamblers()
  }, [])

  function loadGamblers() {
    fetch(process.env.WARRIORS_API + "/gamblers")
      .then(async (value) => {
        const data: Gamblers[] = await value.json()
        const newTeams = [
          {
            name: "Khnum Amon",
            image: teamOneLogo,
            description: "A- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            gamblers: 0,
            bets: 0
          },
          {
            name: "Yamanu",
            image: teamTwoLogo,
            description: "B- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            gamblers: 0,
            bets: 0
          }
        ]

        data.map((value: Gamblers, index: number) => {
          newTeams[index].name = value.name
          newTeams[index].bets = value.tokens
          newTeams[index].gamblers = value.bets
        })
        setTeams(newTeams)
      })
  }

  function toggleTeamId() {
    if (teamId == 0) {
      setTeamId(1)
    } else {
      setTeamId(0)
    }
  }

  return teams ?
    <div className="w-full bg-paletteFour text-white rounded-2xl p-2 m-2">
      <div className="flex items-center justify-center m-3">
        <div className="desktop:w-16 laptop:w-16 tablet:w-12 mobile:w-10">
          {
            teams && <Image
              src={teams[teamId].image ? teams[teamId].image : ""}
              alt=""
            />
          }
        </div>
      </div>
      <div className="text-center desktop:text-2xl laptop:text-2xl tablet:text-xl mobile:text-lg">
        {teams && teams[teamId].name}
      </div>
      <div
        className="
          text-center m-3
          desktop:text-base laptop:text-base tablet:text-base mobile:text-sm
        "
      >
        {teams && teams[teamId].description}
      </div>
      <div className="flex justify-center items-center w-full m-3">
        <div
          className="
            grid grid-cols-2 items-center justify-center w-2/3 text-center m-3
            desktop:text-base laptop:text-base tablet:text-base mobile:text-sm
          "
        >
          <div>Gamblers:</div>
          <div>{teams && teams[teamId].gamblers}</div>
          <div>Total Betted:</div>
          <div>{teams && teams[teamId].bets} BETs</div>
        </div>
        <button
          className="flex justify-center items-center p-2 w-1/3 min-h-[30px] rounded-xl text-center hover:opacity-70 transition-colors"
          onClick={() => toggleTeamId()}
        >
          <div className="desktop:w-12 laptop:w-12 tablet:w-10 mobile:w-8">
            <Image
              src={right}
              alt=""
              width={50}
              height={50}
            />
          </div>
        </button>
      </div>
    </div> :
    <TeamInfoSkeleton />
}