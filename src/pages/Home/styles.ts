import styled, { css } from 'styled-components'

export const HomePageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`

export const HomeMain = styled.main`
  max-width: 1440px;
  width: 100%;
`

export const PostList = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(382px, calc(100% / 2 - 1rem)), 1fr)
  );
`

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;

    > h1 {
      font-size: ${theme.xl};
      font-weight: bold;
      color: ${theme['base-subtitle']};
    }

    > span {
      font-size: ${theme.sm};
      color: ${theme['base-span']};
    }
  `}
`

export const SearchForm = styled.form`
  ${({ theme }) => css`
    margin-top: 0.85rem;
    margin-bottom: 2.5rem;

    > input {
      width: 100%;
      border-radius: 6px;
      padding: 1rem 0.85rem;
      background: ${theme['base-input']};
      border: 1px solid ${theme['base-border']};
      color: ${theme['base-title']};

      &::placeholder {
        color: ${theme['base-label']};
      }
    }
  `}
`
