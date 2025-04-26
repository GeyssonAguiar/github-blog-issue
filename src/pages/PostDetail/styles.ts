import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

export const DetailContainer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 100%;
  flex-direction: column;
  margin-bottom: 2.5rem;
`
export const NavButton = styled(NavLink)`
text-decoration: none;
  background: transparent;
  color: ${props => props.theme.blue};
  transition: border 0.2s;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;

  &:hover {
    border-bottom: 2px solid ${props => props.theme.blue};
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  a {
      text-decoration: none;
      background: transparent;
      color: ${props => props.theme.blue};
      transition: border 0.2s;
      border-bottom: 2px solid transparent;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: uppercase;

      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;

      &:hover {
        border-bottom: 2px solid ${props => props.theme.blue};
      }
    }
`


export const ResumeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`

  width: 38.25rem;

  h1 {
    color: ${props => props.theme['baseTitle']};
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 700;
  }

  a {
    display: flex;
    height: fit-content;
    align-items: center;

    text-decoration: none;
    color: ${props => props.theme['blue']};
    font-size: .75rem;
    font-weight: 700;
    line-height: 160%;
    gap: 0.5rem;
    

    &:hover {
      border-bottom: 2px solid ${props => props.theme.blue};
    }
  }
`

export const StyledGitIcon = styled(FontAwesomeIcon)`
  font-size: .75rem;
  display: flex;
`

export const StyledOtherIcon = styled(FontAwesomeIcon)`
  font-size: 1.125rem;
  display: flex;
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 160%;
  font-weight: 400;

  margin-top: .5rem;
  color: ${props => props.theme['baseText']};
`

export const NavContainer = styled.nav`
  ul {
    display: flex;
    margin-top: 1.5rem;
    flex-direction: row;
  }
  li {
    display: flex;
    list-style-type: none;
    padding-right: 1.5rem;

    display: flex;
    /* justify-content: center; */
    align-items: center;
    text-decoration: none;

    gap: .5rem;

    font-size: 1rem;
    line-height: 160%;
    font-weight: 400;
    color: ${props => props.theme['baseSubtitle']};
  }  
`

export const BodyContainer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
`