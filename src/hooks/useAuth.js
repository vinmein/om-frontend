import { useRouter } from "next/router";
import { BASE_URL, METHOD_TYPES, PATHS } from "../../config/constant";

export default function useAuth(){

  const router = useRouter()

  const login = (values, setSubmitting) => {
    const path = BASE_URL()+PATHS.USER.AUTH;
    fetch(path, {
      method: METHOD_TYPES.POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => {
      if (!res.ok) throw res
      return res.json()
    }).then(data => {
      setSubmitting(data)
    }).catch(async err => {
      console.log(err)
      const responseData = await err.json()
      if (responseData?.message?.includes("UserNotConfirmedException:")) {
        // Trigger confirmation code email
        await fetch('/api/confirm/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: values.username })
        })
        await router.push({
            pathname: "/confirm",
            query: {username: values.username},
          },
          "/confirm")
      }
    })
  }

  const resetPasswordRequest = (values, { setSubmitting }) => {
    fetch('/api/password/reset_code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => {
      if (!res.ok) throw res
      router.push({
        pathname: '/password/reset',
        query: { username: values.username }
      },
        "/password/reset")
    }).catch(err => {
      console.error(err)
    }).finally(() => {
      setSubmitting(false)
    })
  }

  const resetPassword = (values, { setSubmitting }) => {
    fetch('/api/password/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => {
      if (!res.ok) throw res
      router.push({
        pathname: '/login',
        query: { reset: true }
      },
        "/login")
    }).catch(err => {
      console.error(err)
    }).finally(() => {
      setSubmitting(false)
    })
  }

  const googleSignInSuccess = (googleResponse) => {
    fetch('/api/login/google', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id_token: googleResponse?.tokenId })
    }).then(res => {
      if (!res.ok) throw res
      return res.json()
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.error(err)
    })
  }

  const googleSignInFailure = (googleResponse) => {
    console.error(googleResponse)
  }

  return {
    login,
    resetPasswordRequest,
    resetPassword,
    googleSignInSuccess,
    googleSignInFailure
  }
}