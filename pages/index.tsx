import Head from 'next/head'
import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Footer from '../components/footer/footer'
import HomeContent from '../components/homeContent'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Warriors - App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <HomeContent />
      <Footer />
    </>
  )
}

export default Home
