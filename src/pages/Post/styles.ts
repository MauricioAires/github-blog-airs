import styled, { css } from 'styled-components'

export const PostPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
`

export const PostPageContent = styled.div`
  ${({ theme }) => css`
    max-width: 1440px;
    width: 100%;

    > main {
      padding: 2.5rem 2rem;

      > code {
        background: ${theme['base-post']};
        padding: 1rem;
        border-radius: 2px;
        margin: 1rem 0;
        display: block;
      }
    }
  `}
`
export const PostHeader = styled.header`
  ${({ theme }) => css`
    transform: translateY(-50%);

    background: ${theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem;

    > h1 {
      font-size: ${theme['2xl']};
      color: ${theme['base-title']};
    }
  `}
`

export const Navigation = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    > a {
      color: ${theme.blue};
      font-weight: bold;
      text-transform: uppercase;
      font-size: ${theme.xs};
      line-height: 0;
      padding: 0.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`

export const Summary = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;

    > span,
    time {
      font-size: ${theme.md};
      color: ${theme['base-span']};
      line-height: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      > svg {
        color: ${theme['base-span']};
      }
    }
  `}
`