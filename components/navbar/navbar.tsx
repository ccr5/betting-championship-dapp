import { NextComponentType } from "next";
import Image from "next/image"
import logo from "../../public/logo.png"
import styles from '.navbar.module.css'


const Navbar: NextComponentType = () => {
	return (
		<nav
			className="navbar fixed-top navbar-expand-lg navbar-dark"
			style={{ backgroundColor: "#6D6875" }}
		>
			< div className="container-fluid" >
				<a className="navbar-brand" href="#">
					<Image
						src={logo}
						alt=""
						width={30}
						height={24}
						className="d-inline-block align-text-top"
					/>
					etting Championship
				</a>
			</div >
		</nav >
	)
}

export default Navbar