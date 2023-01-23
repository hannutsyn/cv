'use client'
import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Icon from 'components/Icon'
import { IconButton } from 'components/IconButton'
import React, { useEffect } from 'react'
import Skills from 'components/Skills'
import InfoBlock from 'components/InfoBlock'
import WorkPoint from 'components/WorkPoint'
import Language from 'components/Language'
import ReactGA from 'react-ga'
import { config, timePassedFrom } from 'utils'

ReactGA.initialize(config.GA_KEY)

export default function Home() {
  const [isLoading, setLoading] = useState(true)

  const {
    LOCATION,
    STARTED_DATE,
    EMAIL,
    PHONE,
    TELEGRAM,
    LINKEDIN,
    GITHUB,
    EXPERIENCE,
    EDUCATION,
  } = config

  const { years, months } = timePassedFrom(STARTED_DATE)

  useEffect(() => {
    ReactGA.pageview(window?.location.pathname)
    setLoading(false)
  }, [])

  if (isLoading) return null

  return (
    <Container>
      <Header>
        <Title>
          <Main>
            <Name>Yauheni&nbsp;Hannutsyn</Name>
            <Subtitle>Frontend&nbsp;Developer</Subtitle>
          </Main>
          <Location>
            <Icon icon="carbon:location" color="#617a8e" />
            <LocationText>{LOCATION}</LocationText>
          </Location>
        </Title>
        <Connect>
          <Row>
            <Icon icon="carbon:email" />
            <Link
              href={`mailto:${EMAIL}`}
              onClick={() => ReactGA.event({ category: '[contact]', action: '[email]' })}
            >
              {EMAIL}
            </Link>
          </Row>
          <Row>
            <Icon icon="carbon:phone" />
            <Link
              href={`tel:${PHONE}`}
              onClick={() => ReactGA.event({ category: '[contact]', action: '[phone]' })}
            >
              {PHONE}
            </Link>
          </Row>
          <Socials>
            <Link
              href={TELEGRAM}
              onClick={() => ReactGA.event({ category: '[contact]', action: '[telegram]' })}
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <Icon icon="akar-icons:telegram-fill" />
              </IconButton>
            </Link>
            <Link
              href={LINKEDIN}
              onClick={() => ReactGA.event({ category: '[contact]', action: '[linkedin]' })}
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <Icon icon="akar-icons:linkedin-fill" />
              </IconButton>
            </Link>
            <Link
              href={GITHUB}
              onClick={() => ReactGA.event({ category: '[contact]', action: '[github]' })}
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <Icon icon="akar-icons:github-fill" />
              </IconButton>
            </Link>
          </Socials>
        </Connect>
      </Header>
      <InfoBlock title="Languages:">
        <Languages>
          <Language
            icon={<Icon icon="emojione:flag-for-russia" />}
            language="Russian"
            level="native"
          />
          <Language
            icon={<Icon icon="emojione:flag-for-united-states" />}
            language="English"
            level="B2"
          />
          <Language icon={<Icon icon="emojione:flag-for-poland" />} language="Polish" level="A2" />
        </Languages>
      </InfoBlock>

      <InfoBlock title="Education:" subtitle="[ 2010 - 2015 ]">
        <div>{EDUCATION.title}</div>
        <div>{EDUCATION.degree}</div>
      </InfoBlock>
      <InfoBlock title="Experience:" subtitle={`[ ${years} years, ${months} months ]`}>
        <WorkPoint
          company={EXPERIENCE.COGIA.title}
          timeframe={EXPERIENCE.COGIA.timeframe}
          points={EXPERIENCE.COGIA.points}
        />
        <WorkPoint
          company={EXPERIENCE.YS.title}
          timeframe={EXPERIENCE.YS.timeframe}
          points={EXPERIENCE.YS.points}
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
const Name = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #181818;
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
const LocationText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #617a8e;
  margin-left: 4px;
  margin-right: 4px;
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

const Languages = styled.div`
  display: flex;
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
