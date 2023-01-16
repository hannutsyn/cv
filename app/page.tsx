'use client'

import styled from 'styled-components'
import Link from 'next/link'
import Icon from 'components/Icon'
import { IconButton } from 'components/IconButton'
import React, { FC, useEffect, useState } from 'react'
import Loading from './loading'
import Skills from 'components/Skills'
import InfoBlock from 'components/InfoBlock'
import WorkPoint from 'components/WorkPoint'
import Language from 'components/Language'

const STARTED_DATE = new Date('September 1, 2018')

export default function Home() {
  const [isLoading, setLoading] = useState(true)

  function timePassedFrom(date: Date): { years: number; months: number } {
    const msInDay = 1000 * 60 * 60 * 24
    const currentDate = new Date()
    const timePassed = currentDate.getTime() - date.getTime()
    const years = Math.floor(timePassed / (msInDay * 365))
    const months = Math.floor((timePassed / (msInDay * 30)) % 12)
    return { years, months }
  }

  const { years, months } = timePassedFrom(STARTED_DATE)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header>
        <Title>
          <Main>
            <span style={{ fontSize: '24px', fontWeight: '600', color: '#181818' }}>Yauheni&nbsp;Hannutsyn</span>
            <Subtitle>Frontend&nbsp;Developer</Subtitle>
          </Main>
          <Location>
            <Icon icon="carbon:location" color="#617a8e" />
            <span
              style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#617a8e',
                marginLeft: '4px',
                marginRight: '4px',
              }}
            >
              Porto, Portugal
            </span>
          </Location>
        </Title>
        <Connect>
          <Row>
            <Icon icon="carbon:email" />
            <Link href="mailto:evg.hann@gmail.com">evg.hann@gmail.com</Link>
          </Row>
          <Row>
            <Icon icon="carbon:phone" />
            <Link href="tel:+351921661454">+351 921-661-454</Link>
          </Row>
          <Socials>
            <Link href="https://t.me/evghann" target="_blank" rel="noreferrer">
              <IconButton>
                <Icon icon="akar-icons:telegram-fill" />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/yauheni-hannutsyn-a9283220a/" target="_blank" rel="noreferrer">
              <IconButton>
                <Icon icon="akar-icons:linkedin-fill" />
              </IconButton>
            </Link>
            <Link href="https://github.com/hannutsyn" target="_blank" rel="noreferrer">
              <IconButton>
                <Icon icon="akar-icons:github-fill" />
              </IconButton>
            </Link>
          </Socials>
        </Connect>
      </Header>
      <InfoBlock title="Languages:">
        <div style={{ display: 'flex' }}>
          <Language icon={<Icon icon="emojione:flag-for-russia" />} language="Russian" level="native" />
          <Language icon={<Icon icon="emojione:flag-for-united-states" />} language="English" level="B2" />
          <Language icon={<Icon icon="emojione:flag-for-poland" />} language="Polish" level="A2" />
        </div>
      </InfoBlock>

      <InfoBlock title="Education:" subtitle="[ 2010 - 2015 ]">
        <div>Yanka Kupala State University of Grodno</div>
        <div>Bachelor of Mechanical Engineering</div>
      </InfoBlock>
      <InfoBlock title="Experience:" subtitle={`[ ${years} years, ${months} months ]`}>
        <WorkPoint
          company="Cogia Intelligence"
          timeframe="[ Jun 2021 - present ]"
          points={[
            "Developed and maintained the company's flagship web application using React, Redux, and TypeScript",
            'Implemented new features and enhancements to improve user experience',
            'Collaborated with cross-functional teams to deliver high-quality software solutions',
            'Led a team of junior developers and provided mentorship and guidance',
          ]}
        />
        <WorkPoint
          company="Yellow Square"
          timeframe="[ Sep 2018 - May 2021 ]"
          points={[
            'Involved in client-side app development, including implementing new features, fixing bugs, and making UI/UX improvements',
            "Worked on migrating to Redux/Toolkit to improve the app's performance and maintainability",
            'Had regular communication with the customer to understand their needs and gather feedback on the app',
            'Worked on migrating the app to TypeScript to improve code maintainability and performance',
            'Utilized technologies such as TypeScript, React, Redux / toolkit, styled-components, Formik, MaterialUI, React Testing Library',
          ]}
        />
      </InfoBlock>
      <Skills />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #4f5050;

    &:not(:first-child) {
      margin-left: 4px;
    }
  }
`

const Header = styled.div`
  display: flex;

  @media screen and (max-width: 492px) {
    flex-direction: column;
  }
`

const Subtitle = styled.span`
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: #363636;
  border-left: 3px solid #181818;
  margin-left: 5.5px;
  padding-left: 5.5px;
  @media screen and (max-width: 700px) {
    margin-top: -6px;
  }
`

const Main = styled.div`
  display: flex;
  flex-flow: wrap;
`

const Location = styled.div`
  display: flex;
  align-items: end;
  margin-top: 8px;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 32px;
  border-right: 1px solid #d7d7d7;
  @media screen and (max-width: 492px) {
    border-right: none;
    padding: 32px 32px 16px;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 4px;
  }

  a {
    margin-left: 8px;
  }

  &:hover {
    filter: brightness(1.3);
  }
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
`

const Connect = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 248px;
  justify-content: center;
  @media screen and (max-width: 520px) {
    width: 100%;
    padding: 16px 32px;
    border: none;
    align-self: center;
  }
`
