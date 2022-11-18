import styled from 'styled-components'
import LiveStream from './live-stream'
import getInfoUserByStream from '../functions/get-info-user-by-stream'

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
              let user = getInfoUserByStream(userData, streamData)

              return <LiveStream 
                streamData={streamData} 
                userData={user}
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
