import * as S from './styles'

interface PostCardProps {
  title: string
  createdAt: string
  body: string
}

export function PostCard({ body, createdAt, title }: PostCardProps) {
  return (
    <S.PostCardWrapper>
      <header>
        <span>{title}</span>
        <time>{createdAt}</time>
      </header>

      <p>{body}</p>
    </S.PostCardWrapper>
  )
}
