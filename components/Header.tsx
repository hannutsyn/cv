import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <Navigation>
      <Link href="/">About</Link>
      <Link href="/">My Projects</Link>
      <Link href="/">Connect Wallet[web3]</Link>
      <Link href="/">Share</Link>
    </Navigation>
  )
}

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #d4d4d4;
  background: #fff;

  a {
    color: #424242;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    &:hover {
      color: #3d6f61;
    }
  }
`

export default Header
