import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import AuthWrapper from "../src/components/AuthWrapper"
import type { AppProps } from 'next/app'
import "../src/styles/global.css"

function MyApp({ Component, pageProps: { session, ...pageProps} }: AppProps<{session: Session}>) {
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
  )
}

export default MyApp
