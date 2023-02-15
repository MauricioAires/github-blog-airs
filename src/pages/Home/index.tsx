import { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { api } from '../../libs/axios'

import * as S from './styles'

type Issue = {
  id: number
  body: string
  title: string
  created_at: string
  number: number
}
interface FetchIssuesData {
  total_count: number
  items: Issue[]
}

export function HomePage() {
  const [countIssues, setCountIssues] = useState(0)
  const [searchIssue, setSearchIssue] = useState('')
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues(searchTerm = '') {
    const response = await api.get<FetchIssuesData>(
      `/search/issues?q=${encodeURIComponent(
        searchTerm,
      )} repo:MauricioAires/github-blog-airs`,
    )

    setCountIssues(response.data.total_count)
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    fetchIssues(searchIssue)
  }

  return (
    <S.HomePageWrapper>
      <Profile />

      <S.HomeMain>
        <S.Title>
          <h1>Publicações</h1>

          <span>{countIssues} publicações</span>
        </S.Title>
        <S.SearchForm onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchIssue}
            onChange={(e) => setSearchIssue(e.target.value)}
            placeholder="Buscar conteúdo"
          />
          <button type="submit">Buscar</button>
        </S.SearchForm>
        <S.PostList>
          {issues.map((issue) => (
            <Link key={issue.id} to={`/post/${issue.number}`}>
              <PostCard
                body={issue.body}
                createdAt={issue.created_at}
                title={issue.title}
              />
            </Link>
          ))}
        </S.PostList>
      </S.HomeMain>
    </S.HomePageWrapper>
  )
}
