import styled from "styled-components";
import {responsive} from './style'

export const EntradasSection = styled.section`
  padding: 1rem 0 1rem;
	background-color: ${props => props.darkChange? "#F4F6F7" : "#34495E"};
	margin: auto;
	width: 80%;
	@media ${responsive.large} {
		padding: 2rem 0 1rem;
	}
`
export const EntradasContainer = styled.div`
	margin-left: 1rem;
	margin-right: 1rem;
	@media ${responsive.medium} {
		margin-left: 3rem;
		margin-right: 3rem;
	}
`
export const EntradasForm = styled.form`
display: grid;
`
export const EntradasContent = styled.div`
display: flex;
align-items:center;
justify-content: space-around;
`
export const EntradasInput = styled.div`
display: grid;
align-items:center;
gap: 0.5rem;
`
export const InputDescricao = styled.input`
font-size: 0.8rem;
display: block;
border-radius: 5px;
border: none;
align-items: center;
padding: 0.5rem;
transition: all 0.5s;
background-color: #fff;
color: black;
box-shadow: 0px 3px 5px 0px gray;
max-width: 350px;
:focus-visible{ 
  outline: none;
}
@media ${responsive.large} {
	font-size: 1.2rem;
	}
`
export const InputValor = styled.input`
display: block;
border: none;
border-radius: 5px;
align-items: center;
padding: 0.5rem;
transition: all 0.5s;
background-color: #fff;
box-shadow: 0px 3px 5px 0px gray;
max-width: 350px;
:focus-visible{ 
  outline: none;
}
@media ${responsive.large} {
	font-size: 1.2rem;
}
`
export const EntradasLabelDescricao = styled.label`
	font-size: 0.8rem ;
	font-weight: 500;
	position:relative;
	top:${props => props.textInput ? '-3.8rem': '-2.0rem'};
	left:0.5rem;
	color: #000;
	background-color: transparent;
	transition: 1s;
	${InputDescricao}:focus ~ & {
		top:-3.8rem;
		position: relative;
		color: ${props => props.darkChange? "#000" : "#fff"};
	}
	@media ${responsive.large} {
		font-size: 1.2rem;
		top:${props => props.textInput ? '-4.8rem': '-2.5rem'};
		${InputDescricao}:focus ~ & {
			top:-4.8rem;
		}
	}
`
export const EntradasLabelValor = styled.label`
	font-size: 0.8rem ;
	font-weight: 500;
	position:relative;
	top:${props => props.textInput ? '-3.8rem': '-2.2rem'};
	left:0.5rem;
	color: #000;
	background-color: transparent;
	transition: 1s;
	${InputValor}:focus ~ & {
		position:relative;
		top:-3.8rem;
		color: ${props => props.darkChange? "#000" : "#fff"};
	}
	@media ${responsive.large} {
		font-size: 1.2rem;
		position: relative;
		top:${props => props.textInput ? '-4.8rem': '-2.5rem'};
		${InputValor}:focus ~ & {
			top:-4.8rem;
		}
	}
`
export const Button= styled.button`
	height: 2rem ;
	padding: 0.5rem;
	font-size: 1rem;
	border: none;
	border-radius: 5px;
	font-weight: 500;
	background: ${props=> props.entrada?"#34d399" : "#ef4444" };
	color: #fff;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover{
		background: ${props=> props.entrada?"#15803d" : "#b91c1c" };
		box-shadow: ${props=> props.entrada?"0px 0px 0px 5px #15803d" : " 0px 0px 0px 5px #b91c1c"};
	}
	@media ${responsive.large} {
		font-size: 1.5rem;
		padding: 0.5rem 1rem;
		height: 3rem;
	}
`