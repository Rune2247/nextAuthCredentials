import NextAuth from "next-auth/next"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"

// keycloak: https://next-auth.js.org/providers/keycloak

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
				email: { label: "Email", type: "text" },
				password: { label: "password", type: "password" }
			},
			authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string
					password: string
				}

				// Fetch user from external api
				return { id: "1234", email: "r@r.dk", role: "user" }
			}
		})
	],
	callbacks: {
		jwt({ token }) {
			return token
		}
	}
	/* 	callbacks: {
		jwt({ token }) {
			return token
		},
		session({ session, token }) {
			session.user.role = token.role
			return session
		}
	} */
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
