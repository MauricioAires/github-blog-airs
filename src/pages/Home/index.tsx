import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'

import * as S from './styles'

export function HomePage() {
  return (
    <S.HomePageWrapper>
      <Profile />

      <S.HomeMain>
        <div>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </S.HomeMain>
    </S.HomePageWrapper>
  )
}
