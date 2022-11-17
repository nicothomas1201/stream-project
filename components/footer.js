import styled from 'styled-components'
import Image from 'next/image'
import { ButtonWhite } from './button'

const FooterStyled = styled.footer`
  grid-area: footer;
  color: var(--white-1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--primary);
  color: var(--white-2);
  padding: .75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between; 

  .text-container{
    display: flex;
    gap: .5rem;
    align-items: center; 

    .text-copy{
      margin: 0;
      font: var(--headline3)
    }
  }

`

function Footer() {
  return (
    <FooterStyled>
      <div className='text-container'>
        <Image src="/footer-image.png" alt="" width={48} height={48} />
        <h3 className='text-copy' >
          Regístrate para disfrutar de lo mejor de juansguarnizo. Chatea, sigue o suscríbete.
        </h3>
      </div>

      <ButtonWhite>
        Registrate
      </ButtonWhite>
    </FooterStyled>
    
  )
}

export default Footer
