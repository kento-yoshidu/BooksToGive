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
        if (req?.body?.user !== process.env.NEXT_PUBLIC_AUTH_USER) {
          return Promise.resolve(null)
        }

        if (req?.body?.password !== process.env.NEXT_PUBLIC_AUTH_PASS) {
          return Promise.resolve(null)
        }

        return { id: "dummy", name: req?.body?.user, email: "dummy" }
      }
    })
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages: {
    signIn: "/auth/signin"
  }
})
