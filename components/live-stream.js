import styled from 'styled-components'
import Image from 'next/image'
import setThumbnailStream from '../functions/set-thumbnail-stream'
import { useEffect } from 'react'


const LiveStreamStyled = styled.div`

`

function LiveStream({ streamData, userData }) {
  let url = setThumbnailStream(streamData.thumbnail_url)

  
  return (
    <LiveStreamStyled>
      <Image src={url} alt="" width={336} height={188} />
    </LiveStreamStyled>
    
  )
}

export default LiveStream
