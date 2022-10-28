import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/nextjs-icon.svg" type="image/x-icon" />
        <title>Syafiq Portfolio</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
