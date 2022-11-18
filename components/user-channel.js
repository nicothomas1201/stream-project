import styled from 'styled-components'
import Avatar from './avatar'
import formatViewers from '../functions/format-viewers'

const UserChannelStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  .info{
    display: flex;
    gap: .25rem;

    .userChannel-details{
      .name{
        margin: 0;
        color: var(--white-1);
        font: var(--caption-bold);
      }

      .type{
        font: var(--caption-regular);
        color: #DEDEE380;
      }
    }
  }

  .views{
    font: var(--caption-regular);
    color: var(--white-1);
    position: relative;
  }

  .views::before{
    content: '';
    position: absolute;
    inline-size: .5rem;
    block-size: .5rem;
    background-color: var(--red);
    border-radius: 50%;
    top: 50%;
    transform: translate(-100%, -50%);
    left: -.25rem;
  }

`

function UserChannel({ user, stream, open }) {
  let { profile_image_url, display_name } = user
  let { viewer_count, game_name } = stream

  if(open){
    return (
      <UserChannelStyled>
        <div className='info'>
          <Avatar avatar={profile_image_url} />
          <div className='userChannel-details'>
            <h4 className='name'>{display_name}</h4>
            <span className='type'>{game_name}</span>
          </div>
        </div>
  
        <span className='views'>
          { formatViewers(viewer_count) }
        </span>
      </UserChannelStyled> 
    )
  }

  return (
    <UserChannelStyled>
      <Avatar avatar={profile_image_url} />
    </UserChannelStyled>
  )

}

export default UserChannel
