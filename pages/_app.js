import '../styles/globals.css'
import NavHeader from '../components/navBar'
import Container from '../components/container'

function MyApp({ Component, pageProps }) {
  return <>
    <NavHeader/>
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
}

export default MyApp
