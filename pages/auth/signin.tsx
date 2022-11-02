import { useRouter } from "next/router"
import { useSession, getCsrfToken, signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { CtxOrReq } from "next-auth/client/_utils"

import Layout from "../../src/components/Layout"
import PageTitle from "../../src/components/PageTitle"

export default function SignIn({ csrfToken }: { csrfToken: string }) {
  return (
    <Layout>
      <PageTitle
        pageTitle="サインイン"
      />

      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

        <div className="mb-8">
          <label
            htmlFor="user"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            Username
          </label>
          <input
            id="name"
            name="user"
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <div className="mb-8">
          <label
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <button
          type="submit"
          onClick={() => signIn()}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          サインイン
        </button>
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
