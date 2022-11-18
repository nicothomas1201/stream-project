function getInfoUserByStream( userData, streamData ) {
  return userData.filter( item => streamData.user_login === item.login)[0]
}

export default getInfoUserByStream
