import { clientId, clientSecret } from "../db";

async function getApiAuthorization() {
  let url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
  let result = await fetch(url, {
    method: "POST"
  })

  let data = await result.json()

  return await data
}

export default getApiAuthorization
