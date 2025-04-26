

import { useForm } from "react-hook-form";
import { formatDistanceToNow } from "date-fns";
import { TitlePubContainer, CardContainer, CardPosts, SearchFormContainer } from "./styles";
import { api } from "../../../../../lib/axios";
import { useEffect, useState } from "react";
import { formatText } from "../../../../utils/formatText";
import { ptBR } from "date-fns/locale";


export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: string;
}


export function  Posts() {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[])
  const [postsCounter, setPostsCounter] = useState(0)

  async function fetchPosts(query = "") {
    const response = await api.get(
      `search/issues?q=${
        query ? query : ""
      }%20repo:${"geyssonaguiar"}/github-blog-issue`)
    
    const issueObj = response.data.items.map(item => ({
      ...item,
      created_at: formatDistanceToNow(new Date(item.created_at), {
          addSuffix: true,
          locale:ptBR
        })
    }));

    setPosts(issueObj);
    setPostsCounter(issueObj.length)
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const {
      register, 
      handleSubmit
    } = useForm<IPost>()
    
    
  function onSubmit(data) {
    fetchPosts(data.query)
    
  }
  
  return (
    <>
    <TitlePubContainer>
      <h2>Publicações</h2>
      <div>
        <span>{postsCounter}</span>
        <span>publicações</span>
      </div>
    </TitlePubContainer>

    <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Buscar conteúdo'
        {...register('query')}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); // evita o comportamento padrão
            handleSubmit(onSubmit)(); // dispara o submit do RHF
          }
        }}
      >
      </input>
    </SearchFormContainer>
    <CardContainer>
    {posts && 
      posts.map((post) => (
        <CardPosts to={`${post.number}`}
          key={`${post.title}-${post.number}`}>
            <header>
              <h1>{post.title}</h1>
              <time>{post.created_at}</time>
            </header>
            <main>
              <p>{formatText(post.body, 30)}</p>
            </main>
        </CardPosts>
      ))}
    </CardContainer>
    </>
  )
}