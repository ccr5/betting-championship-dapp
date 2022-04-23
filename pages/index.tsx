import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

import Image from 'next/image'
import styles from '../styles/Home.module.css'

// const sendBet = (teamId: Number) => {
//   this.props.bet(teamId)
// }

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Betting Championship</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {/* <div id="copainntent">
        <TeamTable teams={this.props.teams} />
        <Form bet={this.sendBet} teams={this.props.teams} />
        <p className="text-center"> Your account: {this.props.account}</p>
      </div> */}
      <Footer />
    </>
  )
}

export default Home
