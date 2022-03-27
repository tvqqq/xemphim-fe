import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>XemPhim - QeoQeo</title>
        <meta name="description" content="Một web xem phim khác cho bạn." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden bg-hero-dark">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
