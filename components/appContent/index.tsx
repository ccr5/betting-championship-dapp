import Description from "./description";
import Game from "./game";
import TeamDetails from "./teamDetails";
import Teams from "./teams/teams";
import Tokens from "./tokens";

export default function AppContent() {
  return (
    <div className="bg-paletteOne min-h-screen">
      <div
        className="
          w-full h-2/3 
          display:flex laptop:flex tablet:block mobile:block
          display:justify-center laptop:justify-center
        "
      >
        <div
          className="
            items-center p-5
            display:w-2/3 laptop:w-2/3 tablet:w-full mobile:w-full
          "
        >
          <Game />
        </div>
        <div
          className="
            items-center m-2 p-5
            display:block laptop:block tablet:flex mobile:block
            display:w-1/3 laptop:w-1/3 tablet:w-full mobile:w-full
          "
        >
          <div className="w-full items-center p-1">
            <Tokens />
          </div>
          <div className="w-full items-center p-1">
            <Teams />
          </div>
        </div>
      </div>
      <div
        className="
          w-full h-1/3 p-2
          display:grid laptop:grid tablet:grid mobile:block
          display:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-3
          display:gap-2 laptop:gap-2 tablet:gap-2
        "
      >
        <Description />
        <TeamDetails />
        <TeamDetails />
      </div>
    </div>
  )
}