import styled from 'styled-components'
import Image from 'next/image'

const AvatarStyled = styled.div`
  inline-size: 2rem;
  block-size: 2rem;
  border-radius: 50%;
  overflow: hidden;

  & img{
    vertical-align: middle;
  }

`

function Avatar({ avatar }) {
  return (
    <AvatarStyled>
      <Image src={avatar} alt="" width={32} height={32} />
    </AvatarStyled>
    
  )
}

export default Avatar
