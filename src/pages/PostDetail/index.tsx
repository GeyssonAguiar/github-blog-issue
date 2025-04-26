import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";
import { NavContainer, DetailContainer, ResumeContainer, StyledOtherIcon, NavButton, HeaderContainer, TitleContainer, BodyContainer } from "./styles";
import { faComment, faUserGroup, faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { BlogContainer } from "../Blog/styles";


interface IPostDetail {
  title: string;
  comments: number;
  createdAt: string;
  githubUsername: string;
  url: string;
  body: string;
}

export function PostDetail() {
  const [post, setPost] = useState<IPostDetail>({} as IPostDetail);
  const { id } = useParams();


  async function fetchPost() {
    const response = await api.get(
      `/repos/geyssonaguiar/github-blog-issue/issues/${id}`)

    const { title, comments, created_at, user, html_url, body } = response.data;
    const newPostObj = {
      title,
      githubUsername: user.login,
      comments,
      createdAt: formatDistanceToNow(new Date(created_at), {
        locale: ptBR,
        addSuffix: true,
      }),
      url: html_url,
      body,
    };
    setPost(newPostObj);
  }


  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <BlogContainer>
      <DetailContainer>
        <HeaderContainer>
          <NavButton to='/'>
            Voltar
          </NavButton>
          <a href={post.url} target="_blank">
          VER NO GITHUB
          </a>

        </HeaderContainer>

        <ResumeContainer>
          <TitleContainer>
            <h1>{post.title}</h1>
          </TitleContainer>
          <NavContainer>
            <ul>
              <li><StyledOtherIcon icon={faGithub} />{post.githubUsername}</li>
              <li><StyledOtherIcon icon={faCalendarDays} />{post.createdAt}</li>
              <li><StyledOtherIcon icon={faComment} />{post.comments}</li>
            </ul>
      
          </NavContainer> 

        </ResumeContainer>
      </DetailContainer>
      <BodyContainer>
        <p>{post.body}</p>
      </BodyContainer>
    
    </BlogContainer>
  )
}