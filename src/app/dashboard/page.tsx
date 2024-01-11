"use client"
import AuthContext from "@/components/auth/AuthContext"
import { useSession } from "next-auth/react"

const Dashboard = () => {
	const session = useSession()
	console.log(session)

	return <p>fisk</p>
}

export default Dashboard
