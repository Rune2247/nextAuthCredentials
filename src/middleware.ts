export { default } from "next-auth/middleware"

export const config = { matcher: ["/", "/dashboard"] }

// admin stuff

/* export default withAuth(function middleware() {}, {
	callbacks: {
		authorized({ token }) {
			return token?.role === "admin"
		}
	}
}) */
	