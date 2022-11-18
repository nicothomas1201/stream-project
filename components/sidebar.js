import styled from 'styled-components'
import getInfoUserByStream from '../functions/get-info-user-by-stream'
import Icon from './icons'
import UserChannel from './user-channel'
import { useState } from 'react'

const SidebarStyled = styled.aside`
  grid-area: sidebar;
  box-sizing: border-box;
  color: var(--white-1);
  background: var(--black-2);
  block-size: 100%;
  flex: 1;
  /* padding: 1rem; */
  overflow-x: hidden; 
  inline-size: ${({open}) => open ? '100%' : '50px' } ;
  display: ${({open}) => open ? 'block' : 'flex'};
  flex-direction: column;
  align-items: center;


  .header{
    display: flex;
    align-items: center;
    gap: .5rem;
    justify-content: space-between;
    padding: 1rem;

    .button{
      display: flex;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
    }

    .title{
      font: var(--body2-regular);
      text-transform: uppercase;
      margin: 0; 
    }
  }

  .streams-channels-list{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

function Sidebar({ streams, userData}) {
  let [ open, setOpen ] = useState(true)


  function renderUserChannels(){
    if(streams && userData){
      let mostViewers = streams.sort()
      let streamRecomended = mostViewers.filter( (item, index) => {
        if(index <= 8){
          return item
        }
      })


      return streamRecomended.map(( streamData, streamIndex ) => {
        let user = getInfoUserByStream(userData, streamData)

        return <UserChannel 
          open={open}
          user={user} 
          stream={streamData} 
          key={streamIndex} />
      })
    }

    // TODO:  hacer el lodading
    return <span>Loading</span>
  }

  function handleClick(){
    setOpen(!open)
  }

  // console.log(open)

  return (
    <SidebarStyled open={open}>
      <div className='header'>
        { open ? <h2 className='title'>canales recomendados</h2> : null
        }
        <button className='button' onClick={handleClick}>
          <Icon name={`share-${open ? 'left' : 'rigth' }`}  color="var(--white-1)" size={24}/>
        </button>
      </div>

      <div className='streams-channels-list'>
        { renderUserChannels() }
      </div>
    </SidebarStyled>
    
  )
}

export default Sidebar
