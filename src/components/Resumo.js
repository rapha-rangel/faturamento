import {ResumoContainer, ResumoContent, ResumoSection, DarkButton, DarkIcon} from "./ResumoStyle";
import ResumoItens from "./ResumoItens";
import React, { useState } from "react";
import { BsSun, BsMoon } from 'react-icons/bs';


const Resumo = ({receita, saldo, despesa, darkChange, setDarkChange})=>{
	const [iconChange, setIconChange] = useState(<BsSun/>);

	const handleDark = ()=>{
		setDarkChange(prevState => !prevState)
		if (darkChange) {
			setIconChange(<BsSun/>);
		} else {
			setIconChange(<BsMoon/>);
		}
	}

	return(
		<ResumoSection darkChange={darkChange}>
			<DarkButton darkChange={darkChange}>
				<DarkIcon
					darkChange={darkChange} 
					onClick={handleDark}>
					{iconChange}
				</DarkIcon>
			</DarkButton>
			<ResumoContainer >
				<ResumoContent>
					<ResumoItens darkChange={darkChange} valor={saldo} titulo="SALDO"/>
					<ResumoItens darkChange={darkChange} valor={receita} titulo="RECEITA" color="#15803d"/>
					<ResumoItens darkChange={darkChange} valor={despesa} titulo="DESPESA"  color="#b91c1c"/>
				</ResumoContent>
			</ResumoContainer>
			
		</ResumoSection>
	
	)
}

export default Resumo;