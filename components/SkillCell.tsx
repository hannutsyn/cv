import React, { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react'
import cn from 'classnames'
import styled from 'styled-components'

const StyledCell = styled.button`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background-color: #fff;
  border: 0.5px solid #cccccc4f;
  transition: all 0.35s;
  cursor: pointer;

  &.isSelected {
    background-color: #98ff83a3;
  }
  &.isAll {
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    filter: invert(1);
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
  }

  .text {
    font-weight: 600;
    font-size: 14px;
    margin-left: 6px;
    text-align: start;
  }
`

interface CellProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  isSelected: boolean
  isAll: boolean
}

const Cell: FC<CellProps> = ({ children, icon, isSelected, isAll, className, ...rest }) => (
  <StyledCell className={cn(className, { isSelected, isAll })} {...rest}>
    <div className="content">
      {icon}
      <span className="text">{children}</span>
    </div>
  </StyledCell>
)

export default memo(Cell)
