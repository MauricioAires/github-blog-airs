import * as S from './styles'

import GithubBlogLogo from '../../assets/github-blog-logo.svg'

export function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <img src={GithubBlogLogo} alt="" />
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}
