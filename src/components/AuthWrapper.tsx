import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import ProtectedRoute from './ProtectedRoute'
import Loading from './Loading'

const authRoutes = ["/register"]

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') return <Loading />

  return (
    <>
      {authRoutes.includes(router.pathname) ? (
        <ProtectedRoute>{children}</ProtectedRoute>
      ) : (
        children
      )}
    </>
  )
}

export default AuthWrapper
