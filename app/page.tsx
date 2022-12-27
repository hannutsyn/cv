'use client'

import styled from 'styled-components'
import Link from 'next/link'
import Icon from 'components/Icon'
import { IconButton } from 'components/IconButton'
import Button from 'components/Cell'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import Loading from './loading'

const mainSkills = [
  { name: 'CSS', icon: 'akar-icons:css-fill', color: '#264de4' },
  { name: 'HTML', icon: 'akar-icons:html-fill', color: '#f14a29' },
  { name: 'JavaScript', icon: 'akar-icons:javascript-fill', color: '#f0db4f' },
  { name: 'TypeScript', icon: 'akar-icons:typescript-fill', color: '#007acc' },
  { name: 'React', icon: 'akar-icons:react-fill', color: '#61DBFB' },
  { name: 'Redux', icon: 'akar-icons:redux-fill', color: '#764abc' },
  { name: 'NextJS', icon: 'akar-icons:nextjs-fill', color: '#222222' },
  { name: 'Gatsby', icon: 'akar-icons:gatsby-fill', color: '#663399' },
  { name: 'React Query', icon: 'logos:react-query-icon' },
  { name: 'GraphQL', icon: 'logos:graphql' },
  { name: 'MaterialUI', icon: 'logos:material-ui' },
  { name: 'NestJS', icon: 'logos:nestjs' },
  { name: 'i18n', icon: 'lucide:languages' },
  { name: 'Git', icon: 'akar-icons:github-fill' },
  { name: 'ESLint', icon: 'logos:eslint' },
  { name: 'Prettier', icon: 'logos:prettier' },
  { name: 'Web3', icon: 'logos:web3js' },
  { name: 'Postman', icon: 'logos:postman-icon' },
  { name: 'Figma', icon: 'simple-icons:figma' },
  { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
]

export default function Home() {
  const [skills, setSkills] = useState<string[]>([])
  const [blow, setBlow] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const handleToggleSkill = (skill: string) =>
    setSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))

  const blowFn = () => {
    setBlow(true)
  }

  //   responsible for implementing the frontend part of the applications
  //app for social medias management
  //app for social medias management

  // /auth
  // /roles
  // /modals
  // /

  function getTimeDifference(previous: number): string {
    const msPerDay = 60 * 1000 * 60 * 24
    const msPerMonth = msPerDay * 30
    const msPerYear = msPerDay * 365

    const diff = Date.now() - previous

    let yymm: number[] = []

    const getYearMonthFrom = (start: number): number[] => {
      if (start >= msPerYear) {
        const fullYears = Math.floor(start / msPerYear)
        if (start % msPerYear !== 0) {
          yymm = [fullYears]
          const diff = start - fullYears * msPerYear
          return getYearMonthFrom(diff)
        }
        return (yymm = [fullYears])
      } else {
        return (yymm = [...yymm, Math.round(start / msPerMonth)])
      }
    }

    const yearMonth = getYearMonthFrom(diff)

    return `[ ${yearMonth[0]} years` + ` ${yearMonth[1]} month ]`
  }

  useEffect(() => {
    mainSkills.length === skills.length ? blowFn() : setBlow(false)
  }, [skills.length])

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
            <Icon icon="carbon:location" color="#3e6889" />
            {/* <Icon icon="twemoji:flag-portugal" /> */}
            <span
              style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#3e6889',
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

      <Experience>
        <h3 style={{ marginBottom: 0 }}>Education:</h3>
        <span style={{ fontSize: '16px', fontWeight: '500', color: '#8a8a8a', padding: '4px 0' }}>[ 2010 - 2015 ]</span>
        <div>Yanka Kupala State University of Grodno</div>
        <div>Bachelor of Mechanical Engineering</div>
      </Experience>
      <Experience>
        <h3 style={{ marginBottom: 0 }}> Experience:</h3>
        <span style={{ fontSize: '16px', fontWeight: '500', color: '#8a8a8a', padding: '4px 0' }}>
          {getTimeDifference(Date.parse('2018-09-01 18:00:00'))}
        </span>
        <div style={{ padding: '4px 0' }}>
          Cogia intelligence
          <span style={{ fontSize: '14px', fontWeight: '500', color: '#8a8a8a' }}> [ Jun 2021 - present ]</span>
          {/* <div style={{ fontSize: '16px', fontWeight: '500', color: '#777777' }}>
            Development of applications for online casinos, participation in application development: app for helpdesk,
            campaign management app, affiliate network management app, admin panels
          </div> */}
        </div>
        <div style={{ padding: '4px 0' }}>
          Yellow square
          <span style={{ fontSize: '14px', fontWeight: '500', color: '#8a8a8a' }}> [ Sep 2018 - May 2021 ]</span>
          {/* <div style={{ fontSize: '16px', fontWeight: '500', color: '#777777' }}>
            Development of applications for online casinos, participation in application development: app for helpdesk,
            campaign management app, affiliate network management app, admin panels
          </div>
          <a>https://affmore.com/</a> */}
        </div>
      </Experience>

      <Skills>
        <h3>Skills</h3>
        <SkillsGrid>
          {mainSkills.map(({ icon, color, name }) => (
            <Button
              className={cn({ isSelected: skills.includes(name), blow })}
              icon={<Icon icon={icon} color={color} />}
              onClick={() => handleToggleSkill(name)}
              key={name}
            >
              {name}
            </Button>
          ))}
        </SkillsGrid>
      </Skills>
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
  margin-left: 5.3px;
  padding-left: 5.5px;
  @media screen and (max-width: 700px) {
    margin-top: -8px;
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
    border: none;
    align-self: center;
  }
`

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
  border-bottom: 0.5px solid #ccc;
  border-top: 0.5px solid #ccc;
`
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  transition: all 5s;

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }

  .isSelected {
    background-color: #98ff83a3;
  }

  .blow {
    animation: colored 1.5s 2 linear;
    @keyframes colored {
      from {
        filter: hue-rotate(0deg);
      }
      to {
        filter: hue-rotate(-360deg);
      }
    }
  }
`
