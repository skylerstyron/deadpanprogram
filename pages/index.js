import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>deadpanprogram</title>
        <meta name="description" content="deadpanprogram" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💾</text></svg>"></link>
      </Head>
      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title} data-text="deadpanprogram">
        deadpanprogram
        </h1>
      </main>
    </div>
  )
}
