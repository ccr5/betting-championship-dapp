import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Teams from '../components/teams/teams'
import Tokens from '../components/tokens'
import { useState } from 'react'
import { providers } from "ethers";

const Home: NextPage = () => {

  const [account, setAccount] = useState<string | null>(null)
  const [provider, setProvider] = useState<providers.Web3Provider | null>(null)

  return (
    <>
      <Head>
        <title>Betting Championship</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar account={account} onChangeAccount={setAccount} provider={provider} onSetProvider={setProvider} />
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
      <Footer />
    </>
  )
}

export default Home
