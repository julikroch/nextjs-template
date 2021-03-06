import '../styles/globals.css'
import App from 'next/app';
import type { AppProps } from 'next/app'
import firebase, { FirebaseContext } from '../firebase'
import useAuth from '../hooks/useAuth';

function MyApp({ Component, pageProps }: AppProps) {

  const user = useAuth()

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        user
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>

  )
}

export default MyApp
