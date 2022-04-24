import { NextComponentType } from "next";
import Image from "next/image"
import logo from "../../public/logo.png"
import styles from '.Navbar.module.css'


const Navbar: NextComponentType = () => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark"
			style={{
				backgroundColor: "#6D6875",
				borderBottom: "1px solid",
				alignItems: "center"
			}}
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
				<form className="d-flex">
					<button className="btn btn-outline-dark" type="submit">Connect wallet</button>
				</form>
			</div >
		</nav >
	)
}

export default Navbar