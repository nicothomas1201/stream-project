import { BASE_API, clientId } from "../db";
import getApiAuthorization from "./api-authorization";

async function getInfoUsers( data ) {
  let usersLogin = null
  let user = ''

  if(Array.isArray(data)){
    if(data.length <= 100){
      usersLogin = data.map( ( item, index ) => item.user_login)
    }
  
    if(usersLogin){
      user = usersLogin.join('&login=')
    }  
  } else {
    user = data
  }



  let url = `${BASE_API}/helix/users?login=${user}`
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

  // console.log( await result.json())

  return await result.json()
  
}

export default getInfoUsers
