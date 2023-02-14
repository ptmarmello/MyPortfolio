
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Whoiam from '../components/Whoiam'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hey, I'm Pedro!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nav}>
        <Navbar />
      </div>

      <main className={styles.main}>
        main
      </main>

      <Whoiam />      

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}