import { CognitoIdentityProviderClient, SignUpCommand } from '@aws-sdk/client-cognito-identity-provider'

const { COGNITO_REGION, COGNITO_APP_CLIENT_ID } = process.env

export default async function handler(req, res) {
	if (req.method !== 'POST') return res.status(405).send()
	console.log(req.body)

	const params = {
		ClientId: COGNITO_APP_CLIENT_ID,
		Password: req.body.password,
		Username: req.body.username || "dineshhv",
		UserAttributes: [
			{
				Name: 'email',
				Value: req.body.email
			},
			{
				Name: 'given_name',
				Value: "dinesh"
			},
			{
				Name: 'family_name',
				Value: "vadivel"
			}
		]
	}
	console.log(params)
	const cognitoClient = new CognitoIdentityProviderClient({
		region: COGNITO_REGION
	})
	const signUpCommand = new SignUpCommand(params)

	try {
		const response = await cognitoClient.send(signUpCommand)
		return res.status(response['$metadata'].httpStatusCode).send()
	} catch (err) {
		console.log(err)
		return res.status(err['$metadata'].httpStatusCode).json({ message: err.toString() })
	}
}