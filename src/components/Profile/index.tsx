import { Buildings, GithubLogo, Share, Users } from 'phosphor-react'
import * as S from './styles'
export function Profile() {
  return (
    <S.ProfileWrapper>
      <S.ProfileContent>
        <img src="https://github.com/MauricioAires.png" alt="Mauricio Aires" />
        <div>
          <header>
            <h1>Mauricio Aires de Freitas</h1>
            <a
              href="https://github.com/MauricioAires"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
              <Share size={15} weight="bold" />
            </a>
          </header>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <footer>
            <span>
              <GithubLogo weight="fill" size={18} /> MauricioAires
            </span>
            <span>
              <Buildings weight="fill" size={18} /> DBC
            </span>
            <span>
              <Users weight="fill" size={18} /> 32 seguidores
            </span>
          </footer>
        </div>
      </S.ProfileContent>
    </S.ProfileWrapper>
  )
}
