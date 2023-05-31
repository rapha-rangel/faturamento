import {ItemContainer, ItemTitle, ItemInfo, ItemSpan } from "./ResumoItensStyle";

const ResumoItens = ({valor, titulo, color, darkChange})=>{
   

	return(
		<ItemContainer darkChange={darkChange}>
			<ItemTitle titulo={titulo}>{titulo}</ItemTitle>
			<ItemInfo >
				<ItemSpan titulo={titulo}>R$</ItemSpan>
				<ItemSpan titulo={titulo} color={color}>{valor}</ItemSpan>
			</ItemInfo>
		</ItemContainer>
	)

}

export default ResumoItens;