'use_server'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import authConfig from './auth.config'

const prisma = new PrismaClient()

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user,
      }
    },
  },
})
