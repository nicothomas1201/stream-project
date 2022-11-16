import styled from 'styled-components'
import Image from 'next/image'
import Button from './button'

const HeaderStyled = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  background: var(--black-1);

  .logo{
    display: flex;
    gap: .5rem;
    align-items: center;    

    img{
      vertical-align: middle;
    }

    .name{
      font: var(--logo);
      color: #ffffff;
      margin: 0;
    }
   
  }

  .header-buttons{
    display: flex;
    gap: .75rem;
    
  }

`

function Header() {
  return (
    <HeaderStyled>
      <div className='logo'>
        <Image src='/logo.png' alt='' width="48" height="48" />
        <h1 className='name'>stream</h1>
      </div>

      <div className='header-buttons'>
        <Button secondary>Inica Sesion</Button>
        <Button>Registrate</Button>
      </div>
    </HeaderStyled>
    
  )
}

export default Header
