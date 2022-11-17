import styled from 'styled-components'
import Image from 'next/image'
import setThumbnailStream from '../functions/set-thumbnail-stream'
import Live from './live'
import Viewers from './viewers'
import Avatar from './avatar'


const LiveStreamStyled = styled.div`
  cursor: pointer; 
  .thumbnail{
    position: relative;
    img{
      vertical-align: middle;
    }
  }
  
  
`

function LiveStream({ streamData, userData }) {
  let { profile_image_url } = userData
  let { viewer_count, thumbnail_url } = streamData
  let url = setThumbnailStream(thumbnail_url)

  
  


  return (
    <LiveStreamStyled>
      <div className='thumbnail'>
        <Live />
        <Viewers viewers={viewer_count} />
        <Image src={url} alt="" width={336} height={188} />
      </div>
      <Avatar avatar={profile_image_url} />
    </LiveStreamStyled>
    
  )
}

export default LiveStream
