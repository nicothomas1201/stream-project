import styled from 'styled-components'
import { useState } from 'react'

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
  let formatViewers = viewers
  if( viewers >= 1000 && viewers <= 9000){
    let string = viewers.toString()
    formatViewers = `${string.slice(0, 1)} k`
  } else if( viewers >= 10000 && viewers <= 90000){
    let string = viewers.toString()
    formatViewers = `${string.slice(0, 2)} k`
  } else if( viewers >= 100000 && viewers <= 900000){
    let string = viewers.toString()
    formatViewers = `${string.slice(0, 3)} k`
  }
  return (
    <ViewersStyled>
      {formatViewers} Espectadores
    </ViewersStyled>
    
  )
}

export default Viewers
