import '../styles/reset.scss'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Home from './index'

export default function App({ Component, pageProps }: AppProps) {
  return <Home />
}


// <Component {...pageProps} />
