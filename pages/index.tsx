import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Teams from '../components/teams/teams'
import Tokens from '../components/tokens'
import { useState } from 'react'

const Home: NextPage = () => {

  const [account, setAccount] = useState("")

  return (
    <>
      <Head>
        <title>Betting Championship</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="mt-12 mb-12">
        <div className="flex">
          <div className="w-1/2">
            <Teams />
          </div>
          <div className="w-1/2">
            <Tokens />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
