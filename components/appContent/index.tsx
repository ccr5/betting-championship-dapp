import Game from "./game";
import Teams from "./teams/teams";
import Tokens from "./tokens";

export default function AppContent() {
  return (
    <div className="bg-paletteOne min-h-screen h-min">
      <div className="flex w-full">
        <div className="w-2/3 items-center mt-6 p-5">
          <Game />
        </div>
        <div className="w-1/3 items-center mt-6 p-5">
          <div className="w-full items-center">
            <Tokens />
          </div>
          <div className="w-full items-center mt-1">
            <Teams />
          </div>
        </div>

      </div>
    </div>
  )
}