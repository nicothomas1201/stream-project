import getInfoUsers from './get-info-users'
import getStreams from './get-streams'

async function getDataByUsername( name ) {
  let { data: userData } = await getInfoUsers(name)
  let { data: streamsData} = await getStreams()

    let dataStreamByUsername = streamsData.filter( item => {
    return item.user_login === userData[0].login
  })

  let result = {
    userData: userData[0], 
    streamData: dataStreamByUsername[0],
  }

  return result
  


  
}

export default getDataByUsername
