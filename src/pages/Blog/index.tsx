import { IssuePosts } from "./components/IssuePosts";
import { BlogContainer } from "./styles";
import { UserInfo } from "./components/UserInfo";



export function Blog() {
  return (
    <BlogContainer>
      <UserInfo />
      <IssuePosts />
    </BlogContainer>
  )
}