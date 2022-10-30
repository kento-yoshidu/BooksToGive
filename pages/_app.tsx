import { SessionProvider } from "next-auth/react"
import AuthWrapper from "../src/components/AuthWrapper"
import type { AppProps } from 'next/app'
import "../src/styles/global.scss"

function MyApp({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
  )
}

export default MyApp
