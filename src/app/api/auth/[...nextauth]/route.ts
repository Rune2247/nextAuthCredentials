import NextAuth from "next-auth/next"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { pages } from "next/dist/build/templates/app-page"

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
		maxAge: 1 * 6 * 6 // one hour
	},
	/* 	pages: {
		signIn: "/auth/signin"
	}, */
	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "password", type: "password" }
			},
			authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string
					password: string
				}

				// Fetch user from external api
				return { id: "1234", name: "Rune", email: "r@r.dk", role: "user" }
			}
		})
	],
	callbacks: {
		jwt(params) {
			if (params.user?.role) {
				params.user.role = params.user.role
			}
			return params.token
		}
	}
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
