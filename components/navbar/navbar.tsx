import { NextComponentType } from "next";
import Image from "next/image"
import logo from "../../public/logo.png"
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useEffect } from "react";

interface NavbarProps {
	account: string | null
	onChangeAccount(text: string | null): any
	provider: ethers.providers.Web3Provider | null,
	onSetProvider(provider: ethers.providers.Web3Provider): any
}

const Navbar = (props: NavbarProps) => {

	async function getProvider() {
		const web3Modal = new Web3Modal()
		const instance = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(instance);
		props.onSetProvider(provider)
	}

	async function getAccount() {

		if (props.provider == null) {
			await getProvider()
		} else {
			await props.provider.send("eth_requestAccounts", []);
			const signer = props.provider.getSigner();
			return await signer.getAddress()
		}

	}

	async function handleAccount() {

		if (props.provider == null) {
			await getProvider()
		} else {
			const acc = await getAccount()
			if (acc != null) {
				props.onChangeAccount(acc)
			}
		}
	}

	useEffect(() => {
		window.ethereum.on('chainChanged', async () => {
			await getProvider()
			await handleAccount()
		})

		window.ethereum.on('accountsChanged', async () => {
			await getProvider()
			await handleAccount()
		})
	})

	return (
		<nav className="flex w-full text-white min-h-[50px] bg-black items-center">
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
				<button
					className="absolute right-2 bg-logo rounded h-8 min-w-min p-1 hover:bg-whitePink transition-colors"
					type="submit"
					onClick={async () => { await handleAccount() }}
				>
					{props.account == null ? "Connect wallet" : `${props.account.substring(0, 5)}...${props.account.substring((props.account.length - 4))}`}
				</button>
			</div >
		</nav >
	)
}

export default Navbar