import styled from 'styled-components'
import Icon from './icons'

const SidebarStyled = styled.aside`
  grid-area: sidebar;
  box-sizing: border-box;
  color: var(--white-1);
  background: var(--black-2);
  block-size: 100%;
  flex: 1;

  .header{
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: .5rem;
    justify-content: space-between;
    .title{
      font: var(--body2-regular);
      text-transform: uppercase;
      margin: 0; 
    }
  }
`

function Sidebar() {
  return (
    <SidebarStyled>
      <div className='header'>
        <h2 className='title'>canales recomendados</h2>
        <Icon name="share-left"  color="var(--white-1)" size={24}/>
      </div>
    </SidebarStyled>
    
  )
}

export default Sidebar
