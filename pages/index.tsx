import Head from 'next/head'
import { providers } from "ethers";
import type { NextPage } from 'next'
import { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Content from '../components/content'
import { AppProvider, IAppProvider } from '../context/provider';
import { ConnectedAccount, IConnectedAccount } from '../context/account';

const Home: NextPage = () => {
  const [appProviderContext, setAppProviderContext] = useState<IAppProvider>({
    provider: null,
    handleProvider: handleProvider
  })

  const [connectedContext, setConnectedContext] = useState<IConnectedAccount>({
    account: null,
    handleAccount: handleAccount
  })

  function handleProvider(value: providers.Web3Provider | null) {
    setAppProviderContext({
      provider: value,
      handleProvider: handleProvider
    })
  }

  function handleAccount(value: string | null) {
    setConnectedContext({
      account: value,
      handleAccount: handleAccount
    })
  }

  return (
    <>
      <Head>
        <title>Warriors</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppProvider.Provider value={appProviderContext}>
        <ConnectedAccount.Provider value={connectedContext}>
          <Navbar />
          <Content />
          <Footer />
        </ConnectedAccount.Provider>
      </AppProvider.Provider>
    </>
  )
}

export default Home
