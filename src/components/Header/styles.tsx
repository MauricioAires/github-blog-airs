import styled, { css } from 'styled-components'

import Cover from '../../assets/cover.png'

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    background-image: url(${Cover});
    background-repeat: no-repeat;
    background-position: center center;
  `}
`

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 296px;
    flex: 1;
    max-width: 1440px;
    padding: 1rem;
  `}
`