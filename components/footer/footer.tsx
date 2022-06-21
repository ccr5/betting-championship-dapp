import { NextComponentType } from "next"
import Image from "next/image"
import email from "../../public/email.png"
import github from "../../public/github.png"
import twitter from "../../public/twitter.png"

const Footer: NextComponentType = () => {
  return (
    <footer className="flex justify-center items-center text-white bg-paletteFour h-48 border-t-2 border-solid border-t-gray-500">
      <div className="block">
        <div className="flex w-full items-center justify-center mb-9">
          <div className="mr-2">
            <Image
              src={twitter}
              alt=""
              width={30}
              height={30}
              className="d-inline-block align-text-top"
            />
          </div>
          <div className="mr-2">
            <Image
              src={github}
              alt=""
              width={30}
              height={30}
              className="d-inline-block align-text-top"
            />
          </div>
          <div className="">
            <Image
              src={email}
              alt=""
              width={30}
              height={30}
              className="d-inline-block align-text-top"
            />
          </div>
        </div>
        Developed by CCR5
        <div className="flex w-full items-center justify-center text-sm">2022</div>
      </div>


    </footer>
  )
}

export default Footer
