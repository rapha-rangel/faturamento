import { GridSection, GridContainer, GridTitle, Span, GridTitleText, GridContent, SpanData, GridContentLine,GridContentLineText } from "./GridStyle";

const Grid = ({dadosFin, onDelete, page, setPage, totalPage, closeCard, setCloseCard, darkChange})=>{

	const handleDelete =(index)=>{
		const dado = dadosFin[index];
		dado.isViewed = false;
		dadosFin[index] = dado;
		setCloseCard(false);
		setTimeout(()=>{
			onDelete(index)
		}, 1000)
		console.log(dadosFin[index].isViewed, closeCard)
	}

	return(
	<>
		<GridSection darkChange={darkChange}>
			<GridContainer>
				<GridTitle darkChange={darkChange}>
					<GridTitleText >Descrição</GridTitleText>
					<GridTitleText valor="32px" >Valor</GridTitleText>
				</GridTitle>
				<GridContent>
					{dadosFin.map((dadoFin, index)=>(
						<GridContentLine
							closeCard={dadosFin[index].isViewed} 
							key={index}
							>
							{console.log(dadosFin, closeCard)}
							<GridContentLineText>{dadoFin.descricao}</GridContentLineText>
							<GridContentLineText>R${Math.abs(dadoFin.valor).toFixed(2)}</GridContentLineText>
								{dadoFin.tipo === 0?(
									<SpanData color="#5CF594" hoverColor="#0B8937" onClick={()=>handleDelete(index)}><Span>+</Span></SpanData>
								): (
									<SpanData color="#F7746E"  hoverColor="#E32E02" onClick={()=>handleDelete(index)}><Span>-</Span></SpanData>
								)
								}
						</GridContentLine>
					))}
				</GridContent>
			</GridContainer>
		</GridSection>
	
	</>
	)
}

export default Grid;