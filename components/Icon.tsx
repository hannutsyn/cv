import React, { FC } from 'react'
import { Icon as IconComponent, IconProps } from '@iconify/react'
import styled from 'styled-components'

const Icon: FC<IconProps> = (props) => {
  return <IconComponent width={24} style={{ minWidth: '24px' }} {...props} />
}

export const IconReversed = styled(Icon)`
  transform: rotate(180deg);
`

export const IconPlus90Deg = styled(Icon)`
  transform: rotate(90deg);
`

export const IconPlusMinus90Deg = styled(Icon)`
  transform: rotate(-90deg);
`

export default Icon
