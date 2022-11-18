import styled from 'styled-components'
import { startTransition, useEffect, useState } from 'react'
import LiveStream from './live-stream'

const MainStyled = styled.main`
  grid-area: main;
  color: var(--white-1);
  overflow: auto;

  .streams-container{
    display: grid; 
    grid-template-columns: repeat(auto-fill, 21rem);
    grid-gap: 1.5rem;
    place-content: center;
    margin-block-end: 100px;
  }
`

function Main({ streams, userData }) {
  // user_login login

  if(streams && userData){
    return (
      <MainStyled>
        <div className='streams-container'>
          {
            streams.map( ( streamData, streamIndex ) => {
              let user = userData.filter( item => streamData.user_login === item.login)

              return <LiveStream 
                streamData={streamData} 
                userData={user[0]}
                key={streamIndex}/>
            }) 
          }
        </div>
      </MainStyled> 
    )
  }
  // TODO: hacer un loading
  // return ()

}

export default Main
