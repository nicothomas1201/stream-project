import styled from 'styled-components'
import LiveStream from './live-stream'
import getInfoUserByStream from '../functions/get-info-user-by-stream'

const StreamsListStyled = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fill, 21rem);
  grid-gap: 1.5rem;
  place-content: center;
  margin-block-end: 100px;
`

function StreamsList({streams, userData }) {
  if(streams && userData){
    return (
      <StreamsListStyled>
          {
            streams.map( ( streamData, streamIndex ) => {
              let user = getInfoUserByStream(userData, streamData)
  
              return <LiveStream 
                streamData={streamData} 
                userData={user}
                key={streamIndex}/>
            }) 
          }
      </StreamsListStyled>
      
    )
  }
  // TODO: hacer un loading
  // return ()
}

export default StreamsList
