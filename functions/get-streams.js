import getApiAuthorization from "./api-authorization"
import { BASE_API, clientId } from "../db";

async function getStreams(user) {
  let url = `${BASE_API}/${user}/streams`
  let { access_token, expires_in, token_type } = await getApiAuthorization()

  token_type =
  token_type.substring(0, 1).toUpperCase() +
  token_type.substring(1, token_type.length);

  let authorization = `${token_type} ${access_token}`

  let headers = {
    authorization,
    "Client-Id": clientId,
    };

  let result = await fetch(url, {
    headers
  })

  return await result.json()
  
  
}

export default getStreams
