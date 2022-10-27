import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalContext } from '../libs/hooks/useGlobal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  )
}

export default MyApp
