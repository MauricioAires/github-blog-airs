import { useEffect, useState } from 'react'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { api } from '../../libs/axios'

import * as S from './styles'

type Issue = {
  id: number
  body: string
  title: string
  created_at: string
}
interface FetchIssuesData {
  total_count: number
  items: Issue[]
}

export function HomePage() {
  const [countIssues, setCountIssues] = useState(0)
  const [issues, setIssues] = useState<Issue[]>([])
  async function fetchIssues() {
    const response = await api.get<FetchIssuesData>(
      '/search/issues?q=repo:MauricioAires/github-blog-airs',
    )

    setCountIssues(response.data.total_count)
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <S.HomePageWrapper>
      <Profile />

      <S.HomeMain>
        <S.Title>
          <h1>Publicações</h1>

          <span>{countIssues} publicações</span>
        </S.Title>
        <S.SearchForm>
          <input type="text" placeholder="Buscar conteúdo" />
        </S.SearchForm>
        <S.PostList>
          {issues.map((issue) => (
            <PostCard
              key={issue.id}
              body={issue.body}
              createdAt={issue.created_at}
              title={issue.title}
            />
          ))}
        </S.PostList>
      </S.HomeMain>
    </S.HomePageWrapper>
  )
}
