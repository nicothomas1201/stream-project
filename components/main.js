import styled from 'styled-components'
import { startTransition, useEffect, useState } from 'react'
import LiveStream from './live-stream'

const MainStyled = styled.main`
  grid-area: main;
  color: var(--white-1);
  overflow: auto;

`

function Main({ streams, userData }) {
  // user_login login

  if(streams && userData){
    return (
      <MainStyled>
        {
          streams.map( ( streamData, streamIndex ) => {
            let user = userData.filter( item => streamData.user_login === item.login)

            return <LiveStream 
              streamData={streamData} 
              userData={user[0]}
              key={streamIndex}/>

            
          }) 
        }
      </MainStyled> 
    )
  }
  // TODO: hacer un loading
  // return ()

}

export default Main
