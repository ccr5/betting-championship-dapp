import Head from 'next/head'
import type { NextPage } from 'next'
import NavbarGame from '../components/navbar-game'
import Footer from '../components/footer/footer'
import AppContent from '../components/appContent'
import { AppProvider, IAppProvider } from '../context/provider'
import { providers } from 'ethers'
import { useState } from 'react'
import { IConnectedAccount, ConnectedAccount } from '../context/account'

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
        <title>Warriors - App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppProvider.Provider value={appProviderContext}>
        <ConnectedAccount.Provider value={connectedContext}>
          <NavbarGame />
          <AppContent />
          <Footer />
        </ConnectedAccount.Provider>
      </AppProvider.Provider>

    </>
  )
}

export default Home
