import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'

import * as S from './styles'

export function HomePage() {
  return (
    <S.HomePageWrapper>
      <Profile />

      <S.HomeMain>
        <S.Title>
          <h1>Publicações</h1>

          <span>6 publicações</span>
        </S.Title>
        <S.SearchForm>
          <input type="text" placeholder="Buscar conteúdo" />
        </S.SearchForm>
        <S.PostList>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </S.PostList>
      </S.HomeMain>
    </S.HomePageWrapper>
  )
}
