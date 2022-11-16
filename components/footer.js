import styled from 'styled-components'

const FooterStyled = styled.footer`
  grid-area: footer;
  color: var(--white-1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid red;

`

function Footer() {
  return (
    <FooterStyled>
      Footer
    </FooterStyled>
    
  )
}

export default Footer
