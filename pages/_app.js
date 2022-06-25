import '../styles/globals.css'
import NavHeader from '../components/navBar'
import Container from '../components/container'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title> 개발자 이성열</title>
    </Head>
    <NavHeader />
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
}

export default MyApp
