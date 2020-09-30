import styled, { css } from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  height: 0;

  ${({ duration, applyTransition }) => applyTransition && css`
    transition: height ${duration}ms ease;
  `}
`