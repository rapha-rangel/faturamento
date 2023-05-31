import styled, { keyframes,css } from "styled-components";
import {responsive} from './style';


export const GridSection = styled.section`
	margin: auto;
	background-color: ${props => props.darkChange? "#F4F6F7" : "#34495E"};
	width: 80%;
	border-bottom-left-radius:1rem;
	border-bottom-right-radius: 1rem;
  padding: 1rem 0 1.5rem;
  @media ${responsive.large} {
    padding: 2rem 0 2.5rem;
  }
`
export const GridContainer = styled.div`
  display: grid;
`
export const GridTitle = styled.div`
  display: grid;
  padding: 5px;
  grid-template-columns: 1.2fr 0.8fr;
  color: ${props => props.darkChange? "#000" : "#fff"};
`
export const GridTitleText = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px ${props =>props.valor} 5px 5px ;
  font-size: 0.8rem;
  @media ${responsive.large} {
    font-size: 1.5rem;
  }
`
export const GridContent = styled.div`
  display: grid;
  color: #fff;
  gap: 0.5rem;
  @media ${responsive.large} {
    gap: 1rem
  }
`
export const closeSpanData = keyframes`
  0%{
    opacity: 0 }
  100%{
    opacity: 1;
  }
`
export const closeSpanData2 = keyframes`
  0%{
    opacity: 1}
  100%{
    opacity: 0;
  }
`
export const GridContentLine = styled.div`
  position: relative;
  left: 0;
  display: grid;
  width: 100%;
  color: #000;
  align-items: center;
  opacity: 1;
  grid-template-columns: 1.4fr 0.6fr 0fr;
  background-color : #fff;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: 0px 3px 5px 0px gray;
  ${(props) => {
  if (props.closeCard){
    return css`
    animation: ${closeSpanData} 1s ;
    `
  }else{
    return css`
    animation: ${closeSpanData2} 1s ;
    `
  }}};
`
export const GridContentLineText = styled.p`
  position: relative;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${responsive.large} {
    font-size: 1.2rem;
  }
`
export const SpanData = styled.div`
	position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
	left:1rem;
	width: 2rem;
	height: 2rem;
	border-top-right-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	background-color: ${props => props.color};
  cursor: pointer;
  :hover {
    box-shadow: 4px 0px 0px ${props => props.hoverColor};
    background-color: ${props => props.hoverColor};
  }
`
export const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
`