"use client"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

export default function Home() {
	const { data: session, status } = useSession()
	console.log(session)

	return (
		<div>
			<p>Home page</p>
			<button onClick={() => signOut()}>Sign out</button>
		</div>
	)
}
