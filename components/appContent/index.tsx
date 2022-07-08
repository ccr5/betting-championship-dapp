import Teams from "./teams/teams";
import Tokens from "./tokens";

export default function AppContent() {
  return (
    <div className="bg-paletteOne min-h-screen flex justify-center items-center">
      <div className="w-full h-2/3 p-10 grid gap-10 desktop:grid-cols-2 laptop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1">
        <div className="w-full items-center p-1">
          <Tokens />
        </div>
        <div className="w-full items-center p-1">
          <Teams />
        </div>
      </div>
    </div>
  )
}