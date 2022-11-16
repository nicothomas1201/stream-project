import styled from 'styled-components'

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 16.375rem) auto;
  grid-template-rows: 80px auto;
  grid-template-areas: "header header" "sidebar main";
  block-size: 100vh;
`

function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
    
  )
}

export default Layout
