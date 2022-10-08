import { useRouter } from 'next/router'
import { BASE_URL, METHOD_TYPES, PATHS } from "../../config/constant";

export default function useRegister() {

	const router = useRouter()

	const register = (values, setSubmitting) => {
		const path = BASE_URL()+PATHS.USER.CREATE;
		fetch(path, {
			method: METHOD_TYPES.POST,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		}).then(res => {
			if (!res.ok) throw res
			router.push({
				pathname: '/confirmation',
				query: { username: values?.username }
			},
				"/confirmation")
		}).catch(err => {
			console.error(err)
		}).finally(() => {
			setSubmitting(false)
		})
	}

	const confirm = (values, { setSubmitting }) => {
		fetch('/api/confirm', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		}).then(res => {
			if (!res.ok) throw res
			router.push({
				pathname: '/login',
				query: { confirmed: true }
			},
				"/login")
		}).catch(err => {
			console.error(err)
		}).finally(() => {
			setSubmitting(false)
		})
	}

	const googleRegisterSuccess = (googleResponse) => {
		fetch('/api/register/google', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id_token: googleResponse?.tokenId })
		}).then(res => {
			if (!res.ok) throw res
			router.push({
				pathname: '/login'
			})
		}).catch(err => {
			console.error(err)
		})
	}

	const googleRegisterFailure = (googleResponse) => {
		console.error(googleResponse)
	}

	return {
		register,
		confirm,
		googleRegisterSuccess,
		googleRegisterFailure
	}
}