import styled from 'styled-components'
import Image from 'next/image'
import setThumbnailStream from '../functions/set-thumbnail-stream'
import Live from './live'
import Viewers from './viewers'
import Avatar from './avatar'
import TabLanguage from './tab-language'


const LiveStreamStyled = styled.div`
  cursor: pointer;

  .thumbnail{
    position: relative;
    img{
      vertical-align: middle;
    }
  }

  .stream-details{
    display: flex;
    gap: .5rem;
    margin-block-start: .25rem;

    .stream-description{
      color: var(--white-1);
      .title{
        overflow: hidden;
        font: var(--body2-bold);
        max-inline-size: 250px;
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .username{
        font: var(--caption-regular);
      }
    }
  }
  
  
`

function LiveStream({ streamData, userData }) {
  let { profile_image_url, display_name } = userData
  let { viewer_count, thumbnail_url, title, language } = streamData
  let url = setThumbnailStream(thumbnail_url)
  console.log(language)

  
  


  return (
    <LiveStreamStyled>
      <div className='thumbnail'>
        <Live />
        <Viewers viewers={viewer_count} />
        <Image src={url} alt="" width={336} height={188} />
      </div>
      <div className='stream-details'>
        <Avatar avatar={profile_image_url} />
        <div className='stream-description'>
          <h4 className='title'>{title}</h4>
          <span className='username'>{display_name}</span>
          <TabLanguage lan={language} />
        </div>
      </div>
    </LiveStreamStyled>
    
  )
}

export default LiveStream
