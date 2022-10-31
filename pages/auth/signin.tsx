import { useRouter } from "next/router"
import { useSession, getCsrfToken, signIn } from "next-auth/react"
import { CtxOrReq } from "next-auth/client/_utils"

import Layout from "../../src/components/Layout"
import PageTitle from "../../src/components/PageTitle"

export default function SignIn({ csrfToken }: { csrfToken: string }) {
  const router = useRouter()

  const { data } = useSession()

  if (data) {
    router.push("/")
  }

  return (
    <Layout>
      <PageTitle
        pageTitle="サインイン"
      />

      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Username
          <input name="user" type="text" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit" onClick={() => signIn("credentials",
          { redirect: true })}>Sign in</button>
      </form>
    </Layout>
  )
}

export async function getServerSideProps(context: CtxOrReq) {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}
