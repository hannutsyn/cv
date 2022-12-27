'use client'
import React from 'react'
import styled from 'styled-components'

export default function Loading() {
  return (
    <Container>
      <Tag />
      <Line />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 12px;
  height: 70vh;
  align-items: center;
  justify-content: center;

  & > * {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    mix-blend-mode: multiply;
  }

  @keyframes move-right {
    0%,
    10% {
      transform: scale(1) translateX(0);
    }
    30% {
      transform: scale(1.2) translateX(25px);
    }
    50%,
    60% {
      transform: scale(1) translateX(50px);
    }
    80% {
      transform: scale(0.8) translateX(25px);
    }
  }

  @keyframes move-left {
    0%,
    10% {
      transform: scale(1) translateX(0);
    }
    30% {
      transform: scale(0.8) translateX(-25px);
    }
    50%,
    60% {
      transform: scale(1) translateX(-50px);
    }
    80% {
      transform: scale(1.2) translateX(-25px);
    }
  }
`

const Tag = styled.div`
  background-color: #57c871;
  animation: move-right 1.2s linear infinite;
`

const Line = styled.div`
  background-color: #4b61da;
  animation: move-left 1.2s linear infinite;
`
