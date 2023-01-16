import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  icon: React.ReactNode
  language: string
  level: string
}

const Language: FC<Props> = ({ icon, language, level }) => (
  <Container>
    <IconWrapper>{icon}</IconWrapper>
    <Content>
      <Text>{language}</Text>
      <Label>{level}</Label>
    </Content>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #292828;
  margin-right: 4px;
  padding-right: 4px;
  &:not(:last-child) {
    border-right: 1px groove;
  }
`

const IconWrapper = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 50%;
`
const Content = styled.div`
  position: relative;
`

const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-left: 4px;
`
const Label = styled.span`
  font-size: 12px;
  color: #30c130;
  position: absolute;
  bottom: -8px;
  right: 0;
`

export default Language
