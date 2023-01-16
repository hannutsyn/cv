import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  children: React.ReactNode
  subtitle?: string
}

const InfoBlock: FC<Props> = ({ title, subtitle, children }) => (
  <Info>
    <Title>{title}</Title>
    {subtitle && <Sub>{subtitle}</Sub>}
    <Content>{children}</Content>
  </Info>
)

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
  border-top: 0.5px solid #ccc;
`

const Title = styled.h3`
  margin: 0 0 4px;
  -webkit-font-smoothing: antialiased;
`

const Sub = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #8a8a8a;
  -webkit-font-smoothing: antialiased;
`

const Content = styled.div`
  padding: 8px 0;
`

export default InfoBlock
