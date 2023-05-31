import styled, {createGlobalStyle} from "styled-components";

/*-------------------------Responsive----------------------------------*/
export const responsive = {
	small: "(min-width: 320px)",
	medium: "(min-width: 540px)",
	large: "(min-width: 768px)",
	exLarge: "(min-width: 1024px)"
}
/*-------------------------Globalstyle----------------------------------*/
export const GlobalStyle = createGlobalStyle`
	*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
	}
	html{
		scroll-behavior: smooth;
	}
`
export const Container = styled.div`
	margin: auto;
	@media ${responsive.small} {
		max-width: 300px;
	}
	@media ${responsive.medium} {
		max-width: 450px;
	}
	@media ${responsive.large} {
		max-width: 600px;
	}
`


