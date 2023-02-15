import { FaGithub, FaClock, FaComment, FaChevronLeft } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

import * as S from './styles'
import { Link } from 'react-router-dom'

export function PostPage() {
  return (
    <S.PostPageWrapper>
      <S.PostPageContent>
        <S.PostHeader>
          <S.Navigation>
            <Link to="/">
              <FaChevronLeft />
              Voltar
            </Link>

            <a href="#">
              Ver no Github <BiLinkExternal fontWeight="bold" />
            </a>
          </S.Navigation>

          <h1>JavaScript data types and data structures</h1>
          <S.Summary>
            <span>
              <FaGithub size={16} />
              cameronwll
            </span>
            <time>
              <FaClock size={16} />
              Há 121 dia
            </time>
            <span>
              <FaComment size={16} />
              55555 comentários
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
