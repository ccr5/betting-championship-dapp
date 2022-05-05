import { NextComponentType } from "next";
import Image from "next/image"
import logo from "../../public/logo.png"
import { ethers } from "ethers";

const Navbar: NextComponentType = () => {

	return (
		<nav className="flex w-full text-white min-h-[50px] bg-[#6D6875] items-center border-solid border-b-2">
			<div className="flex items-center p-1" >
				<a href="#">
					<Image
						src={logo}
						alt=""
						width={30}
						height={24}
						className="d-inline-block align-text-top"
					/>
					etting Championship
				</a>
				<button className="absolute right-2 bg-[#b95f71] rounded h-8 min-w-min p-1 hover:bg-[#d89da9] transition-colors" type="submit">
					Connect wallet
				</button>
			</div >
		</nav >
	)
}

export default Navbar