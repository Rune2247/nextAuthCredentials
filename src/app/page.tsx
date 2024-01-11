"use client"
import { redirect } from "next/navigation"
import styles from "./page.module.css"
import { signIn, useSession } from "next-auth/react"

export default function Home() {
	return <p>Home page</p>
}
