import styled, { css } from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(-50%);
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const ProfileContent = styled.div`
  ${({ theme }) => css`
    flex: 1;
    max-width: 1440px;
    padding: 2rem 2.5rem;
    min-height: 13rem;
    height: auto;

    background: ${theme['base-profile']};

    display: flex;
    gap: 2rem;

    > img {
      width: 9rem;
      height: 9rem;
      flex-shrink: 0;
      border-radius: 8px;
    }

    p {
      font-size: ${theme.md};
      padding-top: 1rem;
      padding-bottom: 1.5rem;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > h1 {
        font-size: ${theme['2xl']};
        font-weight: bold;
        color: ${theme['base-title']};
      }

      > a {
        color: ${theme.blue};
        text-transform: uppercase;
        font-weight: bold;
        font-size: ${theme.xs};

        display: flex;
        justify-content: center;
        align-items: center;

        line-height: 0;

        svg {
          margin-left: 0.5rem;
        }
      }
    }

    footer {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      > span {
        font-size: ${theme.md};
        color: ${theme['base-subtitle']};
        line-height: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        > svg {
          color: ${theme['base-label']};
        }
      }
    }
  `}
`
