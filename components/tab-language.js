import styled from 'styled-components'

const TabLanguageStyled = styled.div`
  font: var(--caption-regular);
  color: #ffffff;
  border-radius: 1rem;
  background: var(--grey-2);
  display: block;
  inline-size: min-content;
  padding: .175rem .25rem;
  margin-block-start: .25rem;
`

function TabLanguage({ lan }) {

  return <TabLanguageStyled>{ lan }</TabLanguageStyled>
   
}

export default TabLanguage
