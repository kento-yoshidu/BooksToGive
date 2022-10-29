import React from "react"
import Link from "next/link"

import { useRouter } from "next/router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <>
      <div className="w-5/6 md:w-1/2 mx-auto mt-10 min-h-[75vh]">
        <header className="mb-6 md:mb-8">
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
        </header>

        {children}
      </div>

      <footer className="mt-20 py-4 bg-gray-900 text-center">
        <Link href="https://github.com/kento-yoshidu/BooksToGive">
          <a className='cursor'>
            <FontAwesomeIcon
              className="text-4xl text-white"
              icon={faGithub}
            />
          </a>
        </Link>
      </footer>
    </>
  )
}

export default Layout
