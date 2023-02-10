import { ArrowArcLeft, GithubLogo, MessengerLogo, Timer } from 'phosphor-react'

import * as S from './styles'

export function PostPage() {
  return (
    <S.PostPageWrapper>
      <S.PostPageContent>
        <S.PostHeader>
          <S.Navigation>
            <a href="#">
              <ArrowArcLeft />
              Voltar
            </a>

            <a href="#">Ver no Github</a>
          </S.Navigation>

          <h1>JavaScript data types and data structures</h1>
          <S.Summary>
            <span>
              <GithubLogo size={16} weight="fill" />
              cameronwll
            </span>
            <time>
              <Timer size={16} weight="fill" />
              Há 1 dia
            </time>
            <span>
              <MessengerLogo size={16} weight="fill" />5 comentários
            </span>
          </S.Summary>
        </S.PostHeader>
        <main>
          <b>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </b>
          <p>
            This article attempts to list the built-in data structures available
            in JavaScript and what properties they have. These can be used to
            build other data structures. Wherever possible, comparisons with
            other languages are drawn. Dynamic typing JavaScript is a loosely
            typed and dynamic language. Variables in JavaScript are not directly
            associated with any particular value type, and any variable can be
            assigned (and re-assigned) values of all types:
          </p>

          <code>
            let foo = 42; // foo is now a number foo = ‘bar’; // foo is now a
            string foo = true; // foo is now a boolean
          </code>
        </main>
      </S.PostPageContent>
    </S.PostPageWrapper>
  )
}
