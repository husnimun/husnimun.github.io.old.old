import styled, { css } from 'styled-components'
import { light } from '../../styles/Color'

const baseStyles = css`
  display: inline-block;
  text-decoration: none;
  color: ${light};
  border: none;
  padding: 12px 12px;
  border-radius: 4px;
  background: linear-gradient(-45deg, #4f3bcc 0%, #1cabca 100%);
  box-shadow: 0 4px 6px rgba(50, 50, 120, 0.2), 0 1px 3px rgba(0, 0, 0, 0.08);
  transform: translate(0px, 0px);
  transition: 200ms ease;

  &:hover {
    transform: translate(0px, -2px);
    box-shadow: 0 7px 12px rgba(50, 50, 120, 0.3), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`

export const ButtonLink = styled.a`
  ${baseStyles};
`
