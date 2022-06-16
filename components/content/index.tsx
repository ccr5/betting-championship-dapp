import Teams from "./teams/teams";
import Tokens from "./tokens";

export default function Content() {
  return (
    <div className="bg-bground min-h-screen">
      <div className="flex">
        <div className="w-1/2 items-center mt-12">
          <Teams />
        </div>
        <div className="w-1/2 items-center mt-12">
          <Tokens />
        </div>
      </div>
    </div>
  )
}