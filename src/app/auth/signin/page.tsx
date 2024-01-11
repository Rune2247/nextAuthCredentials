import { FormEventHandler, useState } from "react"
import { signIn } from "next-auth/react"

export const SignIn = () => {
	const [userInfo, setUserInfo] = useState({ email: "", password: "" })

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
				/>
				<input
					onChange={({ target }) =>
						setUserInfo({ ...userInfo, password: target.value })
					}
					type="password"
					value={userInfo.password}
				/>
				<input type="submit" />
			</form>
		</div>
	)
}
export default SignIn
