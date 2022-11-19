import styled from 'styled-components'
import LiveStream from './live-stream'
import getInfoUserByStream from '../functions/get-info-user-by-stream'

const MainStyled = styled.main`
  grid-area: main;
  color: var(--white-1);
  overflow: auto;

  
`

function Main({ children }) {
  // user_login login

  
  return (
    <MainStyled>
      {children}       
    </MainStyled> 
  )
  
  

}

export default Main
