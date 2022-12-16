import React, { FC, ButtonHTMLAttributes, SVGAttributes, ReactElement } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: none;
  background: none;
  border-radius: 20px;
  transition: all 0.1s;
  svg {
    color: #727272;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    cursor: pointer;
    backdrop-filter: brightness(0.95);
    svg {
      color: #232323;
    }
  }

  &:focus,
  &:active {
    backdrop-filter: brightness(0.92);
    outline: none;
    svg {
      color: #232323;
    }
  }
`

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement<SVGAttributes<SVGSVGElement>>
}

const IconButton: FC<IconButtonProps> = ({ children, ...rest }: IconButtonProps) => (
  <StyledButton type="button" {...rest}>
    {children}
  </StyledButton>
)

export { IconButton }
