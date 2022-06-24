import '../styles/globals.css'
import NavHeader from '../components/navBar'

function MyApp({ Component, pageProps }) {
  return <>
    <NavHeader/>
    <Component {...pageProps} />
  </>
}

export default MyApp
