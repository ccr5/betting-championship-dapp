import BetTokenICO from "./betTokenIco";
import Marketing from "./marketing";
import RoadMap from "./roadmap";
import TeamInfo from "./teamsInfo";

export default function HomeContent() {
  return (
    <div className="w-full min-h-screen bg-paletteOne">
      <div className="flex justify-center items-center p-2">
        <div className="flex w-4/5 m-2">
          <Marketing />
        </div>
      </div>
      <div className="flex justify-center items-center p-2">
        <div className="flex w-4/5">
          <div className="flex justify-center items-center w-1/2">
            <BetTokenICO />
          </div>
          <div className="flex justify-center items-center w-1/2">
            <TeamInfo />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-2">
        <div className="flex w-4/5">
          <RoadMap />
        </div>
      </div>
    </div>
  )
}