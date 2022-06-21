import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.png"
import openApp from "../../public/open-app.png"

export default function Navbar() {
  return (
    <nav className="flex w-full text-white h-12 bg-paletteTwo items-center p-2">
      <Link href="/" passHref>
        <a className="flex items-center">
          <Image
            src={logo}
            alt=""
            width={30}
            height={30}
            className="d-inline-block align-text-top"
          />
          <div className="ml-2">
            Warriors
          </div>
        </a>
      </Link>
      <Link href="/app" passHref>
        <a className="absolute right-0 top-0 h-12">
          <Image
            src={openApp}
            alt=""
            className="d-inline-block align-text-top"
          />
        </a>
      </Link>
    </nav >
  )
}
