import styled from 'styled-components'

const LiveStyled = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem; 
  background-color: var(--red);
  padding-inline: .25rem;
  font: var(--caption-bold);
  color: #ffffff;
  border-radius: .125rem;
`

function Live() {
  return (
    <LiveStyled>
      EN VIVO
    </LiveStyled>
    
  )
}

export default Live
