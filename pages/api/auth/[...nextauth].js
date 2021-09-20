import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      authorize: async (credentials, _req) => {
        const res = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        })
        const user = await res.json()
        if (res.ok && user) return user
        return null
      }
    })
  ],
  pages: {
    signIn: '/admin/login'
  }
})