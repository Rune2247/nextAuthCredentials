import { FormEventHandler, useEffect, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export const SignIn = () => {
	const [userInfo, setUserInfo] = useState({ email: "", password: "" })
	const router = useRouter()

	const handleSubmit: FormEventHandler<HTMLFormElement> = async () => {
		//validate
		const res = await signIn("credentials", { ...userInfo, callbackUrl: "/" })

		if (res && res.ok) {
			console.log("Okay!")
		} else {
			// Show error
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					value={userInfo.email}
					onChange={({ target }) =>
						setUserInfo({ ...userInfo, email: target.value })
					}
				></input>
				<input
					onChange={({ target }) =>
						setUserInfo({ ...userInfo, password: target.value })
					}
					type="password"
					value={userInfo.password}
				></input>
				<input type="submit"></input>
			</form>
		</div>
	)
}
export default SignIn
