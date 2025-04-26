import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const TitlePubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
    color: ${props => props.theme['baseSubtitle']};
  }

  div {
    display: flex;
    flex-direction: row;
    gap: .5rem;

    font-size: .875rem;
    line-height: 160%;
    color: ${props => props.theme['baseSpan']}
  }
`

export const SearchFormContainer = styled.form`
  margin-top: .75rem;
  input {
    width: 100%;
    padding: .75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${props => props.theme['baseBorder']};
    background-color: ${props => props.theme['baseInput']};
    color: ${props => props.theme['baseLabel']};
    font-size: 1rem;
    line-height: 160%;
    font-weight: 400;

    &::placeholder {
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
      color: ${props => props.theme['baseLabel']};
    }

    &:focus {
      border: 1px solid ${props => props.theme['brandBlue']};
      &::placeholder {
        color: ${props => props.theme['baseText']};
      }
    }

 
  }
`

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
`

export const CardPosts = styled(NavLink)`
  text-decoration: none;
  border-radius: 10px;
  background-color: ${props => props.theme['basePost']};
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;

  }

  h1 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: ${props => props.theme['baseTitle']};
      text-align: justify;
    }

  time {
    color: ${props => props.theme['baseSpan']};
  }
    
  p {
      font-size: 0.875rem;
      line-height: 160%;
      color: ${props => props.theme['baseText']};
    }
`
