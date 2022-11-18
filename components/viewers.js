import styled from 'styled-components'
import { useState } from 'react'
import formatViewers from '../functions/format-viewers'

const ViewersStyled = styled.div`
  position: absolute;
  background: #0E0E10CC;
  color: #ffffff;
  padding-inline: .25rem;
  border-radius: .125rem;
  font: var(--caption-regular);
  left: 1rem;
  bottom: 1rem;

`

function Viewers({ viewers }) {
  // let [ formatViewers, setViewers ] = useState() 
  
  return (
    <ViewersStyled>
      {formatViewers( viewers )} Espectadores
    </ViewersStyled>
    
  )
}

export default Viewers
