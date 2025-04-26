import { Avatar, Description, NameContainer, NavContainer, ProfileContainer, ResumeContainer, StyledGitIcon, StyledOtherIcon } from "./styles";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {api} from "../../../../../lib/axios"
import { useEffect, useState } from "react";

interface IUserInfo {
  name: string;
  followers: number;
  login: string;
  company: string; 
  html_url: string;
  avatar_url: string;
  bio: string;
}

export function UserInfo() {
  const [userInfo, setUserInfo] = useState<IUserInfo>()

  async function fetchUsers() {
    const response = await api.get("users/geyssonaguiar");
    const {name, followers, login, company, html_url, avatar_url, bio} = response.data
    const userObj = {
      name, followers, login, company, html_url, avatar_url, bio
    }

    setUserInfo(userObj)
  }
  
  useEffect(() => {
    fetchUsers()
  }, [])

  return(
    <ProfileContainer>

        <Avatar src={userInfo?.avatar_url}/>
        <ResumeContainer>
          <NameContainer>
            <h1>{userInfo?.name}</h1>
            <a href={userInfo?.html_url}> 
            GITHUB 
            <StyledGitIcon  icon={faArrowUpRightFromSquare} />
          
            </a>
          </NameContainer>

          <Description>
            {userInfo?.bio}
          </Description>
          <NavContainer>
            <ul>
              <li><StyledOtherIcon icon={faGithub} />{userInfo?.login}</li>
              <li><StyledOtherIcon icon={faBuilding} />{userInfo?.company}</li>
              <li><StyledOtherIcon icon={faUserGroup} />{userInfo?.followers}</li>
            </ul>
      
          </NavContainer> 

        </ResumeContainer>
      </ProfileContainer>
  )
}

