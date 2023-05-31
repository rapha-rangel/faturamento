import styled from "styled-components";
import {responsive} from './style';

export const ResumoSection = styled.section`
	padding: 0 0 1rem;
  background-color: ${props => props.darkChange? "#F4F6F7" : "#34495E"};
  width: 80%;
  margin: auto;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`
export const ResumoContainer= styled.div`
	margin-right: 1rem;
  margin-left: 1rem;
  @media ${responsive.medium} {
    margin-right: 2rem;
    margin-left: 2rem;
  }
`
export const ResumoContent = styled.div`
	display: grid;
  grid-template-columns: auto auto;
  justify-items: flex-start;
  gap:0.6rem;
`
export const DarkButton = styled.div`
  position: relative;
  display: flex;
  top: 1rem;
  height: 2rem;
  right: 1.5rem;
  width: 1.5rem;
  padding: 0.2rem 0rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  justify-content: center;
  transition: 1s;
  background-color: ${props => props.darkChange? "#7D3C98" : "#F8F67B"};
  cursor: pointer;
  :hover {
    right: 2.5rem;
    width: 2.5rem;
    padding: 0.2rem 0rem;
  }
  @media ${responsive.large} {
    height: 2.5rem;
    :hover {
      right: 3rem;
      width: 3rem;
    }
  }
`
export const DarkIcon = styled.a`
  font-size: 1.3rem;
  font-weight: 900;
  color:${props => props.darkChange? "#fff" : "#000"};
  display: none;
  ${DarkButton}:hover &{
    display: block;
  }
  @media ${responsive.large} {
    font-size: 1.8rem;
  }
`