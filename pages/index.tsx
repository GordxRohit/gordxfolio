import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Header from '../components/Header'
import Positions from '../components/Positions'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Rohit Kumar Mandal</title>
        <meta name="description" content="Rohit Kumar Mandal" />
        <link rel="icon" href="/images/profile.jpg" />
      </Head>
      <div className='max-w-screen-lg mx-auto pt-20 px-5'  >
        <Header />
        <Contacts />
        <About />
        <Skills />
        <Positions />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
