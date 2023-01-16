import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  company: string
  timeframe: string
  points: string[]
}

const WorkPoint: FC<Props> = ({ company, timeframe, points }) => (
  <div>
    <span style={{ fontWeight: '500', color: '#234061' }}>{company}</span>
    <Sub>{timeframe}</Sub>
    <List>
      {points.map((point) => (
        <ListItem key={point}>{point}</ListItem>
      ))}
    </List>
  </div>
)

const Sub = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #8a8a8a;
  margin-left: 4px;
  -webkit-font-smoothing: antialiased;
`

const List = styled.ul`
  list-style: inside circle;
  padding: 0;
  margin: 8px 0;
`

const ListItem = styled.li`
  padding: 4px 0;
  color: #494949;
`

export default WorkPoint
