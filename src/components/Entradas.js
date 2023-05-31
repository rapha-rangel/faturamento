import { useState } from "react";
import {EntradasSection, 
				EntradasContainer, 
				EntradasForm ,
				InputDescricao,
				InputValor, 
				EntradasContent, 
				EntradasInput, 
				Button, 
				EntradasLabelDescricao,
				EntradasLabelValor
			} from "./EntradaStyle";

const Entradas= ({handleSave, darkChange})=>{
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState(0);
    const [tipo, setTipo] = useState(0);
		const [textInputDescricao, setTextInputDescricao]= useState(false);
		const [textInputValor, setTextInputValor]= useState(false);

		const handleDescricao =(e)=>{
				setDescricao(e.target.value);
				if (e.target.value.length > 0){
					setTextInputDescricao(true)
					
				} else {
					setTextInputDescricao(false)
				}
				console.log(textInputDescricao)
		}

		const handleValor =(e)=>{
			setValor(e.target.value);
			if (e.target.value.length > 0){
				setTextInputValor(true)
			} else {
				setTextInputValor(false)
			}
			console.log(textInputValor)
	}

    const Salvar =(event)=>{
        if(!descricao){
            return(
            alert("Campo Descrição Vazio")
            )
        }else if(!valor){
            return(
            alert("Campo Valor Vazio")
            )}else{
        event.preventDefault();
        const dadosFin={
            descricao: descricao,
            valor: valor,
            tipo: tipo,
						isViewed: true
        }
        handleSave(dadosFin);
        event.target.reset();
        setDescricao(!descricao);
        setValor(!valor);
				setTextInputDescricao(false);
				setTextInputValor(false);
        }
    }
	
	

	return(
		<EntradasSection darkChange={darkChange}>
			<EntradasContainer >
				<EntradasForm onSubmit={Salvar}>
						<EntradasInput>
							<>
							<InputDescricao type="text" id='descricao' textInput={textInputDescricao} onChange={handleDescricao}/>
							<EntradasLabelDescricao darkChange={darkChange} for='descricao'  textInput={textInputDescricao} >Informe a Descrição:</EntradasLabelDescricao>
							</>
							<>
							<InputValor type="number" name="quantity" step="0.01" min="0.01" id='valor' textInput={textInputValor} onChange={handleValor}/>
							<EntradasLabelValor darkChange={darkChange} for='valor' textInput={textInputValor} >Informe o Valor:</EntradasLabelValor>
							</>
							
							</EntradasInput>
					<EntradasContent>
						<Button
							type="submit"
							entrada
							onClick={()=> setTipo(0)}
							>Receita
						</Button>
						<Button
							type="submit"
							saida
							onClick={()=> setTipo(1)}
							>Despesa
						</Button>
					</EntradasContent>
			</EntradasForm>
		</EntradasContainer>
		</EntradasSection>
    )
}

export default Entradas;