import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'

export default function about() {
    return (
        <div className={styles.container}>
      <Head>
        <title>about</title>
        <meta name="description" content="deadpanprogram" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💾</text></svg>"></link>
      </Head>
      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title} data-text="deadpanprogram">
        about
        </h1>
      </main>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    )
}