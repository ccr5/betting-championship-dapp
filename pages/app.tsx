import Head from 'next/head'
import type { NextPage } from 'next'
import NavbarGame from '../components/navbar-game'
import Footer from '../components/footer/footer'
import AppContent from '../components/appContent'

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>Warriors - App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavbarGame />
      <AppContent />
      <Footer />
    </>
  )
}

export default App
