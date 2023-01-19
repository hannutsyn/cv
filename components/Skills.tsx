'use-client'
import styled from 'styled-components'
import SkillCell from 'components/SkillCell'
import cn from 'classnames'
import Icon from 'components/Icon'
import { memo, useCallback, useEffect, useState } from 'react'
import ReactGA from 'react-ga'

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

const Skills = () => {
  const [skills, setSkills] = useState<string[]>([])
  const [all, setAll] = useState(false)

  const toggleSkill = useCallback((skill: string) => {
    ReactGA.event({ category: 'skill', action: skill })
    setSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }, [])

  const isSkillSelected = useCallback((name: string) => skills.includes(name), [skills])

  const allFn = () => {
    ReactGA.event({ category: 'all', action: 'all' })
    setAll(true)
  }

  useEffect(() => {
    mainSkills.length === skills.length ? allFn() : setAll(false)
  }, [skills.length])

  return (
    <Container>
      <h3>Skills</h3>
      <SkillsGrid>
        {mainSkills.map(({ icon, color, name }) => (
          <SkillCell
            icon={<Icon icon={icon} color={color} />}
            isSelected={isSkillSelected(name)}
            isAll={all}
            onClick={() => toggleSkill(name)}
            key={name}
          >
            {name}
          </SkillCell>
        ))}
      </SkillsGrid>
    </Container>
  )
}

const Container = styled.div`
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
`

export default memo(Skills)
