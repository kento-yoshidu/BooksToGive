import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        user: {
          label: "User Name",
          type: "text"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      async authorize(credentails, req) {
        if (req?.body?.user !== process.env.NEXT_AUTH_USER) {
          return null
        }

        if (req?.body?.password !== process.env.NEXT_AUTH_PASS) {
          return null
        }

        const user = { id: "1", name: req?.body?.user, email: "dummy"}

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
})
