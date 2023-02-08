import styled, { css } from 'styled-components'

export const FooterWrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme['base-post']};
    margin-top: 80px;

    padding: 1rem;
  `}
`

export const FooterContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1220px;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: ${theme['breakpoint-lg']}) {
      flex-direction: column;
      gap: 2rem;
    }

    img {
      width: 5rem;
    }

    > ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      font-size: ${theme.sm};

      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      > li {
        cursor: pointer;

        > a {
          text-decoration: none;
          color: ${theme['blue-text']};

          &:hover {
            color: ${theme.blue};
          }
        }

        &:hover {
          text-decoration: underline;
          color: ${theme.blue};
        }
      }
    }
  `}
`
