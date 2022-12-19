import '../styles/globals.css'
import { Fragment } from 'react'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
