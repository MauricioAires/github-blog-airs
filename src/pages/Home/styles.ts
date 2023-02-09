import styled from 'styled-components'

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

  > div {
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(416px, calc(100% / 2 - 1rem)), 1fr)
    );
  }
`
