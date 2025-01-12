import Session from 'supertokens-auth-react/recipe/session'

export default async function getUserInfo() {
  try {
    const accessTokenPayload = await Session.getAccessTokenPayloadSecurely()
    const userId = await Session.getUserId()
    return { accessTokenPayload, userId }
  } catch (err) {
    console.error('Failed to fetch user info:', err)
    return null
  }
}
