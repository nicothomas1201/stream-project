import styled from "styled-components";

const Button = styled.button`
  color: var(--white-2);
  font: var(--caption-bold);
  background-color: ${({secondary}) => secondary ? 'var(--grey-1)' : 'var(--primary)'};
  border-radius: .25rem;
  padding: .75rem 1.5rem;
  cursor: pointer; 
  text-align: center;
  border: none;
`

export const ButtonWhite = styled(Button)`
  background: var(--white-2);
  color: var(--black-1);
`

export default Button