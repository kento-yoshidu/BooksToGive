import React from "react"
import Link from "next/link"

import { useRouter } from "next/router"
import { useSession, signOut } from "next-auth/react"

import Technology from "./Technology"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { data } = useSession()

  return (
    <>
      <div className="w-5/6 md:w-1/2 mx-auto mt-10">
        <header className="mb-4 relative">
          {router.pathname !== "/"
            ? (
              <h1 className="text-4xl">
                <Link href="/" >
                  <a className="underline hover:text-gray-600">
                    BooksToGive
                  </a>
                </Link>
              </h1>
            )
            : (
              <h1 className="text-4xl">BooksToGive</h1>
            )}

            {data && (
              <button
                className="md:absolute top-1/2 left-60 -translate-y-1/2 bg-white hover:bg-gray-100 text-sm text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => signOut()}
              >
                サインアウト
              </button>
            )}
        </header>

        <p className="mb-4">更新日 : <time dateTime="2023-09-17">2023年9月17日</time></p>

        {children}

        <Technology />
      </div>

      <footer className="mt-20 py-5 bg-gray-900 text-center">
        <Link href="https://github.com/kento-yoshidu/BooksToGive">
          <a className='cursor'>
            <FontAwesomeIcon
              className="text-5xl text-white"
              icon={faGithub}
            />
          </a>
        </Link>
      </footer>
    </>
  )
}

export default Layout
