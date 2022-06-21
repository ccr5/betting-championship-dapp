import Image from "next/image"
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useContext, useEffect } from "react";
import logo from "../../public/logo.png"
import { ConnectedAccount } from "../../context/account";
import { AppProvider } from "../../context/provider";
import Link from "next/link"

export default function NavbarGame() {
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
		<nav className="flex w-full text-white h-12 bg-paletteTwo items-center">
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
			<button
				className="absolute right-2 bg-paletteFour rounded h-8 min-w-min p-1 hover:bg-whitePink transition-colors"
				type="submit"
				onClick={async () => { await handleAccount() }}
			>
				{connectedAccount.account == null ?
					"Connect wallet" :
					`${connectedAccount.account.substring(0, 5)}...${connectedAccount.account.substring((connectedAccount.account.length - 4))}`}
			</button>
		</nav >
	)
}
