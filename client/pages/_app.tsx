import '../styles/globals.css'
import '../styles/gallery.css';
import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
