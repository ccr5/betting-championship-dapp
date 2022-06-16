import Image from "next/image"
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useContext, useEffect } from "react";
import logo from "../../public/logo.png"
import { ConnectedAccount } from "../../context/account";
import { AppProvider } from "../../context/provider";

export default function Navbar() {
	const connectedAccount = useContext(ConnectedAccount)
	const appProvider = useContext(AppProvider)

	async function getProvider() {
		const web3Modal = new Web3Modal()
		const instance = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(instance);
		appProvider.handleProvider(provider)
	}

	async function getAccount() {

		if (appProvider.provider == null) {
			await getProvider()
		} else {
			await appProvider.provider.send("eth_requestAccounts", []);
			const signer = appProvider.provider.getSigner();
			return await signer.getAddress()
		}

	}

	async function handleAccount() {

		if (appProvider.provider == null) {
			await getProvider()
		} else {
			const acc = await getAccount()
			if (acc != null) {
				connectedAccount.handleAccount(acc)
			}
		}
	}

	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.on('chainChanged', async () => {
				await getProvider()
				await handleAccount()
			})

			window.ethereum.on('accountsChanged', async () => {
				await getProvider()
				await handleAccount()
			})
		}
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
					{connectedAccount.account == null ?
						"Connect wallet" :
						`${connectedAccount.account.substring(0, 5)}...${connectedAccount.account.substring((connectedAccount.account.length - 4))}`}
				</button>
			</div >
		</nav >
	)
}
