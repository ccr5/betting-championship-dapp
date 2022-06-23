import Description from "./description";
import Game from "./game";
import TeamDetails from "./teamDetails";
import Teams from "./teams/teams";
import Tokens from "./tokens";

export default function AppContent() {
  return (
    <div className="bg-paletteOne min-h-screen h-min">
      <div className="flex w-full h-2/3">
        <div className="w-2/3 items-center mt-6 p-5">
          <Game />
        </div>
        <div className="w-1/3 items-center mt-6 p-5">
          <div className="w-full items-center">
            <Tokens />
          </div>
          <div className="w-full items-center mt-4">
            <Teams />
          </div>
        </div>
      </div>
      <div className="flex w-full h-1/3">
        <div className="w-1/3"> <Description /> </div>
        <div className="w-1/3"> <TeamDetails /> </div>
        <div className="w-1/3"> <TeamDetails /> </div>
      </div>
    </div>
  )
}