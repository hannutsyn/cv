import React, { ButtonHTMLAttributes, cloneElement, FC, isValidElement, ReactElement, ReactNode, memo } from 'react'
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
  icon?: ReactNode
}

const Cell: FC<CellProps> = ({ children, icon, ...rest }) => {
  const cellIcon = icon && isValidElement(icon) && cloneElement(icon as ReactElement)

  return (
    <StyledCell {...rest}>
      <div className="content">
        {cellIcon}
        <span className="text">{children}</span>
      </div>
    </StyledCell>
  )
}

export default memo(Cell)
