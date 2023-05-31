import styled from "styled-components";
import {responsive} from './style';

export const ItemContainer = styled.div`
	display: grid;
	color: ${props => props.darkChange? "black" : "white"};
	padding:0.5rem;
  &:first-child{ 
    grid-column: 1/ span 2;
  }
  :not(:first-child) { 
    transform: translateY(-0.8rem);
  }
`
export const ItemTitle = styled.h2`
	font-size: ${props => props.titulo === 'SALDO' ? '1rem' : '0.8rem'};
  font-weight: 500;
  @media ${responsive.medium} {
    font-size: ${props => props.titulo === 'SALDO' ? '1.3rem' : '1rem'};
    font-weight: 700;
  }
`
export const ItemInfo = styled.div`
	display: flex;
  
`
export const ItemSpan = styled.span`
	font-size:  ${props => props.titulo === 'SALDO' ? '1.6rem' : '1rem'};
  font-weight:500;
  padding: 5px;
  color: ${props => props.color};
  @media ${responsive.medium} {
    font-size: ${props => props.titulo === 'SALDO' ? '1.8rem' : '1.3rem'};
    font-weight: 700;
  }
`